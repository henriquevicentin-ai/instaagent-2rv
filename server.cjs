const express = require('express');
const cors = require('cors');
const archiver = require('archiver');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient('https://vzbbdgpjpteowpnklxly.supabase.co', 'sb_publishable_NEznO1iLBT1YSqEkw6-yKw_fUs7g7RH');
const cheerio = require('cheerio');

const app = express();
app.use(cors());
app.use(express.json());

// 1. ROTA DE BACKUP
app.post('/api/backup', (req, res) => {
  try {
    const backupDir = path.resolve(__dirname, '..');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupName = `InstaAgent_Backup_${timestamp}.zip`;
    const outputPath = path.join(backupDir, backupName);

    const output = fs.createWriteStream(outputPath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    output.on('close', () => {
      res.json({ success: true, message: `Backup salvo com sucesso na pasta 2rv-agent - Copia: ${backupName}`, bytes: archive.pointer() });
    });

    archive.on('error', (err) => {
      res.status(500).json({ success: false, error: err.message });
    });

    archive.pipe(output);
    // Zipa a pasta inteira onde o servidor está rodando (Dashboard)
    archive.directory(__dirname, false);
    archive.finalize();
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 2. ROTA DE BUSCA DE IMAGEM REAL (BING SCRAPER PARA RESOLVER O ERRO 403 DO GOOGLE)
app.get('/api/search-images', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Falta parâmetro q' });

  try {
    const bingUrl = `https://www.bing.com/images/search?q=${encodeURIComponent(q + ' revestimento porcelanato piso foto real')}`;
    const response = await axios.get(bingUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
      }
    });

    const $ = cheerio.load(response.data);
    const images = [];

    // O Bing armazena os metadados da imagem no atributo 'm' da classe '.iusc'
    $('a.iusc').each((i, el) => {
      if (images.length >= 3) return false; // Pega apenas as 3 primeiras
      try {
        const mData = JSON.parse($(el).attr('m'));
        if (mData && mData.murl) {
           // Filtra ícones pequenos ou logos
           if (!mData.murl.includes('logo') && !mData.murl.includes('icon')) {
              images.push({ url: mData.murl, page: mData.purl || mData.murl });
           }
        }
      } catch(e) {}
    });

    if (images.length > 0) {
      res.json({ url: images[0].url, page: images[0].page, source: 'google' });
    } else {
      res.status(404).json({ error: 'Nenhuma imagem encontrada' });
    }
  } catch (error) {
    console.error('Erro na busca de imagens:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// 3. ROTA DE GERAÇÃO DE IMAGEM COM RETENTATIVAS (POLLINATIONS)
app.post('/api/generate-image', async (req, res) => {
  const { prompt, ratio } = req.body;
  
  const dims = ratio === 'portrait' ? 'width=832&height=1040'
             : ratio === 'landscape' ? 'width=1216&height=684'
             : 'width=1024&height=1024';
  
  const seed = Math.floor(Math.random() * 99999);
  const encodedPrompt = encodeURIComponent(prompt);
  const imgUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?${dims}&seed=${seed}&nologo=true`;

  const MAX_RETRIES = 3;
  let attempt = 0;

  while(attempt < MAX_RETRIES) {
    try {
      console.log(`Tentativa ${attempt+1} gerando pelo Pollinations: ${imgUrl}`);
      // Timeout de 45 segundos por tentativa no backend com User-Agent real
      const response = await axios.get(imgUrl, { 
        responseType: 'arraybuffer', 
        timeout: 45000,
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' }
      });
      if(response.status === 200) {
         res.set('Content-Type', 'image/jpeg');
         return res.send(response.data);
      }
    } catch(e) {
      console.error(`Erro na tentativa ${attempt+1}:`, e.message);
    }
    attempt++;
    // Aguarda 2 segundos antes de tentar de novo
    if (attempt < MAX_RETRIES) await new Promise(r => setTimeout(r, 2000));
  }

  res.status(503).json({ error: 'Servidor de imagens indisponível após 3 tentativas.' });
});

const PORT = 3000;

// 4. ROTA DE SINCRONIZAÇÃO APIFY (Instagram Profile Scraper)
app.post('/api/sync-apify', async (req, res) => {
  const { apifyToken, profiles, isAdmin } = req.body; // isAdmin flag for UI control
  if (!apifyToken || !profiles || !profiles.length) {
    return res.status(400).json({ error: 'Token Apify ou perfis ausentes.' });
  }

  try {
    const usernames = profiles.map(p => p.replace('@', ''));
    const runUrl = `https://api.apify.com/v2/acts/apify~instagram-profile-scraper/run-sync-get-dataset-items?token=${apifyToken}`;
    console.log('[Apify] Iniciando extração para os perfis:', usernames);
    const startTime = Date.now();
    const response = await axios.post(runUrl, { usernames }, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 300000
    });
    const execTime = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`[Apify] Extração concluída em ${execTime}s`);

    // Transformar resultados
    const scrapedPosts = response.data.reduce((arr, item) => {
      if (item.latestPosts && item.latestPosts.length > 0) {
        const p = item.latestPosts[0];
        arr.push({
          user: item.fullName || item.username,
          handle: '@' + item.username,
          avatar: item.profilePicUrl || '?',
          time: p.timestamp,
          text: p.caption || '',
          likes: p.likesCount || 0,
          comments: p.commentsCount || 0,
          imageUrl: p.displayUrl,
          postUrl: p.url,
          postId: p.id,
          seller: null // placeholder – pode ser preenchido futuramente
        });
      }
      return arr;
    }, []);

    // Ordenar por tempo decrescente e limitar a 500
    const limitedPosts = scrapedPosts
      .sort((a, b) => new Date(b.time) - new Date(a.time))
      .slice(0, 500);

    // Upsert no Supabase
    const { data, error: upsertErr } = await supabase
      .from('extracted_posts')
      .upsert(limitedPosts, { onConflict: 'post_id' });
    if (upsertErr) throw upsertErr;

    // Log da sincronização
    const logDetails = `Sync ${limitedPosts.length} posts (last ${execTime}s)`;
    await supabase.from('agente_insta_sync_logs').insert({ status: 'success', details: logDetails });

    res.json({ success: true, count: limitedPosts.length, posts: limitedPosts, lastSync: new Date().toISOString() });
  } catch (error) {
    console.error('Erro no Apify:', error);
    // Log de falha
    await supabase.from('agente_insta_sync_logs').insert({ status: 'error', details: error.message });
    res.status(500).json({ error: 'Falha ao sincronizar com Apify. Verifique o token ou os logs.' });
  }
});

// Serve the frontend in production
if (fs.existsSync(path.join(__dirname, 'dist'))) {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    } else {
      next();
    }
  });
}

const args = process.argv.slice(2);
if (args.includes('--run-cron-sync')) {
  console.log('Iniciando sincronização via Cron...');
  (async () => {
    const token = process.env.APIFY_TOKEN;
    if (!token) {
      console.error('APIFY_TOKEN não definido nas variáveis de ambiente');
      process.exit(1);
    }
    // Busca perfis armazenados no Supabase (assumindo tabela profiles já existente)
    const { data: profilesData, error: profilesErr } = await supabase.from('profiles').select('handle');
    if (profilesErr) throw profilesErr;
    const profiles = profilesData.map(p => p.handle);
    // Reutiliza a mesma lógica de sync (chamando a rota internamente)
    const fakeReq = { body: { apifyToken: token, profiles } };
    const fakeRes = {
      json: (obj) => console.log('Cron sync result:', obj),
      status: (code) => ({ json: (obj) => console.error('Cron error', code, obj) })
    };
    await (await import('express')).Router().post('/api/sync-apify')(fakeReq, fakeRes);
    process.exit(0);
  })();
} else {
  // Use NIXPACKS PORT OR 3000
  const portToUse = process.env.PORT || PORT;
  app.listen(portToUse, () => {
    console.log(`Backend rodando na porta ${portToUse}`);
  });
}
