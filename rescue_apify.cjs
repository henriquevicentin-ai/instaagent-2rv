// rescue_apify.cjs

const axios = require('axios');
const { createClient } = require('@supabase/supabase-js');

// Constantes (Tenta pegar do .env, caso não existam, usa fallback fixo extraído da sessão de design)
const apifyToken = process.env.APIFY_TOKEN || '';
const supabaseUrl = process.env.SUPABASE_URL || 'https://vzbbdgpjpteowpnklxly.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_NEznO1iLBT1YSqEkw6-yKw_fUs7g7RH';

const supabase = createClient(supabaseUrl, supabaseKey);

async function rescueData() {
    try {
        console.log('1. Buscando Runs (Corridas) antigas salvas na sua conta Apify...');
        // Busca as ultimas 20 corridas. A API read-only de histórico é liberada independente de cota.
        const runsReq = await axios.get(`https://api.apify.com/v2/actor-runs?token=${apifyToken}&limit=20&desc=true`);
        
        const validRuns = runsReq.data.data.items.filter(r => r.status === 'SUCCEEDED' && r.defaultDatasetId);
        
        console.log(`=> Encontrados ${validRuns.length} Runs (Corridas) processados com sucesso no histórico!\n`);
        
        let allPosts = [];

        // Extrai os itens de cada dataset listado nas corridas
        for (const run of validRuns) {
            console.log(`Lendo posts salvos no Dataset: ${run.defaultDatasetId} (Data Original: ${new Date(run.finishedAt).toLocaleString()})...`);
            try {
                const datasetReq = await axios.get(`https://api.apify.com/v2/datasets/${run.defaultDatasetId}/items?token=${apifyToken}`);
                const items = datasetReq.data || [];
                for (const p of items) {
                    if (!p.id) continue;
                    allPosts.push({
                        post_id: p.id,
                        user: p.ownerFullName || p.ownerUsername || 'Desconhecido',
                        handle: '@' + (p.ownerUsername || 'desconhecido'),
                        avatar: p.ownerProfilePicUrl || 'https://ui-avatars.com/api/?name=' + (p.ownerUsername || 'A'),
                        time: p.timestamp ? new Date(p.timestamp).toISOString() : new Date().toISOString(),
                        text: p.caption || '',
                        likes: p.likesCount || 0,
                        comments: p.commentsCount || 0,
                        imageUrl: p.displayUrl || '',
                        postUrl: p.url || '',
                        seller: 'Resgatado (Apify Storage)'
                    });
                }
            } catch (err) {
                console.log(`Erro isolado ao ler Dataset ${run.defaultDatasetId}: ${err.message}`);
            }
        }

        console.log(`\n=> Total de posts antigos formatados e resgatados: ${allPosts.length}`);

        if (allPosts.length > 0) {
            console.log('2. Injetando dados resgatados no Supabase de Produção...');
            // Insere em Lotes (Chunks) de 200 posts para evitar Payload Too Large no Banco
            const chunkSize = 200;
            for (let i = 0; i < allPosts.length; i += chunkSize) {
                const chunk = allPosts.slice(i, i + chunkSize);
                const { error } = await supabase.from('extracted_posts').upsert(chunk, { onConflict: 'post_id' });
                
                if (error) {
                    console.error('Erro ao inserir lote no Supabase:', error.message);
                } else {
                    console.log(`✅ Lote de ${chunk.length} posts injetados com sucesso! (${i + chunk.length}/${allPosts.length})`);
                }
            }
            console.log('\nRESGATE FINALIZADO COM SUCESSO! 🚀');
            console.log('Por favor, abra o seu Dashboard e recarregue (F5) a página. Os posts antigos estarão lá.');
        } else {
            console.log('\nNenhum post foi encontrado nos Datasets salvos no Apify. Pode ser que tenham expirado.');
        }

    } catch (error) {
        console.error('Erro Fatal no script de resgate de dados:', error.message);
    }
}

rescueData();
