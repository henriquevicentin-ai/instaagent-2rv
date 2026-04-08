// ========== DATA ==========
let selectedType = 'sup';

const fornecedoresPosts = [
  {
    user: "PortoBello", handle: "@portobello", avatar: "PB", time: "há 14 min", isNew: true,
    text: "🔥 Lançamento exclusivo: Linha Travertino Romano. Texturas naturais para ambientes de alto padrão. Disponível em 4 formatos!",
    likes: 4821, shares: 312, comments: 187, isHot: true
  },
  {
    user: "Deca Oficial", handle: "@decaoficial", avatar: "DC", time: "há 1h",  isNew: true,
    text: "Torneira com tecnologia touchless: o futuro dos banheiros inteligentes já chegou. Confira nossa nova linha Smart Touch ✨",
    likes: 2930, shares: 201, comments: 94, isHot: false
  },
  {
    user: "Roca Brasil", handle: "@rocabrasil", avatar: "RB", time: "há 3h", isNew: false,
    text: "Apresentamos o vaso sanitário com descarga inteligente. Design italiano, eficiência hídrica máxima. #Sustentabilidade",
    likes: 1876, shares: 98, comments: 43, isHot: false
  },
];

const arquitetosPosts = [
  {
    user: "Ana Cláudia", handle: "@anacarq", avatar: "AC", time: "há 22 min", isNew: true,
    text: "Projeto finalizado! Apartamento de 120m² em Pinheiros com todo o revestimento da @portobello. Ficou incrível 💚 #arquitetura",
    likes: 3204, shares: 89, comments: 156, seller: "Carlos (Loja SP)"
  },
  {
    user: "Rodrigo Maia", handle: "@rodrigomaiaarq", avatar: "RM", time: "há 2h", isNew: true,
    text: "Visitei a feira Revestir hoje e trouxe muito insight para nossos próximos projetos. Já estou planejando a paleta de 2025!",
    likes: 892, shares: 34, comments: 67, seller: "Fernanda (Loja ABC)"
  },
  {
    user: "Studio Lima", handle: "@studiolima", avatar: "SL", time: "há 5h", isNew: false,
    text: "Reforma de cozinha gourmet. O cliente queria praticidade e elegância — entregamos os dois com louça e metais de primeira 👌",
    likes: 2100, shares: 115, comments: 78, seller: "Pedro (Loja Norte)"
  },
];

const currentProfilesVersion = "v5";
const defaultProfiles = [
  {"name":"Eliane","handle":"@elianerevestimentos","avatar":"EL","type":"sup","active":true},
  {"name":"Pierini","handle":"@pierinirevestimentos","avatar":"PI","type":"sup","active":true},
  {"name":"Due Fratelli","handle":"@duefratelliceramica","avatar":"DF","type":"sup","active":true},
  {"name":"Scirocco","handle":"@sciroccoartefatos","avatar":"SC","type":"sup","active":true},
  {"name":"Aquece","handle":"@aquecemetais","avatar":"AQ","type":"sup","active":true},
  {"name":"Teto Vinílico","handle":"@tetovinilico","avatar":"TV","type":"sup","active":true},
  {
    name: "Ceramica Portinari",
    handle: "@ceramicaportinari",
    avatar: "CP",
    type: "sup",
    active: true
  },
  {
    name: "Ceusa Revestimentos",
    handle: "@ceusarevestimentos",
    avatar: "CR",
    type: "sup",
    active: true
  },
  {
    name: "Strufaldi",
    handle: "@strufaldiceramica",
    avatar: "ST",
    type: "sup",
    active: true
  },
  {
    name: "Villagres",
    handle: "@villagres",
    avatar: "VI",
    type: "sup",
    active: true
  },
  {
    name: "Sense Decor Design",
    handle: "@sensedecordesign",
    avatar: "SD",
    type: "sup",
    active: true
  },
  {
    name: "Gabriella Revest.",
    handle: "@gabceramica",
    avatar: "GR",
    type: "sup",
    active: true
  },
  {
    name: "Ruffino Acabamentos",
    handle: "@ruffinoacabamentos",
    avatar: "RA",
    type: "sup",
    active: true
  },
  {
    name: "Quick-Step",
    handle: "@quickstep_brasil",
    avatar: "QS",
    type: "sup",
    active: true
  },
  {
    name: "Belgotex",
    handle: "@belgotexdobrasil",
    avatar: "BE",
    type: "sup",
    active: true
  },
  {
    name: "Akafloor",
    handle: "@akafloor_oficial",
    avatar: "AK",
    type: "sup",
    active: true
  },
  {
    name: "Deca",
    handle: "@decaoficial",
    avatar: "DC",
    type: "sup",
    active: true
  },
  {
    name: "Roca Brasil",
    handle: "@roca_brasil",
    avatar: "RB",
    type: "sup",
    active: true
  },
  {
    name: "Incepa",
    handle: "@incepabrasil",
    avatar: "IN",
    type: "sup",
    active: true
  },
  {
    name: "Immersi",
    handle: "@immersibr",
    avatar: "IM",
    type: "sup",
    active: true
  },
  {
    name: "Finottato",
    handle: "@finottato",
    avatar: "FI",
    type: "sup",
    active: true
  },
  {
    name: "Manufatti Revest.",
    handle: "@manufattirevestimentos",
    avatar: "MR",
    type: "sup",
    active: true
  },
  {
    name: "Tarkett Brasil",
    handle: "@tarkettbrasil",
    avatar: "TB",
    type: "sup",
    active: true
  },
  {
    name: "Elizabeth Revest.",
    handle: "@elizabethrevestimentos",
    avatar: "EL",
    type: "sup",
    active: true
  },
  {
    name: "Lexxa",
    handle: "@lexxabagno",
    avatar: "LX",
    type: "sup",
    active: true
  },
  {
    name: "Rubinettos",
    handle: "@rubinettos",
    avatar: "RU",
    type: "sup",
    active: true
  },
  {
    name: "Glass Mosaic",
    handle: "@aglassmosaic",
    avatar: "GM",
    type: "sup",
    active: true
  },
  {
    name: "Franke Brasil",
    handle: "@frankebrasil",
    avatar: "FB",
    type: "sup",
    active: true
  },
  {
    name: "DeRosso Cerâmicas",
    handle: "@ceramicaderosso",
    avatar: "DR",
    type: "sup",
    active: true
  },
  {
    name: "Studio Morandin",
    handle: "@studiomorandin",
    avatar: "SM",
    type: "sup",
    active: true
  },
  {
    name: "Santa Luzia",
    handle: "@santa.luzia",
    avatar: "SL",
    type: "sup",
    active: true
  },
  {
    name: "Gart Acabamentos",
    handle: "@gart_acabamentos",
    avatar: "GA",
    type: "sup",
    active: true
  },
  {
    name: "Perfis Viscardi",
    handle: "@perfis.viscardi",
    avatar: "PV",
    type: "sup",
    active: true
  },
  {
    name: "Ana Cláudia",
    handle: "@anacarq",
    avatar: "AC",
    type: "arq",
    active: true
  },
  {
    name: "Rodrigo Maia",
    handle: "@rodrigomaiaarq",
    avatar: "RM",
    type: "arq",
    active: true
  },
  {
    name: "Studio Lima",
    handle: "@studiolima",
    avatar: "SL",
    type: "arq",
    active: true
  },
  {
    name: "Arq. Beatriz",
    handle: "@biadesign",
    avatar: "BD",
    type: "arq",
    active: false
  },
  {
    name: "Coarq Studio",
    handle: "@coarqstudio",
    avatar: "CS",
    type: "arq",
    active: true
  },
  {
    name: "Cris + Co",
    handle: "@crismota_arq",
    avatar: "CM",
    type: "arq",
    active: true
  },
  {
    name: "Grupoteia",
    handle: "@_grupoteia",
    avatar: "GR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Maluarquiteta",
    handle: "@_maluarquiteta",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Minaestudio",
    handle: "@_minaestudio_",
    avatar: "MI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Rcapa",
    handle: "@_rcapa",
    avatar: "RC",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Wearch",
    handle: "@_wearch",
    avatar: "WE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "A Sala",
    handle: "@a_sala_arquitetura",
    avatar: "AS",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Abbruzzini",
    handle: "@abbruzzini.design",
    avatar: "AB",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Abigail",
    handle: "@abigail_arquitetura",
    avatar: "AB",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Adrianadigarcia",
    handle: "@adrianadigarcia",
    avatar: "AD",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Alaide Santos",
    handle: "@alaide_santos_arquitetura",
    avatar: "AS",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Alinetolentino",
    handle: "@alinetolentino.arq",
    avatar: "AL",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Allprojetos",
    handle: "@allprojetos",
    avatar: "AL",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Amandarienzi",
    handle: "@amandarienzi.arq",
    avatar: "AM",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Anacarlacupertinoarq",
    handle: "@anacarlacupertinoarq",
    avatar: "AN",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Anastaciamedeiross",
    handle: "@anastaciamedeiross",
    avatar: "AN",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Andrea Hernandez",
    handle: "@andrea_hernandez_arquitetura",
    avatar: "AH",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Andreizenatti",
    handle: "@andreizenatti.arquitetura",
    avatar: "AN",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Andressaquadrado",
    handle: "@andressaquadradoarquitetura",
    avatar: "AN",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Animacasa",
    handle: "@animacasa",
    avatar: "AN",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arielazaina",
    handle: "@arielazaina.arq",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arktekoficial",
    handle: "@arktekoficial",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Angelicacorrea",
    handle: "@arq.angelicacorrea",
    avatar: "AN",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Brenosantiago",
    handle: "@arq.brenosantiago",
    avatar: "BR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Brunacavalcante",
    handle: "@arq.brunacavalcante",
    avatar: "BR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Carolinabittencourt",
    handle: "@arq.carolinabittencourt",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Carollaracardoso",
    handle: "@arq.carollaracardoso",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Diegocarvalho",
    handle: "@arq.diegocarvalho",
    avatar: "DI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Emilyalmeida",
    handle: "@arq.emilyalmeida",
    avatar: "EM",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Feemascarenhas",
    handle: "@arq.feemascarenhas",
    avatar: "FE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Fernandaestevam",
    handle: "@arq.fernandaestevam",
    avatar: "FE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Fernandapironi",
    handle: "@arq.fernandapironi",
    avatar: "FE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Flaviarockenbach",
    handle: "@arq.flaviarockenbach",
    avatar: "FL",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Giovannamartins",
    handle: "@arq.giovannamartins",
    avatar: "GI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Heloisamendes",
    handle: "@arq.heloisamendes",
    avatar: "HE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Isabelafeltran",
    handle: "@arq.isabelafeltran",
    avatar: "IS",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Isabelafoltran",
    handle: "@arq.isabelafoltran",
    avatar: "IS",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Isabellagentil",
    handle: "@arq.isabellagentil",
    avatar: "IS",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Juliamatoss",
    handle: "@arq.juliamatoss",
    avatar: "JU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Laleska",
    handle: "@arq.laleska",
    avatar: "LA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Marinahelena",
    handle: "@arq.marinahelena",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Matheusdupas",
    handle: "@arq.matheusdupas",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Moniquemm",
    handle: "@arq.moniquemm",
    avatar: "MO",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Nettofigueiredo",
    handle: "@arq.nettofigueiredo",
    avatar: "NE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Nideias",
    handle: "@arq.nideias",
    avatar: "NI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Rafaellacisneiro",
    handle: "@arq.rafaellacisneiro",
    avatar: "RA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Renatagonzaga",
    handle: "@arq.renatagonzaga",
    avatar: "RE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Samir",
    handle: "@arq.samir",
    avatar: "SA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Stephanybianca",
    handle: "@arq.stephanybianca",
    avatar: "ST",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Thiemetomita",
    handle: "@arq.thiemetomita",
    avatar: "TH",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Alecisotto",
    handle: "@arq_alecisotto",
    avatar: "AL",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Manardy",
    handle: "@arq_manardy",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arqbiancadiniz",
    handle: "@arqbiancadiniz",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arqjoicesomini",
    handle: "@arqjoicesomini",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arqlauranunez",
    handle: "@arqlauranunez",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arqmarcelamendes",
    handle: "@arqmarcelamendes",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arqmarianapozzo",
    handle: "@arqmarianapozzo",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arqmelisabarboza",
    handle: "@arqmelisabarboza",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arqsanchelateixeira",
    handle: "@arqsanchelateixeira",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arqtamirescrippa",
    handle: "@arqtamirescrippa",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arqtuliocarlos",
    handle: "@arqtuliocarlos",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Anapelizari",
    handle: "@arquiteta.anapelizari",
    avatar: "AN",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Izapadeiro",
    handle: "@arquiteta.izapadeiro",
    avatar: "IZ",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Jhulianaoliveira",
    handle: "@arquiteta.jhulianaoliveira",
    avatar: "JH",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Renataluz",
    handle: "@arquiteta.renataluz",
    avatar: "RE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Tatianefrosch",
    handle: "@arquiteta_tatianefrosch",
    avatar: "TA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetabeatrizperosa",
    handle: "@arquitetabeatrizperosa",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetacamilabatetucci",
    handle: "@arquitetacamilabatetucci",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetacarolinemomoi",
    handle: "@arquitetacarolinemomoi",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetacibelecouto",
    handle: "@arquitetacibelecouto",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetacinthiaduarte",
    handle: "@arquitetacinthiaduarte",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetadeborasanjurjo",
    handle: "@arquitetadeborasanjurjo",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetakethlen",
    handle: "@arquitetakethlen",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetalarissacastro",
    handle: "@arquitetalarissacastro",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetalarissaloiola",
    handle: "@arquitetalarissaloiola",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetamonik",
    handle: "@arquitetamonik",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetanath",
    handle: "@arquitetanath",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetarebecapontes",
    handle: "@arquitetarebecapontes",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetatamirestaveira",
    handle: "@arquitetatamirestaveira",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Brunoteles",
    handle: "@arquitetobrunoteles",
    avatar: "BR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Guilherme",
    handle: "@arquitetoguilherme",
    avatar: "GU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquitetura Believe",
    handle: "@arquitetura.believe",
    avatar: "AB",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arquiteturaminuto",
    handle: "@arquiteturaminuto",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arqveroneze",
    handle: "@arqveroneze",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Arqvitorgomes",
    handle: "@arqvitorgomes",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Artaoquadrado",
    handle: "@artaoquadrado",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Ary",
    handle: "@ary.arquitetura",
    avatar: "AR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Ben",
    handle: "@benarquitetura",
    avatar: "BE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Besser",
    handle: "@besser.arquitetura",
    avatar: "BE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Biaferrari",
    handle: "@biaferrariarquitetura",
    avatar: "BI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Biahajnal",
    handle: "@biahajnal_arquitetura",
    avatar: "BI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Biamachado",
    handle: "@biamachadoarquitetura",
    avatar: "BI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Bimaarquitetura",
    handle: "@bimaarquitetura_",
    avatar: "BI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Boni",
    handle: "@boni.arquitetura",
    avatar: "BO",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Bove",
    handle: "@bovearquitetura",
    avatar: "BO",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Brick",
    handle: "@brick.arquitetura",
    avatar: "BR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Brunapalermo",
    handle: "@brunapalermo.arq",
    avatar: "BR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Brunascruz",
    handle: "@brunascruz.arquitetura",
    avatar: "BR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Bustamantearquitetua",
    handle: "@bustamantearquitetua",
    avatar: "BU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Ca Arquiteta",
    handle: "@ca_arquiteta",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Cacto",
    handle: "@cacto.arq",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Cami",
    handle: "@cami_arquitetura",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Camilagiongoarq",
    handle: "@camilagiongoarq",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Camilapalma",
    handle: "@camilapalma.arq",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Camilaramos",
    handle: "@camilaramos_arquitetura",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Carlabomfim",
    handle: "@carlabomfiminteriores",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Carolinaannibal",
    handle: "@carolinaannibalarquitetura",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Caroltrabasso",
    handle: "@caroltrabasso",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Carolvilela",
    handle: "@carolvilelaarquitetura",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Casavita",
    handle: "@casavitaarquitetura",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Catarinacastro",
    handle: "@catarinacastro.arq",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Cavalleri Projetos",
    handle: "@cavalleri_projetos",
    avatar: "CP",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Cilenedalbenarquiteta",
    handle: "@cilenedalbenarquiteta",
    avatar: "CI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Contraparte",
    handle: "@contraparte.arq",
    avatar: "CO",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Cortex",
    handle: "@cortex.arq",
    avatar: "CO",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Crislembiarq",
    handle: "@crislembiarq",
    avatar: "CR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Crivelli",
    handle: "@crivelliarquitetura",
    avatar: "CR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Cyro",
    handle: "@cyro.arq",
    avatar: "CY",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Danielelazaro",
    handle: "@danielelazaro",
    avatar: "DA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Daniellalichter",
    handle: "@daniellalichter",
    avatar: "DA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Danyroza",
    handle: "@danyrozaarquitetura",
    avatar: "DA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Deasianarq",
    handle: "@deasianarq",
    avatar: "DE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Decorarquiteturasp",
    handle: "@decorarquiteturasp",
    avatar: "DE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Demetriobertoldi",
    handle: "@demetriobertoldi_arq",
    avatar: "DE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Descomum",
    handle: "@descomum",
    avatar: "DE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Details",
    handle: "@details.arquitetura",
    avatar: "DE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Distritopaulista",
    handle: "@distritopaulista",
    avatar: "DI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Diversi",
    handle: "@diversi.arq",
    avatar: "DI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Dna",
    handle: "@dna_arquitetura",
    avatar: "DN",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Drikapalermo",
    handle: "@drikapalermo.arquitetura",
    avatar: "DR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Dzik",
    handle: "@dzikarquitetura",
    avatar: "DZ",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Elihigashi",
    handle: "@elihigashi",
    avatar: "EL",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Emaisarq Estudio",
    handle: "@emaisarq_estudio",
    avatar: "EE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Erikabalbinotarq",
    handle: "@erikabalbinotarq",
    avatar: "ER",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Erikalinardi",
    handle: "@erikalinardi_interiores",
    avatar: "ER",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Espaco Mude",
    handle: "@espaco_mude",
    avatar: "EM",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Acau",
    handle: "@estudio.acau",
    avatar: "AC",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Caete",
    handle: "@estudio_caete",
    avatar: "CA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Folha",
    handle: "@estudio_folha",
    avatar: "FO",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Sb",
    handle: "@estudio_sb",
    avatar: "SB",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Estudiovita",
    handle: "@estudiovita",
    avatar: "ES",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Eu Arquiteta",
    handle: "@eu.arquiteta",
    avatar: "EA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Euanaburgos",
    handle: "@euanaburgos",
    avatar: "EU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Fernandacarvalhoarquiteta",
    handle: "@fernandacarvalhoarquiteta",
    avatar: "FE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Fernandaperoba",
    handle: "@fernandaperobaarquitetura",
    avatar: "FE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Florenzi",
    handle: "@florenziarquitetura",
    avatar: "FL",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Fparqui",
    handle: "@fparqui",
    avatar: "FP",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Framearqeng",
    handle: "@framearqeng",
    avatar: "FR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Francinymaurer Arquiteta",
    handle: "@francinymaurer.arquiteta",
    avatar: "FA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Gabrielazuppo",
    handle: "@gabrielazuppo.arquitetura",
    avatar: "GA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Galliassi",
    handle: "@galliassi.arquitetura",
    avatar: "GA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Ggk",
    handle: "@ggkarquitetura",
    avatar: "GG",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Giselecosta",
    handle: "@giselecostainteriores",
    avatar: "GI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Gnavarro",
    handle: "@gnavarro_arquitetura",
    avatar: "GN",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Greicesouza",
    handle: "@greicesouza_interiores",
    avatar: "GR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Griebeler",
    handle: "@griebelerarquitetura",
    avatar: "GR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Guada",
    handle: "@guadaarquitetura",
    avatar: "GU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Ilha",
    handle: "@ilha.arquitetura",
    avatar: "IL",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Intu",
    handle: "@intu.arquitetura",
    avatar: "IN",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Ir",
    handle: "@ir.arq",
    avatar: "IR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Isaguizilini",
    handle: "@isaguizilini.arq",
    avatar: "IS",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Isarrosen",
    handle: "@isarrosen",
    avatar: "IS",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Jeh Id",
    handle: "@jeh_idarquitetura",
    avatar: "JI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Joatinga",
    handle: "@joatingaarquitetura",
    avatar: "JO",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Jsarmentoarq",
    handle: "@jsarmentoarq",
    avatar: "JS",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Julianaabad",
    handle: "@julianaabadarquitetura",
    avatar: "JU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Juliannarochaarq",
    handle: "@juliannarochaarq",
    avatar: "JU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Jurua",
    handle: "@juruaarquitetura",
    avatar: "JU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Karinahaeffner",
    handle: "@karinahaeffnerarquitetura",
    avatar: "KA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Karinakavamura",
    handle: "@karinakavamuraarquitetura",
    avatar: "KA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Katharinepark",
    handle: "@katharinepark_",
    avatar: "KA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Laddodesign",
    handle: "@laddodesign",
    avatar: "LA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Laiselevada",
    handle: "@laiselevada_arquitetura",
    avatar: "LA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Lanamikaota",
    handle: "@lanamikaota",
    avatar: "LA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Larissaprestes",
    handle: "@larissaprestes.arq",
    avatar: "LA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Lemarchi",
    handle: "@lemarchi.arquitetura",
    avatar: "LE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Lencstudio",
    handle: "@lencstudio",
    avatar: "LE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Leojunqueiraarquiteto",
    handle: "@leojunqueiraarquiteto",
    avatar: "LE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Leticiapassarini",
    handle: "@leticiapassarini_arquitetura",
    avatar: "LE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Liligiudice",
    handle: "@liligiudice_interiores",
    avatar: "LI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Lima Orsolini",
    handle: "@lima_orsolini_arquitetura",
    avatar: "LO",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Lisflamingo",
    handle: "@lisflamingoarquitetura",
    avatar: "LI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Lithos3",
    handle: "@lithos3arquitetura",
    avatar: "LI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Liviabrancoarq",
    handle: "@liviabrancoarq",
    avatar: "LI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Liviaoliveiraarq",
    handle: "@liviaoliveiraarq",
    avatar: "LI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Lkoffice",
    handle: "@lkoffice",
    avatar: "LK",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Luanaalmeida",
    handle: "@luanaalmeida.arquitetura",
    avatar: "LU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Ludmillabaldezarq",
    handle: "@ludmillabaldezarq",
    avatar: "LU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Luiscanepaarquitetos",
    handle: "@luiscanepaarquitetos",
    avatar: "LU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Luisrenatomachado",
    handle: "@luisrenatomachado",
    avatar: "LU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Lumota",
    handle: "@lumotainteriores",
    avatar: "LU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Malupepe",
    handle: "@malupepearquitetura",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Marcellamiranda",
    handle: "@marcellamiranda.arq",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Marcelovassalo Mvap",
    handle: "@marcelovassalo_mvap",
    avatar: "MM",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Marciaarcaro",
    handle: "@marciaarcaro",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Mariabarros",
    handle: "@mariabarros.arq",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Marielmarquesarquiteta",
    handle: "@marielmarquesarquiteta",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Mariflorencioarq",
    handle: "@mariflorencioarq",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Mariliafonseca A",
    handle: "@mariliafonseca.a",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Maripizzinato",
    handle: "@maripizzinato.arq",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Marisantim",
    handle: "@marisantim.arq",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Mauriciopereira",
    handle: "@mauriciopereira.arq",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "May",
    handle: "@mayarquitetura",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Mayracatherino",
    handle: "@mayracatherino.arquitetura",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Mb Arquitetura",
    handle: "@mb.arquitetura_",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Mb Arquitetura",
    handle: "@mb.arquiteturainteriores",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Milenapicoli",
    handle: "@milenapicoliarquitetura",
    avatar: "MI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Millenadias",
    handle: "@millenadias.arq",
    avatar: "MI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Millenamiranda",
    handle: "@millenamiranda.arquitetura",
    avatar: "MI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Mmagalhaesestudio",
    handle: "@mmagalhaesestudio_arq",
    avatar: "MM",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Mn Arquitetura",
    handle: "@mn.arquitetura.interiores",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Momento",
    handle: "@momentoarquitetura",
    avatar: "MO",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Morale",
    handle: "@moralearquitetura",
    avatar: "MO",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Mrc Arq",
    handle: "@mrc_arq.design",
    avatar: "MA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Nadiamanssur",
    handle: "@nadiamanssur.arquitetura",
    avatar: "NA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Nathaliaferrazoli",
    handle: "@nathaliaferrazoli",
    avatar: "NA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Nathalyalvesdesigner",
    handle: "@nathalyalvesdesignerinteriores",
    avatar: "NA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Necco",
    handle: "@neccoarquitetura",
    avatar: "NE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Nextarq",
    handle: "@nextarq",
    avatar: "NE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Nicco",
    handle: "@niccoarquitetura",
    avatar: "NI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Nobrarqoficial",
    handle: "@nobrarqoficial",
    avatar: "NO",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Nuv",
    handle: "@nuvarquitetura",
    avatar: "NU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Obra4",
    handle: "@obra4.arquitetura",
    avatar: "OB",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Office In",
    handle: "@office.in.design",
    avatar: "OI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Oficinacoletiva",
    handle: "@oficinacoletiva",
    avatar: "OF",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Oneiro",
    handle: "@oneiro_arquitetura",
    avatar: "ON",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Orazi",
    handle: "@oraziarquitetura",
    avatar: "OR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Osastudio Oficial",
    handle: "@osastudio.oficial",
    avatar: "OO",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Parq",
    handle: "@parqarquitetura",
    avatar: "PA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Paulocapelarquiteto",
    handle: "@paulocapelarquiteto",
    avatar: "PA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Paulocarvalho",
    handle: "@paulocarvalho_arq",
    avatar: "PA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Perspectiva",
    handle: "@perspectivaarquitetura",
    avatar: "PE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Pitahdesign",
    handle: "@pitahdesign",
    avatar: "PI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Pitay",
    handle: "@pitayarquitetura",
    avatar: "PI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Praca 11",
    handle: "@praca.11",
    avatar: "P1",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Pridomenichelli",
    handle: "@pridomenichelli.arq",
    avatar: "PR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Project3",
    handle: "@project3_arquitetura",
    avatar: "PR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Projet Ar",
    handle: "@projet_ar",
    avatar: "PA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Projetopaulista",
    handle: "@projetopaulista",
    avatar: "PR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Pwdesign",
    handle: "@pwdesign_arquitetura",
    avatar: "PW",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Quitetefaria",
    handle: "@quitetefaria",
    avatar: "QU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Raphael Dare",
    handle: "@raphael_dare",
    avatar: "RD",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Raquelnegrao",
    handle: "@raquelnegrao.arquitetura",
    avatar: "RA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Reginarezende",
    handle: "@reginarezende_arquitetura",
    avatar: "RE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Regiscastro",
    handle: "@regiscastroarquitetura",
    avatar: "RE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Renata Santanaarq",
    handle: "@renata.santanaarq",
    avatar: "RS",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Renaterossi",
    handle: "@renaterossi",
    avatar: "RE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Rezende Arquimoveis",
    handle: "@rezende_arquimoveis",
    avatar: "RA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Rl Arqdesign",
    handle: "@rl_arqdesign",
    avatar: "RA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Rossanacerello",
    handle: "@rossanacerelloarquitetura",
    avatar: "RO",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Rp Estudio",
    handle: "@rp_estudio",
    avatar: "RE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Rzl",
    handle: "@rzlarquitetura",
    avatar: "RZ",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Sala 85",
    handle: "@sala.85",
    avatar: "S8",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Salacarq",
    handle: "@salacarq",
    avatar: "SA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Sandra Paes",
    handle: "@sandra.paes.interiores",
    avatar: "SP",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Santoro",
    handle: "@santoroarquitetura",
    avatar: "SA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Saramoreno",
    handle: "@saramoreno.arquitetura",
    avatar: "SA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Sarapalamoni",
    handle: "@sarapalamoniarquitetura",
    avatar: "SA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Silviaaguiar",
    handle: "@silviaaguiar_arquitetura",
    avatar: "SI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Simonetasca",
    handle: "@simonetascaarquitetura",
    avatar: "SI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Sq",
    handle: "@sqarquitetura",
    avatar: "SQ",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Side",
    handle: "@studio.side",
    avatar: "SI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Guaimbe",
    handle: "@studio_guaimbe",
    avatar: "GU",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Studioa7",
    handle: "@studioa7.arquitetura",
    avatar: "ST",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Studioarkhe",
    handle: "@studioarkhe",
    avatar: "ST",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Studioca",
    handle: "@studioca.arquitetura",
    avatar: "ST",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Studioccmais",
    handle: "@studioccmais",
    avatar: "ST",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Studioln",
    handle: "@studioln.arquitetura",
    avatar: "ST",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Studiomatuti",
    handle: "@studiomatuti",
    avatar: "ST",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Studion",
    handle: "@studion_arquitetura",
    avatar: "ST",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Studioportaamarela",
    handle: "@studioportaamarela",
    avatar: "ST",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Studiotetris",
    handle: "@studiotetrisarquitetura",
    avatar: "ST",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Studiottg",
    handle: "@studiottg",
    avatar: "ST",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "T2Arquiteturaoficial",
    handle: "@t2arquiteturaoficial",
    avatar: "T2",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Taboa",
    handle: "@taboaarquitetura",
    avatar: "TA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Tais Arquiteta",
    handle: "@tais.arquiteta",
    avatar: "TA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Tamarafernandes",
    handle: "@tamarafernandes.arq",
    avatar: "TA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Tania Eustaquio",
    handle: "@tania.eustaquio.arquitetura",
    avatar: "TE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Tatagasparotto",
    handle: "@tatagasparotto",
    avatar: "TA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Tau Arquitetos",
    handle: "@tau.arquitetos",
    avatar: "TA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Taupe",
    handle: "@taupearquitetura",
    avatar: "TA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Teresabarra",
    handle: "@teresabarra.arquitetura",
    avatar: "TE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Tiagomaedaarq",
    handle: "@tiagomaedaarq",
    avatar: "TI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Tikkanen",
    handle: "@tikkanenarquitetura",
    avatar: "TI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Trigoarq",
    handle: "@trigoarq",
    avatar: "TR",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Verniz",
    handle: "@vernizarquitetura",
    avatar: "VE",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Vjrarquitetos",
    handle: "@vjrarquitetos",
    avatar: "VJ",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Vk",
    handle: "@vk.arquitetura",
    avatar: "VK",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Waldmannmelo",
    handle: "@waldmannmeloarquitetura",
    avatar: "WA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Wp Arquiteturacorporativa",
    handle: "@wp_arquiteturacorporativa",
    avatar: "WA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Ximenesleite",
    handle: "@ximenesleitearquitetura",
    avatar: "XI",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Yasminmazloum",
    handle: "@yasminmazloum.arquitetura",
    avatar: "YA",
    type: "arq",
    active: false,
    seller: ""
  },
  {
    name: "Zoe Gardini",
    handle: "@zoe_gardini_arquitetura",
    avatar: "ZG",
    type: "arq",
    active: false,
    seller: ""
  }
];

if (localStorage.getItem('profiles_version') !== currentProfilesVersion) {
  localStorage.setItem('instaagent_profiles', JSON.stringify(defaultProfiles));
  localStorage.setItem('profiles_version', currentProfilesVersion);
}

let profiles = [];
window.profiles = profiles;

async function initSupabaseData() {
  // 1. Fallback sem Supabase
  if (typeof supabase === 'undefined') {
    window.profiles = JSON.parse(localStorage.getItem('instaagent_profiles') ?? 'null') ?? defaultProfiles;
    profiles = window.profiles;
    return;
  }

  // 2. Inicializa cliente
  window.supabaseClient = supabase.createClient(
    'https://vzbbdgpjpteowpnklxly.supabase.co',
    'sb_publishable_NEznO1iLBT1YSqEkw6-yKw_fUs7g7RH'
  );

  // 3. Spinner de loading
  const spinner = document.createElement('div');
  spinner.id = 'supa-loading';
  spinner.style.cssText = 'position:fixed;inset:0;background:var(--bg);z-index:999999;display:flex;align-items:center;justify-content:center;flex-direction:column;font-family:"Syne"';
  spinner.innerHTML = '<div style="width:40px;height:40px;border:4px solid var(--accent-sup);border-top-color:transparent;border-radius:50%;animation:spin 1s linear infinite"></div><h3 style="margin-top:20px;color:var(--text);font-weight:600">Sincronizando Mídia Base (Cloud)...</h3><style>@keyframes spin{100%{transform:rotate(360deg)}}</style>';
  document.body.appendChild(spinner);

  const supRegex = /(revestimento|portinari|ceusa|elianerevestimentos|portobello|duratex|deca|tramontina|docol|biancogres|castelatto|ceramicaportinari|tarkett|eucafloor|guararapes|arauco|sudati|berneck|masisa|fibraplac|florplac|mdf|porcelanato|ceramica|acabamentos|marmoraria|granito|pedra|quartz|supernano|marmore|móveis|iluminação|tintas|acabamento|vidro|lojas|store)/i;

  try {
    // 4. Carrega perfis
    const { data: profilesData, error: profilesErr } = await window.supabaseClient
      .from('instaagent_profiles')
      .select('*')
      .order('created_at', { ascending: true });

    if (profilesErr) throw profilesErr;

    if (profilesData?.length > 0) {
      const extraSups = JSON.parse(localStorage.getItem('instaagent_custom_sups') ?? '[]');

      window.profiles = profilesData.map(d => ({
        handle: d.handle,
        name: d.name,
        avatar: d.avatar,
        active: d.active,
        seller: d.seller,
        followers: d.followers_count,
        type: d.type || (supRegex.test(d.handle) || supRegex.test(d.name) || extraSups.includes(d.handle) ? 'sup' : 'arq')
      }));

      profiles = window.profiles;
      localStorage.setItem('instaagent_profiles', JSON.stringify(profiles));
    } else {
      let localProfiles = JSON.parse(localStorage.getItem('instaagent_profiles') || '[]');
      if (localProfiles.length === 0) localProfiles = defaultProfiles;
      window.profiles = localProfiles;
      profiles = window.profiles;
      if (typeof window.saveProfiles === 'function') setTimeout(() => window.saveProfiles(), 1000);
    }

    // 5. Carrega posts
    const { data: postsData, error: postsErr } = await window.supabaseClient
      .from('instaagent_posts')
      .select('*')
      .order('time', { ascending: false });

    if (!postsErr && postsData) {
      localStorage.setItem('instaagent_posts', JSON.stringify(
        postsData.map(p => ({ ...p, isNew: false }))
      ));
    }

    // 6. Atualiza label de sync
    const { data: logData } = await window.supabaseClient
      .from('instaagent_config')
      .select('config_value')
      .eq('config_key', 'last_sync_date');

    const syncLabel = document.getElementById('label-sync');
    if (syncLabel && logData?.length > 0 && logData[0].config_value) {
      syncLabel.textContent = `Sync: ${logData[0].config_value}`;
    }

    // 7. Admin check
    const isAdmin =
      new URLSearchParams(window.location.search).get('admin') === '1' ||
      localStorage.getItem('isAdmin') === 'true';

    if (isAdmin) {
        localStorage.setItem('isAdmin', 'true');
        document.getElementById('nav-config-admin')?.style.setProperty('display', 'flex');
        document.getElementById('btn-backup-admin')?.style.setProperty('display', 'block');
    }

    document.getElementById('admin-apify-container')?.style.setProperty('display', isAdmin ? 'block' : 'none');

    // 8. Re-renders com proteção individual por try/catch
    const renders = [
      ['loadFeedsFromStorage', () => loadFeedsFromStorage()],
      ['renderArquitetos',     () => renderArquitetos()],
      ['renderFornecedores',   () => renderFornecedores()],
      ['renderProfiles',       () => renderProfiles()],
      ['renderFeeds',          () => window.renderFeeds()],
      ['showTab',              () => showTab(window.currentTab || 'dashboard')],
      ['updateSidebarBadges',  () => updateSidebarBadges()],
    ];

    for (const [name, fn] of renders) {
      try {
        if (typeof fn === 'function' || typeof window[name] === 'function') fn();
      } catch (renderErr) {
        console.warn(`[initSupabaseData] Erro ao chamar ${name}:`, renderErr);
      }
    }

  } catch (err) {
    console.error('[initSupabaseData] Supabase error:', err);
    window.profiles = JSON.parse(localStorage.getItem('instaagent_profiles') ?? 'null') ?? defaultProfiles;
    profiles = window.profiles;

  } finally {
    // 9. Remove spinner sempre, mesmo em caso de erro
    document.getElementById('supa-loading')?.remove();
  }
}

// Intercept saveProfiles to save to DB as well
const originalSaveProfiles = window.saveProfiles;
window.saveProfiles = async function() {
    // Call old first to update local storage visually immediately
    if (typeof originalSaveProfiles === 'function') originalSaveProfiles();
    
    if (window.supabaseClient && window.profiles) {
        const toUpdate = window.profiles.map(d => ({
              handle: d.handle,
              name: d.name,
              avatar: d.avatar,
              active: d.active,
              seller: d.seller || null
        }));
        
        try {
            await window.supabaseClient.from('instaagent_profiles').upsert(toUpdate, { onConflict: 'handle' });
            console.log("Supabase UPSERT SUCCESS");
        if (typeof updateSidebarBadges === 'function') updateSidebarBadges();
        } catch(e) { console.error("UPSERT Error:", e); }
    }
};

// Bootstrap now
document.addEventListener('DOMContentLoaded', initSupabaseData);




function updateSidebarBadges() {
    if (!window.profiles) return;
    const arqCount = window.profiles.filter(p => p.type === 'arq').length;
    const supCount = window.profiles.filter(p => p.type === 'sup').length;
    
    const badgeArq = document.getElementById('badge-arq');
    const badgeSup = document.getElementById('badge-sup');
    
    if (badgeArq) badgeArq.textContent = arqCount;
    if (badgeSup) badgeSup.textContent = supCount;

    const statProf = document.getElementById('stat-profiles');
    const statProfSub = document.getElementById('stat-profiles-sub');
    if (statProf) statProf.innerText = window.profiles.length;
    if (statProfSub) statProfSub.innerText = supCount + ' fornec. + ' + arqCount + ' arq.';

    const savedPosts = JSON.parse(localStorage.getItem('instaagent_posts')) || [];
    const newPosts = savedPosts.filter(p => p.isNew).length;
    const statAlerts = document.getElementById('stat-alerts');
    if (statAlerts) statAlerts.innerText = newPosts;
}

// --- APIFY SYNC LOGIC ---
function updateApifyStatus() {
  const t = document.getElementById('apify-token').value.trim();
  const st = document.getElementById('apify-status');
  if (t && t.startsWith('apify_api_')) {
    st.textContent = '🟢 Configurado';
    st.className = 'status-ok';
    localStorage.setItem('instaagent_apify_token', t);
  } else {
    st.textContent = '🔴 Não configurado';
    st.className = 'status-empty';
    localStorage.removeItem('instaagent_apify_token');
  }
}

function updateGoogleStatus() {
  const t = document.getElementById('google-token').value.trim();
  const st = document.getElementById('google-status');
  if (t && t.length > 30) {
    st.textContent = '🟢 Configurado';
    st.style.color = '#00a854';
    localStorage.setItem('instaagent_google_token', t);
  } else {
    st.textContent = '🔴 Não configurado';
    st.style.color = 'var(--text-muted)';
    localStorage.removeItem('instaagent_google_token');
  }
}

// Inicializar Token
document.addEventListener('DOMContentLoaded', () => {
    const savedToken = localStorage.getItem('instaagent_apify_token');
    if (savedToken) {
        document.getElementById('apify-token').value = savedToken;
        updateApifyStatus();
    }
    const savedGoogleToken = localStorage.getItem('instaagent_google_token');
    if (savedGoogleToken && document.getElementById('google-token')) {
        document.getElementById('google-token').value = savedGoogleToken;
        updateGoogleStatus();
    }
});

async function syncApifyFeeds() {
    const token = document.getElementById('apify-token').value.trim();
    if (!token) {
        showToast('sup', '⚠️', 'Token Ausente', 'Cole sua API Key do Apify para sincronizar os feeds.');
        return;
    }
    
    const activeProfiles = profiles.filter(p => p.active).map(p => p.handle);
    if(activeProfiles.length === 0) {
        showToast('sup', '⚠️', 'Sem Perfis', 'Ative ao menos um perfil na lista abaixo.');
        return;
    }
    
    showToast('sup', '🔄', 'Sincronizando com Backend...', 'Iniciando extração via servidor. Aguarde (pode levar alguns minutos).');
    
    try {
        const payload = { apifyToken: token, profiles: activeProfiles, isAdmin: true };
        const apiUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? 'http://localhost:3000/api/sync-apify' : '/api/sync-apify';
        
        const res = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        if (!res.ok) throw new Error('Falha no servidor. Verifique o terminal do backend.');
        const data = await res.json();
        
        if (data.success) {
            showToast('arq', '✅', 'Sincronizado!', data.count + ' posts atualizados com sucesso no banco principal.');
            // Recarrega do Supabase para puxar os posts e o log correto
            await initSupabaseData();
        } else {
            throw new Error(data.error || 'Erro desconhecido');
        }
    } catch (e) {
        console.error(e);
        showToast('sup', '❌', 'Erro', 'Falha ao sincronizar: ' + e.message);
    }
}

function loadFeedsFromStorage() {
    const savedPosts = JSON.parse(localStorage.getItem('instaagent_posts')) || [];
    if(savedPosts.length === 0) {
        renderFornecedores();
        return;
    }

    // Extrair seguidores dos posts e salvar nos perfis automaticamente
    let profilesUpdated = false;
    savedPosts.forEach(post => {
        if (post.followersCount != null) {
            const p = window.profiles.find(x => x.handle.toLowerCase() === (post.handle||'').toLowerCase());
            if (p && (!p.followers || p.followers !== post.followersCount)) {
                p.followers = post.followersCount;
                profilesUpdated = true;
            }
        }
    });
    if (profilesUpdated) saveProfiles();

    const activeArqs = profiles.filter(p => p.type === 'arq').map(p => (p.handle||'').toLowerCase());
    const activeSups = profiles.filter(p => p.type === 'sup').map(p => (p.handle||'').toLowerCase());
    window.fornecedoresPosts = savedPosts.filter(p => activeSups.includes((p.handle||'').toLowerCase()));
    window.arquitetosPosts = savedPosts.filter(p => activeArqs.includes((p.handle||'').toLowerCase()));
    renderFornecedoresReal();
    renderArquitetosReal();
}
// ========== RENDER FEEDS ==========
function renderFornecedores() {
  const container = document.getElementById('feed-fornecedores');
  container.innerHTML = fornecedoresPosts.map(p => `
    <div class="post-item ${p.isNew ? 'new' : ''}">
      <div class="post-profile">
        <div class="avatar sup">${p.avatar}</div>
        <div class="post-meta">
          <div class="post-user">${p.user}</div>
          <div class="post-time">${p.handle} · ${p.time}</div>
        </div>
      </div>
      <div class="post-text">${p.text}</div>
      <div class="post-metrics">
        <div class="metric ${p.isHot ? 'hot' : ''}">❤️ ${p.likes.toLocaleString('pt-BR')}</div>
        <div class="metric">🔁 ${p.shares}</div>
        <div class="metric">💬 ${p.comments}</div>
      </div>
      <div class="post-actions">
        <button class="action-btn" onclick="copyPost('${p.user}')">📋 Copiar</button>
        <button class="action-btn cta" onclick="adaptPost('${p.user}', '${p.text.replace(/'/g, "\\'")}')">✨ Adaptar com IA</button>
      </div>
    </div>
  `).join('');
}

function renderArquitetos() {
  const container = document.getElementById('feed-arquitetos');
  container.innerHTML = arquitetosPosts.map(p => `
    <div class="post-item new arq">
      <div class="post-profile">
        <div class="avatar arq">${p.avatar}</div>
        <div class="post-meta">
          <div class="post-user">${p.user}</div>
          <div class="post-time">${p.handle} · ${p.time}</div>
        </div>
      </div>
      <div class="post-text">${p.text}</div>
      <div class="post-metrics">
        <div class="metric">❤️ ${p.likes.toLocaleString('pt-BR')}</div>
        <div class="metric">🔁 ${p.shares}</div>
        <div class="metric">💬 ${p.comments}</div>
      </div>
      <div class="post-actions">
        <button class="action-btn notify" onclick="notifySeller('${p.user}', '${p.seller}')">📲 Notificar ${p.seller.split(' ')[0]}</button>
        <button class="action-btn" onclick="openConversation('${p.user}')">💬 Responder</button>
      </div>
    </div>
  `).join('');
}

// ========== RENDER PERFIS ==========
let currentProfileTab = 'sup';
let profileStatusFilter = 'all';
let profileSortMode = 'nome';

function setProfileStatusFilter(mode, btn) {
  profileStatusFilter = mode;
  document.querySelectorAll('.profile-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProfiles();
}

function setProfileSort(mode, btn) {
  profileSortMode = mode;
  document.querySelectorAll('.profile-sort-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProfiles();
}

function toggleAllProfiles(active) {
  const grid = document.getElementById('profiles-grid');
  if (!grid) return;
  const visibleHandles = [...grid.querySelectorAll('.profile-chip')].map(c => c.dataset.handle).filter(Boolean);
  visibleHandles.forEach(handle => {
    const p = window.profiles.find(x => x.handle === handle);
    if (p) p.active = active;
  });
  saveProfiles();
  renderProfiles();
  showToast('arq', active ? '✅' : '⭕', active ? 'Perfis ativados!' : 'Perfis desativados!', visibleHandles.length + ' perfis atualizados.');
}

function switchProfileTab(type) {
  currentProfileTab = type;

  // Estilo botão ativo
  const supBtn = document.getElementById('subtab-sup');
  const arqBtn = document.getElementById('subtab-arq');
  if (supBtn && arqBtn) {
    if (type === 'sup') {
      supBtn.style.color = 'var(--accent-sup)';
      supBtn.style.borderBottom = '2px solid var(--accent-sup)';
      arqBtn.style.color = 'var(--text-muted)';
      arqBtn.style.borderBottom = '2px solid transparent';
    } else {
      arqBtn.style.color = 'var(--accent-arq)';
      arqBtn.style.borderBottom = '2px solid var(--accent-arq)';
      supBtn.style.color = 'var(--text-muted)';
      supBtn.style.borderBottom = '2px solid transparent';
    }
  }
  renderProfiles();
}

function renderProfiles() {
  const grid = document.getElementById('profiles-grid');
  if (!grid) return;

  // Contadores nas sub-abas
  const supCount = (window.profiles || []).filter(p => p.type === 'sup').length;
  const arqCount = (window.profiles || []).filter(p => p.type === 'arq').length;
  if (document.getElementById('subtab-sup-count')) document.getElementById('subtab-sup-count').textContent = supCount;
  if (document.getElementById('subtab-arq-count')) document.getElementById('subtab-arq-count').textContent = arqCount;

  const allPosts = JSON.parse(localStorage.getItem('instaagent_posts') || '[]');

  // Base
  let filtered = (window.profiles || []).filter(p => p.type === currentProfileTab);

  // Filtro de busca
  const searchVal = (document.getElementById('profile-search')?.value || '').toLowerCase().trim();
  if (searchVal) {
    filtered = filtered.filter(p =>
      (p.name || '').toLowerCase().includes(searchVal) ||
      (p.handle || '').toLowerCase().includes(searchVal) ||
      (p.seller || '').toLowerCase().includes(searchVal)
    );
  }

  // Filtro de status
  if (profileStatusFilter === 'active') filtered = filtered.filter(p => p.active);
  else if (profileStatusFilter === 'inactive') filtered = filtered.filter(p => !p.active);

  // Ordenação
  filtered = [...filtered];
  switch(profileSortMode) {
    case 'nome':
      filtered.sort((a,b) => (a.name||'').localeCompare(b.name||'', 'pt-BR'));
      break;
    case 'recente':
      filtered.sort((a,b) => {
        const lastA = allPosts.filter(x=>x.handle===a.handle).sort((x,y)=>new Date(y.time)-new Date(x.time))[0];
        const lastB = allPosts.filter(x=>x.handle===b.handle).sort((x,y)=>new Date(y.time)-new Date(x.time))[0];
        return (new Date(lastB?.time||0)) - (new Date(lastA?.time||0));
      });
      break;
    case 'likes':
      filtered.sort((a,b) => {
        const postsA = allPosts.filter(x=>x.handle===a.handle);
        const postsB = allPosts.filter(x=>x.handle===b.handle);
        const avgA = postsA.length ? postsA.reduce((s,x)=>s+(x.likes||0),0)/postsA.length : 0;
        const avgB = postsB.length ? postsB.reduce((s,x)=>s+(x.likes||0),0)/postsB.length : 0;
        return avgB - avgA;
      });
      break;
    case 'comentarios':
      filtered.sort((a,b) => {
        const postsA = allPosts.filter(x=>x.handle===a.handle);
        const postsB = allPosts.filter(x=>x.handle===b.handle);
        const avgA = postsA.length ? postsA.reduce((s,x)=>s+(x.comments||0),0)/postsA.length : 0;
        const avgB = postsB.length ? postsB.reduce((s,x)=>s+(x.comments||0),0)/postsB.length : 0;
        return avgB - avgA;
      });
      break;
    case 'engajamento':
      filtered.sort((a,b) => {
        const postsA = allPosts.filter(x=>x.handle===a.handle);
        const postsB = allPosts.filter(x=>x.handle===b.handle);
        const engA = postsA.reduce((s,x)=>s+(x.likes||0)+(x.comments||0)*2,0);
        const engB = postsB.reduce((s,x)=>s+(x.likes||0)+(x.comments||0)*2,0);
        return engB - engA;
      });
      break;
    case 'seguidores':
      filtered.sort((a,b) => (b.followers||0) - (a.followers||0));
      break;
  }

  // Label contador
  const label = document.getElementById('profile-count-label');
  const activeCount = filtered.filter(p => p.active).length;
  if (label) label.textContent = `${filtered.length} exibidos · ${activeCount} ativos`;

  if (filtered.length === 0) {
    grid.innerHTML = '<div style="padding:40px; text-align:center; color:var(--text-muted); font-size:13px; grid-column:1/-1;">Nenhum perfil encontrado.</div>';
    return;
  }

  const accentColor = currentProfileTab === 'arq' ? 'var(--accent-arq)' : 'var(--accent-sup)';
  const accentDim   = currentProfileTab === 'arq' ? 'var(--accent-arq-dim)' : 'var(--accent-sup-dim)';

  grid.innerHTML = filtered.map(p => {
    const isArq = p.type === 'arq';
    const pPosts = allPosts.filter(x => x.handle === p.handle);
    const avgLikes = pPosts.length ? Math.round(pPosts.reduce((s,x)=>s+(x.likes||0),0)/pPosts.length) : 0;
    const engScore = pPosts.reduce((s,x)=>s+(x.likes||0)+(x.comments||0)*2,0);
    const lastPost = [...pPosts].sort((a,b)=>new Date(b.time)-new Date(a.time))[0];
    const lastDate = lastPost ? new Date(lastPost.time).toLocaleDateString('pt-BR') : null;

    return `
      <div class="profile-chip" data-handle="${p.handle}" style="display:flex; flex-direction:column; align-items:flex-start; height:auto; gap:8px; padding:12px; ${p.active ? '' : 'opacity:0.6;'}">
        <div style="display:flex; width:100%; align-items:center; gap:8px;">
          <div class="avatar ${p.type}" style="flex-shrink:0;">${p.avatar}</div>
          <div style="display:flex; flex-direction:column; flex:1; min-width:0;">
            <div style="font-weight:700; font-size:13px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
              ${p.name}
              ${isArq && p.seller ? '<span style="font-weight:normal; font-size:10px; color:#999;"> ('+p.seller+')</span>' : ''}
            </div>
            <div style="font-size:11px; color:var(--text-muted);">${p.handle}</div>
          </div>
          <div style="display:flex; gap:4px; flex-shrink:0;">
            <button class="action-btn" title="Editar" style="padding:4px;" onclick="openEditProfile('${p.handle}')">✏️</button>
            <button class="action-btn" title="Excluir" style="padding:4px;" onclick="deleteProfile('${p.handle}')">🗑️</button>
          </div>
        </div>

        <!-- Métricas rápidas -->
        ${pPosts.length > 0 ? `
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <span style="font-size:10px; background:var(--surface2); padding:2px 8px; border-radius:10px; color:var(--text-muted);">❤️ ${avgLikes.toLocaleString('pt-BR')} média</span>
          <span style="font-size:10px; background:var(--surface2); padding:2px 8px; border-radius:10px; color:var(--text-muted);">🔥 ${engScore.toLocaleString('pt-BR')}</span>
          ${p.followers ? '<span style="font-size:10px; background:var(--surface2); padding:2px 8px; border-radius:10px; color:var(--text-muted);">👥 '+Number(p.followers).toLocaleString('pt-BR')+'</span>' : ''}
          ${lastDate ? '<span style="font-size:10px; background:var(--surface2); padding:2px 8px; border-radius:10px; color:var(--text-muted);">🕐 '+lastDate+'</span>' : ''}
        </div>` : (p.followers ? `<div><span style="font-size:10px; background:var(--surface2); padding:2px 8px; border-radius:10px; color:var(--text-muted);">👥 ${Number(p.followers).toLocaleString('pt-BR')}</span></div>` : '')}

        <div style="display:flex; width:100%; justify-content:space-between; border-top:1px dashed var(--border); padding-top:8px; align-items:center;">
          <label style="font-size:11px; cursor:pointer; display:flex; align-items:center; gap:6px;">
            <input type="checkbox" ${p.active ? 'checked' : ''} onchange="toggleProfileActive('${p.handle}')">
            <span style="color:${p.active ? '#00a854' : 'var(--text-muted)'}; font-weight:600;">${p.active ? '● Monitorando' : '○ Inativo'}</span>
          </label>
        </div>
      </div>`;
  }).join('');
}

function deleteProfile(handle) {
  if (confirm('Tem certeza que deseja remover o perfil ' + handle + '?')) {
    window.profiles = window.profiles.filter(p => p.handle !== handle);
    document.getElementById('stat-profiles').textContent = window.profiles.length; 
    
    // Explicit Delete from Cloud DB
    if (window.supabaseClient) {
        window.supabaseClient.from('instaagent_profiles').delete().eq('handle', handle).then(({error}) => {
            if(error) console.error("Cloud Delete Erro:", error);
        });
    }
    saveProfiles(); renderProfiles();
  }
}

function toggleProfileActive(handle) {
  const p = window.profiles.find(x => x.handle === handle);
  if (p) { p.active = !p.active; saveProfiles(); }
}

function importarArquitetos() {
  const lista = [{name:"Grupoteia",handle:"@_grupoteia",avatar:"GR",type:"arq",active:false,seller:""},{name:"Maluarquiteta",handle:"@_maluarquiteta",avatar:"MA",type:"arq",active:false,seller:""},{name:"Minaestudio",handle:"@_minaestudio_",avatar:"MI",type:"arq",active:false,seller:""},{name:"Rcapa",handle:"@_rcapa",avatar:"RC",type:"arq",active:false,seller:""},{name:"Wearch",handle:"@_wearch",avatar:"WE",type:"arq",active:false,seller:""},{name:"A Sala",handle:"@a_sala_arquitetura",avatar:"AS",type:"arq",active:false,seller:""},{name:"Abbruzzini",handle:"@abbruzzini.design",avatar:"AB",type:"arq",active:false,seller:""},{name:"Abigail",handle:"@abigail_arquitetura",avatar:"AB",type:"arq",active:false,seller:""},{name:"Adrianadigarcia",handle:"@adrianadigarcia",avatar:"AD",type:"arq",active:false,seller:""},{name:"Alaide Santos",handle:"@alaide_santos_arquitetura",avatar:"AS",type:"arq",active:false,seller:""},{name:"Alinetolentino",handle:"@alinetolentino.arq",avatar:"AL",type:"arq",active:false,seller:""},{name:"Allprojetos",handle:"@allprojetos",avatar:"AL",type:"arq",active:false,seller:""},{name:"Amandarienzi",handle:"@amandarienzi.arq",avatar:"AM",type:"arq",active:false,seller:""},{name:"Anacarlacupertinoarq",handle:"@anacarlacupertinoarq",avatar:"AN",type:"arq",active:false,seller:""},{name:"Anastaciamedeiross",handle:"@anastaciamedeiross",avatar:"AN",type:"arq",active:false,seller:""},{name:"Andrea Hernandez",handle:"@andrea_hernandez_arquitetura",avatar:"AH",type:"arq",active:false,seller:""},{name:"Andreizenatti",handle:"@andreizenatti.arquitetura",avatar:"AN",type:"arq",active:false,seller:""},{name:"Andressaquadrado",handle:"@andressaquadradoarquitetura",avatar:"AN",type:"arq",active:false,seller:""},{name:"Animacasa",handle:"@animacasa",avatar:"AN",type:"arq",active:false,seller:""},{name:"Arielazaina",handle:"@arielazaina.arq",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arktekoficial",handle:"@arktekoficial",avatar:"AR",type:"arq",active:false,seller:""},{name:"Angelicacorrea",handle:"@arq.angelicacorrea",avatar:"AN",type:"arq",active:false,seller:""},{name:"Brenosantiago",handle:"@arq.brenosantiago",avatar:"BR",type:"arq",active:false,seller:""},{name:"Brunacavalcante",handle:"@arq.brunacavalcante",avatar:"BR",type:"arq",active:false,seller:""},{name:"Carolinabittencourt",handle:"@arq.carolinabittencourt",avatar:"CA",type:"arq",active:false,seller:""},{name:"Carollaracardoso",handle:"@arq.carollaracardoso",avatar:"CA",type:"arq",active:false,seller:""},{name:"Diegocarvalho",handle:"@arq.diegocarvalho",avatar:"DI",type:"arq",active:false,seller:""},{name:"Emilyalmeida",handle:"@arq.emilyalmeida",avatar:"EM",type:"arq",active:false,seller:""},{name:"Feemascarenhas",handle:"@arq.feemascarenhas",avatar:"FE",type:"arq",active:false,seller:""},{name:"Fernandaestevam",handle:"@arq.fernandaestevam",avatar:"FE",type:"arq",active:false,seller:""},{name:"Fernandapironi",handle:"@arq.fernandapironi",avatar:"FE",type:"arq",active:false,seller:""},{name:"Flaviarockenbach",handle:"@arq.flaviarockenbach",avatar:"FL",type:"arq",active:false,seller:""},{name:"Giovannamartins",handle:"@arq.giovannamartins",avatar:"GI",type:"arq",active:false,seller:""},{name:"Heloisamendes",handle:"@arq.heloisamendes",avatar:"HE",type:"arq",active:false,seller:""},{name:"Isabelafeltran",handle:"@arq.isabelafeltran",avatar:"IS",type:"arq",active:false,seller:""},{name:"Isabelafoltran",handle:"@arq.isabelafoltran",avatar:"IS",type:"arq",active:false,seller:""},{name:"Isabellagentil",handle:"@arq.isabellagentil",avatar:"IS",type:"arq",active:false,seller:""},{name:"Juliamatoss",handle:"@arq.juliamatoss",avatar:"JU",type:"arq",active:false,seller:""},{name:"Laleska",handle:"@arq.laleska",avatar:"LA",type:"arq",active:false,seller:""},{name:"Marinahelena",handle:"@arq.marinahelena",avatar:"MA",type:"arq",active:false,seller:""},{name:"Matheusdupas",handle:"@arq.matheusdupas",avatar:"MA",type:"arq",active:false,seller:""},{name:"Moniquemm",handle:"@arq.moniquemm",avatar:"MO",type:"arq",active:false,seller:""},{name:"Nettofigueiredo",handle:"@arq.nettofigueiredo",avatar:"NE",type:"arq",active:false,seller:""},{name:"Nideias",handle:"@arq.nideias",avatar:"NI",type:"arq",active:false,seller:""},{name:"Rafaellacisneiro",handle:"@arq.rafaellacisneiro",avatar:"RA",type:"arq",active:false,seller:""},{name:"Renatagonzaga",handle:"@arq.renatagonzaga",avatar:"RE",type:"arq",active:false,seller:""},{name:"Samir",handle:"@arq.samir",avatar:"SA",type:"arq",active:false,seller:""},{name:"Stephanybianca",handle:"@arq.stephanybianca",avatar:"ST",type:"arq",active:false,seller:""},{name:"Thiemetomita",handle:"@arq.thiemetomita",avatar:"TH",type:"arq",active:false,seller:""},{name:"Alecisotto",handle:"@arq_alecisotto",avatar:"AL",type:"arq",active:false,seller:""},{name:"Manardy",handle:"@arq_manardy",avatar:"MA",type:"arq",active:false,seller:""},{name:"Arqbiancadiniz",handle:"@arqbiancadiniz",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arqjoicesomini",handle:"@arqjoicesomini",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arqlauranunez",handle:"@arqlauranunez",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arqmarcelamendes",handle:"@arqmarcelamendes",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arqmarianapozzo",handle:"@arqmarianapozzo",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arqmelisabarboza",handle:"@arqmelisabarboza",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arqsanchelateixeira",handle:"@arqsanchelateixeira",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arqtamirescrippa",handle:"@arqtamirescrippa",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arqtuliocarlos",handle:"@arqtuliocarlos",avatar:"AR",type:"arq",active:false,seller:""},{name:"Anapelizari",handle:"@arquiteta.anapelizari",avatar:"AN",type:"arq",active:false,seller:""},{name:"Izapadeiro",handle:"@arquiteta.izapadeiro",avatar:"IZ",type:"arq",active:false,seller:""},{name:"Jhulianaoliveira",handle:"@arquiteta.jhulianaoliveira",avatar:"JH",type:"arq",active:false,seller:""},{name:"Renataluz",handle:"@arquiteta.renataluz",avatar:"RE",type:"arq",active:false,seller:""},{name:"Tatianefrosch",handle:"@arquiteta_tatianefrosch",avatar:"TA",type:"arq",active:false,seller:""},{name:"Arquitetabeatrizperosa",handle:"@arquitetabeatrizperosa",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arquitetacamilabatetucci",handle:"@arquitetacamilabatetucci",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arquitetacarolinemomoi",handle:"@arquitetacarolinemomoi",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arquitetacibelecouto",handle:"@arquitetacibelecouto",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arquitetacinthiaduarte",handle:"@arquitetacinthiaduarte",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arquitetadeborasanjurjo",handle:"@arquitetadeborasanjurjo",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arquitetakethlen",handle:"@arquitetakethlen",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arquitetalarissacastro",handle:"@arquitetalarissacastro",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arquitetalarissaloiola",handle:"@arquitetalarissaloiola",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arquitetamonik",handle:"@arquitetamonik",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arquitetanath",handle:"@arquitetanath",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arquitetarebecapontes",handle:"@arquitetarebecapontes",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arquitetatamirestaveira",handle:"@arquitetatamirestaveira",avatar:"AR",type:"arq",active:false,seller:""},{name:"Brunoteles",handle:"@arquitetobrunoteles",avatar:"BR",type:"arq",active:false,seller:""},{name:"Guilherme",handle:"@arquitetoguilherme",avatar:"GU",type:"arq",active:false,seller:""},{name:"Arquitetura Believe",handle:"@arquitetura.believe",avatar:"AB",type:"arq",active:false,seller:""},{name:"Arquiteturaminuto",handle:"@arquiteturaminuto",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arqveroneze",handle:"@arqveroneze",avatar:"AR",type:"arq",active:false,seller:""},{name:"Arqvitorgomes",handle:"@arqvitorgomes",avatar:"AR",type:"arq",active:false,seller:""},{name:"Artaoquadrado",handle:"@artaoquadrado",avatar:"AR",type:"arq",active:false,seller:""},{name:"Ary",handle:"@ary.arquitetura",avatar:"AR",type:"arq",active:false,seller:""},{name:"Ben",handle:"@benarquitetura",avatar:"BE",type:"arq",active:false,seller:""},{name:"Besser",handle:"@besser.arquitetura",avatar:"BE",type:"arq",active:false,seller:""},{name:"Biaferrari",handle:"@biaferrariarquitetura",avatar:"BI",type:"arq",active:false,seller:""},{name:"Biahajnal",handle:"@biahajnal_arquitetura",avatar:"BI",type:"arq",active:false,seller:""},{name:"Biamachado",handle:"@biamachadoarquitetura",avatar:"BI",type:"arq",active:false,seller:""},{name:"Bimaarquitetura",handle:"@bimaarquitetura_",avatar:"BI",type:"arq",active:false,seller:""},{name:"Boni",handle:"@boni.arquitetura",avatar:"BO",type:"arq",active:false,seller:""},{name:"Bove",handle:"@bovearquitetura",avatar:"BO",type:"arq",active:false,seller:""},{name:"Brick",handle:"@brick.arquitetura",avatar:"BR",type:"arq",active:false,seller:""},{name:"Brunapalermo",handle:"@brunapalermo.arq",avatar:"BR",type:"arq",active:false,seller:""},{name:"Brunascruz",handle:"@brunascruz.arquitetura",avatar:"BR",type:"arq",active:false,seller:""},{name:"Bustamantearquitetua",handle:"@bustamantearquitetua",avatar:"BU",type:"arq",active:false,seller:""},{name:"Ca Arquiteta",handle:"@ca_arquiteta",avatar:"CA",type:"arq",active:false,seller:""},{name:"Cacto",handle:"@cacto.arq",avatar:"CA",type:"arq",active:false,seller:""},{name:"Cami",handle:"@cami_arquitetura",avatar:"CA",type:"arq",active:false,seller:""},{name:"Camilagiongoarq",handle:"@camilagiongoarq",avatar:"CA",type:"arq",active:false,seller:""},{name:"Camilapalma",handle:"@camilapalma.arq",avatar:"CA",type:"arq",active:false,seller:""},{name:"Camilaramos",handle:"@camilaramos_arquitetura",avatar:"CA",type:"arq",active:false,seller:""},{name:"Carlabomfim",handle:"@carlabomfiminteriores",avatar:"CA",type:"arq",active:false,seller:""},{name:"Carolinaannibal",handle:"@carolinaannibalarquitetura",avatar:"CA",type:"arq",active:false,seller:""},{name:"Caroltrabasso",handle:"@caroltrabasso",avatar:"CA",type:"arq",active:false,seller:""},{name:"Carolvilela",handle:"@carolvilelaarquitetura",avatar:"CA",type:"arq",active:false,seller:""},{name:"Casavita",handle:"@casavitaarquitetura",avatar:"CA",type:"arq",active:false,seller:""},{name:"Catarinacastro",handle:"@catarinacastro.arq",avatar:"CA",type:"arq",active:false,seller:""},{name:"Cavalleri Projetos",handle:"@cavalleri_projetos",avatar:"CP",type:"arq",active:false,seller:""},{name:"Cilenedalbenarquiteta",handle:"@cilenedalbenarquiteta",avatar:"CI",type:"arq",active:false,seller:""},{name:"Contraparte",handle:"@contraparte.arq",avatar:"CO",type:"arq",active:false,seller:""},{name:"Cortex",handle:"@cortex.arq",avatar:"CO",type:"arq",active:false,seller:""},{name:"Crislembiarq",handle:"@crislembiarq",avatar:"CR",type:"arq",active:false,seller:""},{name:"Crivelli",handle:"@crivelliarquitetura",avatar:"CR",type:"arq",active:false,seller:""},{name:"Cyro",handle:"@cyro.arq",avatar:"CY",type:"arq",active:false,seller:""},{name:"Danielelazaro",handle:"@danielelazaro",avatar:"DA",type:"arq",active:false,seller:""},{name:"Daniellalichter",handle:"@daniellalichter",avatar:"DA",type:"arq",active:false,seller:""},{name:"Danyroza",handle:"@danyrozaarquitetura",avatar:"DA",type:"arq",active:false,seller:""},{name:"Deasianarq",handle:"@deasianarq",avatar:"DE",type:"arq",active:false,seller:""},{name:"Decorarquiteturasp",handle:"@decorarquiteturasp",avatar:"DE",type:"arq",active:false,seller:""},{name:"Demetriobertoldi",handle:"@demetriobertoldi_arq",avatar:"DE",type:"arq",active:false,seller:""},{name:"Descomum",handle:"@descomum",avatar:"DE",type:"arq",active:false,seller:""},{name:"Details",handle:"@details.arquitetura",avatar:"DE",type:"arq",active:false,seller:""},{name:"Distritopaulista",handle:"@distritopaulista",avatar:"DI",type:"arq",active:false,seller:""},{name:"Diversi",handle:"@diversi.arq",avatar:"DI",type:"arq",active:false,seller:""},{name:"Dna",handle:"@dna_arquitetura",avatar:"DN",type:"arq",active:false,seller:""},{name:"Drikapalermo",handle:"@drikapalermo.arquitetura",avatar:"DR",type:"arq",active:false,seller:""},{name:"Dzik",handle:"@dzikarquitetura",avatar:"DZ",type:"arq",active:false,seller:""},{name:"Elihigashi",handle:"@elihigashi",avatar:"EL",type:"arq",active:false,seller:""},{name:"Emaisarq Estudio",handle:"@emaisarq_estudio",avatar:"EE",type:"arq",active:false,seller:""},{name:"Erikabalbinotarq",handle:"@erikabalbinotarq",avatar:"ER",type:"arq",active:false,seller:""},{name:"Erikalinardi",handle:"@erikalinardi_interiores",avatar:"ER",type:"arq",active:false,seller:""},{name:"Espaco Mude",handle:"@espaco_mude",avatar:"EM",type:"arq",active:false,seller:""},{name:"Acau",handle:"@estudio.acau",avatar:"AC",type:"arq",active:false,seller:""},{name:"Caete",handle:"@estudio_caete",avatar:"CA",type:"arq",active:false,seller:""},{name:"Folha",handle:"@estudio_folha",avatar:"FO",type:"arq",active:false,seller:""},{name:"Sb",handle:"@estudio_sb",avatar:"SB",type:"arq",active:false,seller:""},{name:"Estudiovita",handle:"@estudiovita",avatar:"ES",type:"arq",active:false,seller:""},{name:"Eu Arquiteta",handle:"@eu.arquiteta",avatar:"EA",type:"arq",active:false,seller:""},{name:"Euanaburgos",handle:"@euanaburgos",avatar:"EU",type:"arq",active:false,seller:""},{name:"Fernandacarvalhoarquiteta",handle:"@fernandacarvalhoarquiteta",avatar:"FE",type:"arq",active:false,seller:""},{name:"Fernandaperoba",handle:"@fernandaperobaarquitetura",avatar:"FE",type:"arq",active:false,seller:""},{name:"Florenzi",handle:"@florenziarquitetura",avatar:"FL",type:"arq",active:false,seller:""},{name:"Fparqui",handle:"@fparqui",avatar:"FP",type:"arq",active:false,seller:""},{name:"Framearqeng",handle:"@framearqeng",avatar:"FR",type:"arq",active:false,seller:""},{name:"Francinymaurer Arquiteta",handle:"@francinymaurer.arquiteta",avatar:"FA",type:"arq",active:false,seller:""},{name:"Gabrielazuppo",handle:"@gabrielazuppo.arquitetura",avatar:"GA",type:"arq",active:false,seller:""},{name:"Galliassi",handle:"@galliassi.arquitetura",avatar:"GA",type:"arq",active:false,seller:""},{name:"Ggk",handle:"@ggkarquitetura",avatar:"GG",type:"arq",active:false,seller:""},{name:"Giselecosta",handle:"@giselecostainteriores",avatar:"GI",type:"arq",active:false,seller:""},{name:"Gnavarro",handle:"@gnavarro_arquitetura",avatar:"GN",type:"arq",active:false,seller:""},{name:"Greicesouza",handle:"@greicesouza_interiores",avatar:"GR",type:"arq",active:false,seller:""},{name:"Griebeler",handle:"@griebelerarquitetura",avatar:"GR",type:"arq",active:false,seller:""},{name:"Guada",handle:"@guadaarquitetura",avatar:"GU",type:"arq",active:false,seller:""},{name:"Ilha",handle:"@ilha.arquitetura",avatar:"IL",type:"arq",active:false,seller:""},{name:"Intu",handle:"@intu.arquitetura",avatar:"IN",type:"arq",active:false,seller:""},{name:"Ir",handle:"@ir.arq",avatar:"IR",type:"arq",active:false,seller:""},{name:"Isaguizilini",handle:"@isaguizilini.arq",avatar:"IS",type:"arq",active:false,seller:""},{name:"Isarrosen",handle:"@isarrosen",avatar:"IS",type:"arq",active:false,seller:""},{name:"Jeh Id",handle:"@jeh_idarquitetura",avatar:"JI",type:"arq",active:false,seller:""},{name:"Joatinga",handle:"@joatingaarquitetura",avatar:"JO",type:"arq",active:false,seller:""},{name:"Jsarmentoarq",handle:"@jsarmentoarq",avatar:"JS",type:"arq",active:false,seller:""},{name:"Julianaabad",handle:"@julianaabadarquitetura",avatar:"JU",type:"arq",active:false,seller:""},{name:"Juliannarochaarq",handle:"@juliannarochaarq",avatar:"JU",type:"arq",active:false,seller:""},{name:"Jurua",handle:"@juruaarquitetura",avatar:"JU",type:"arq",active:false,seller:""},{name:"Karinahaeffner",handle:"@karinahaeffnerarquitetura",avatar:"KA",type:"arq",active:false,seller:""},{name:"Karinakavamura",handle:"@karinakavamuraarquitetura",avatar:"KA",type:"arq",active:false,seller:""},{name:"Katharinepark",handle:"@katharinepark_",avatar:"KA",type:"arq",active:false,seller:""},{name:"Laddodesign",handle:"@laddodesign",avatar:"LA",type:"arq",active:false,seller:""},{name:"Laiselevada",handle:"@laiselevada_arquitetura",avatar:"LA",type:"arq",active:false,seller:""},{name:"Lanamikaota",handle:"@lanamikaota",avatar:"LA",type:"arq",active:false,seller:""},{name:"Larissaprestes",handle:"@larissaprestes.arq",avatar:"LA",type:"arq",active:false,seller:""},{name:"Lemarchi",handle:"@lemarchi.arquitetura",avatar:"LE",type:"arq",active:false,seller:""},{name:"Lencstudio",handle:"@lencstudio",avatar:"LE",type:"arq",active:false,seller:""},{name:"Leojunqueiraarquiteto",handle:"@leojunqueiraarquiteto",avatar:"LE",type:"arq",active:false,seller:""},{name:"Leticiapassarini",handle:"@leticiapassarini_arquitetura",avatar:"LE",type:"arq",active:false,seller:""},{name:"Liligiudice",handle:"@liligiudice_interiores",avatar:"LI",type:"arq",active:false,seller:""},{name:"Lima Orsolini",handle:"@lima_orsolini_arquitetura",avatar:"LO",type:"arq",active:false,seller:""},{name:"Lisflamingo",handle:"@lisflamingoarquitetura",avatar:"LI",type:"arq",active:false,seller:""},{name:"Lithos3",handle:"@lithos3arquitetura",avatar:"LI",type:"arq",active:false,seller:""},{name:"Liviabrancoarq",handle:"@liviabrancoarq",avatar:"LI",type:"arq",active:false,seller:""},{name:"Liviaoliveiraarq",handle:"@liviaoliveiraarq",avatar:"LI",type:"arq",active:false,seller:""},{name:"Lkoffice",handle:"@lkoffice",avatar:"LK",type:"arq",active:false,seller:""},{name:"Luanaalmeida",handle:"@luanaalmeida.arquitetura",avatar:"LU",type:"arq",active:false,seller:""},{name:"Ludmillabaldezarq",handle:"@ludmillabaldezarq",avatar:"LU",type:"arq",active:false,seller:""},{name:"Luiscanepaarquitetos",handle:"@luiscanepaarquitetos",avatar:"LU",type:"arq",active:false,seller:""},{name:"Luisrenatomachado",handle:"@luisrenatomachado",avatar:"LU",type:"arq",active:false,seller:""},{name:"Lumota",handle:"@lumotainteriores",avatar:"LU",type:"arq",active:false,seller:""},{name:"Malupepe",handle:"@malupepearquitetura",avatar:"MA",type:"arq",active:false,seller:""},{name:"Marcellamiranda",handle:"@marcellamiranda.arq",avatar:"MA",type:"arq",active:false,seller:""},{name:"Marcelovassalo Mvap",handle:"@marcelovassalo_mvap",avatar:"MM",type:"arq",active:false,seller:""},{name:"Marciaarcaro",handle:"@marciaarcaro",avatar:"MA",type:"arq",active:false,seller:""},{name:"Mariabarros",handle:"@mariabarros.arq",avatar:"MA",type:"arq",active:false,seller:""},{name:"Marielmarquesarquiteta",handle:"@marielmarquesarquiteta",avatar:"MA",type:"arq",active:false,seller:""},{name:"Mariflorencioarq",handle:"@mariflorencioarq",avatar:"MA",type:"arq",active:false,seller:""},{name:"Mariliafonseca A",handle:"@mariliafonseca.a",avatar:"MA",type:"arq",active:false,seller:""},{name:"Maripizzinato",handle:"@maripizzinato.arq",avatar:"MA",type:"arq",active:false,seller:""},{name:"Marisantim",handle:"@marisantim.arq",avatar:"MA",type:"arq",active:false,seller:""},{name:"Mauriciopereira",handle:"@mauriciopereira.arq",avatar:"MA",type:"arq",active:false,seller:""},{name:"May",handle:"@mayarquitetura",avatar:"MA",type:"arq",active:false,seller:""},{name:"Mayracatherino",handle:"@mayracatherino.arquitetura",avatar:"MA",type:"arq",active:false,seller:""},{name:"Mb Arquitetura",handle:"@mb.arquitetura_",avatar:"MA",type:"arq",active:false,seller:""},{name:"Mb Arquitetura",handle:"@mb.arquiteturainteriores",avatar:"MA",type:"arq",active:false,seller:""},{name:"Milenapicoli",handle:"@milenapicoliarquitetura",avatar:"MI",type:"arq",active:false,seller:""},{name:"Millenadias",handle:"@millenadias.arq",avatar:"MI",type:"arq",active:false,seller:""},{name:"Millenamiranda",handle:"@millenamiranda.arquitetura",avatar:"MI",type:"arq",active:false,seller:""},{name:"Mmagalhaesestudio",handle:"@mmagalhaesestudio_arq",avatar:"MM",type:"arq",active:false,seller:""},{name:"Mn Arquitetura",handle:"@mn.arquitetura.interiores",avatar:"MA",type:"arq",active:false,seller:""},{name:"Momento",handle:"@momentoarquitetura",avatar:"MO",type:"arq",active:false,seller:""},{name:"Morale",handle:"@moralearquitetura",avatar:"MO",type:"arq",active:false,seller:""},{name:"Mrc Arq",handle:"@mrc_arq.design",avatar:"MA",type:"arq",active:false,seller:""},{name:"Nadiamanssur",handle:"@nadiamanssur.arquitetura",avatar:"NA",type:"arq",active:false,seller:""},{name:"Nathaliaferrazoli",handle:"@nathaliaferrazoli",avatar:"NA",type:"arq",active:false,seller:""},{name:"Nathalyalvesdesigner",handle:"@nathalyalvesdesignerinteriores",avatar:"NA",type:"arq",active:false,seller:""},{name:"Necco",handle:"@neccoarquitetura",avatar:"NE",type:"arq",active:false,seller:""},{name:"Nextarq",handle:"@nextarq",avatar:"NE",type:"arq",active:false,seller:""},{name:"Nicco",handle:"@niccoarquitetura",avatar:"NI",type:"arq",active:false,seller:""},{name:"Nobrarqoficial",handle:"@nobrarqoficial",avatar:"NO",type:"arq",active:false,seller:""},{name:"Nuv",handle:"@nuvarquitetura",avatar:"NU",type:"arq",active:false,seller:""},{name:"Obra4",handle:"@obra4.arquitetura",avatar:"OB",type:"arq",active:false,seller:""},{name:"Office In",handle:"@office.in.design",avatar:"OI",type:"arq",active:false,seller:""},{name:"Oficinacoletiva",handle:"@oficinacoletiva",avatar:"OF",type:"arq",active:false,seller:""},{name:"Oneiro",handle:"@oneiro_arquitetura",avatar:"ON",type:"arq",active:false,seller:""},{name:"Orazi",handle:"@oraziarquitetura",avatar:"OR",type:"arq",active:false,seller:""},{name:"Osastudio Oficial",handle:"@osastudio.oficial",avatar:"OO",type:"arq",active:false,seller:""},{name:"Parq",handle:"@parqarquitetura",avatar:"PA",type:"arq",active:false,seller:""},{name:"Paulocapelarquiteto",handle:"@paulocapelarquiteto",avatar:"PA",type:"arq",active:false,seller:""},{name:"Paulocarvalho",handle:"@paulocarvalho_arq",avatar:"PA",type:"arq",active:false,seller:""},{name:"Perspectiva",handle:"@perspectivaarquitetura",avatar:"PE",type:"arq",active:false,seller:""},{name:"Pitahdesign",handle:"@pitahdesign",avatar:"PI",type:"arq",active:false,seller:""},{name:"Pitay",handle:"@pitayarquitetura",avatar:"PI",type:"arq",active:false,seller:""},{name:"Praca 11",handle:"@praca.11",avatar:"P1",type:"arq",active:false,seller:""},{name:"Pridomenichelli",handle:"@pridomenichelli.arq",avatar:"PR",type:"arq",active:false,seller:""},{name:"Project3",handle:"@project3_arquitetura",avatar:"PR",type:"arq",active:false,seller:""},{name:"Projet Ar",handle:"@projet_ar",avatar:"PA",type:"arq",active:false,seller:""},{name:"Projetopaulista",handle:"@projetopaulista",avatar:"PR",type:"arq",active:false,seller:""},{name:"Pwdesign",handle:"@pwdesign_arquitetura",avatar:"PW",type:"arq",active:false,seller:""},{name:"Quitetefaria",handle:"@quitetefaria",avatar:"QU",type:"arq",active:false,seller:""},{name:"Raphael Dare",handle:"@raphael_dare",avatar:"RD",type:"arq",active:false,seller:""},{name:"Raquelnegrao",handle:"@raquelnegrao.arquitetura",avatar:"RA",type:"arq",active:false,seller:""},{name:"Reginarezende",handle:"@reginarezende_arquitetura",avatar:"RE",type:"arq",active:false,seller:""},{name:"Regiscastro",handle:"@regiscastroarquitetura",avatar:"RE",type:"arq",active:false,seller:""},{name:"Renata Santanaarq",handle:"@renata.santanaarq",avatar:"RS",type:"arq",active:false,seller:""},{name:"Renaterossi",handle:"@renaterossi",avatar:"RE",type:"arq",active:false,seller:""},{name:"Rezende Arquimoveis",handle:"@rezende_arquimoveis",avatar:"RA",type:"arq",active:false,seller:""},{name:"Rl Arqdesign",handle:"@rl_arqdesign",avatar:"RA",type:"arq",active:false,seller:""},{name:"Rossanacerello",handle:"@rossanacerelloarquitetura",avatar:"RO",type:"arq",active:false,seller:""},{name:"Rp Estudio",handle:"@rp_estudio",avatar:"RE",type:"arq",active:false,seller:""},{name:"Rzl",handle:"@rzlarquitetura",avatar:"RZ",type:"arq",active:false,seller:""},{name:"Sala 85",handle:"@sala.85",avatar:"S8",type:"arq",active:false,seller:""},{name:"Salacarq",handle:"@salacarq",avatar:"SA",type:"arq",active:false,seller:""},{name:"Sandra Paes",handle:"@sandra.paes.interiores",avatar:"SP",type:"arq",active:false,seller:""},{name:"Santoro",handle:"@santoroarquitetura",avatar:"SA",type:"arq",active:false,seller:""},{name:"Saramoreno",handle:"@saramoreno.arquitetura",avatar:"SA",type:"arq",active:false,seller:""},{name:"Sarapalamoni",handle:"@sarapalamoniarquitetura",avatar:"SA",type:"arq",active:false,seller:""},{name:"Silviaaguiar",handle:"@silviaaguiar_arquitetura",avatar:"SI",type:"arq",active:false,seller:""},{name:"Simonetasca",handle:"@simonetascaarquitetura",avatar:"SI",type:"arq",active:false,seller:""},{name:"Sq",handle:"@sqarquitetura",avatar:"SQ",type:"arq",active:false,seller:""},{name:"Side",handle:"@studio.side",avatar:"SI",type:"arq",active:false,seller:""},{name:"Guaimbe",handle:"@studio_guaimbe",avatar:"GU",type:"arq",active:false,seller:""},{name:"Studioa7",handle:"@studioa7.arquitetura",avatar:"ST",type:"arq",active:false,seller:""},{name:"Studioarkhe",handle:"@studioarkhe",avatar:"ST",type:"arq",active:false,seller:""},{name:"Studioca",handle:"@studioca.arquitetura",avatar:"ST",type:"arq",active:false,seller:""},{name:"Studioccmais",handle:"@studioccmais",avatar:"ST",type:"arq",active:false,seller:""},{name:"Studioln",handle:"@studioln.arquitetura",avatar:"ST",type:"arq",active:false,seller:""},{name:"Studiomatuti",handle:"@studiomatuti",avatar:"ST",type:"arq",active:false,seller:""},{name:"Studion",handle:"@studion_arquitetura",avatar:"ST",type:"arq",active:false,seller:""},{name:"Studioportaamarela",handle:"@studioportaamarela",avatar:"ST",type:"arq",active:false,seller:""},{name:"Studiotetris",handle:"@studiotetrisarquitetura",avatar:"ST",type:"arq",active:false,seller:""},{name:"Studiottg",handle:"@studiottg",avatar:"ST",type:"arq",active:false,seller:""},{name:"T2Arquiteturaoficial",handle:"@t2arquiteturaoficial",avatar:"T2",type:"arq",active:false,seller:""},{name:"Taboa",handle:"@taboaarquitetura",avatar:"TA",type:"arq",active:false,seller:""},{name:"Tais Arquiteta",handle:"@tais.arquiteta",avatar:"TA",type:"arq",active:false,seller:""},{name:"Tamarafernandes",handle:"@tamarafernandes.arq",avatar:"TA",type:"arq",active:false,seller:""},{name:"Tania Eustaquio",handle:"@tania.eustaquio.arquitetura",avatar:"TE",type:"arq",active:false,seller:""},{name:"Tatagasparotto",handle:"@tatagasparotto",avatar:"TA",type:"arq",active:false,seller:""},{name:"Tau Arquitetos",handle:"@tau.arquitetos",avatar:"TA",type:"arq",active:false,seller:""},{name:"Taupe",handle:"@taupearquitetura",avatar:"TA",type:"arq",active:false,seller:""},{name:"Teresabarra",handle:"@teresabarra.arquitetura",avatar:"TE",type:"arq",active:false,seller:""},{name:"Tiagomaedaarq",handle:"@tiagomaedaarq",avatar:"TI",type:"arq",active:false,seller:""},{name:"Tikkanen",handle:"@tikkanenarquitetura",avatar:"TI",type:"arq",active:false,seller:""},{name:"Trigoarq",handle:"@trigoarq",avatar:"TR",type:"arq",active:false,seller:""},{name:"Verniz",handle:"@vernizarquitetura",avatar:"VE",type:"arq",active:false,seller:""},{name:"Vjrarquitetos",handle:"@vjrarquitetos",avatar:"VJ",type:"arq",active:false,seller:""},{name:"Vk",handle:"@vk.arquitetura",avatar:"VK",type:"arq",active:false,seller:""},{name:"Waldmannmelo",handle:"@waldmannmeloarquitetura",avatar:"WA",type:"arq",active:false,seller:""},{name:"Wp Arquiteturacorporativa",handle:"@wp_arquiteturacorporativa",avatar:"WA",type:"arq",active:false,seller:""},{name:"Ximenesleite",handle:"@ximenesleitearquitetura",avatar:"XI",type:"arq",active:false,seller:""},{name:"Yasminmazloum",handle:"@yasminmazloum.arquitetura",avatar:"YA",type:"arq",active:false,seller:""},{name:"Zoe Gardini",handle:"@zoe_gardini_arquitetura",avatar:"ZG",type:"arq",active:false,seller:""}];
  const existing = JSON.parse(localStorage.getItem('instaagent_profiles') || '[]');
  const existingHandles = new Set(existing.map(p => p.handle.toLowerCase()));
  let added = 0;
  lista.forEach(p => {
    if (!existingHandles.has(p.handle.toLowerCase())) {
      existing.push(p);
      added++;
    }
  });
  localStorage.setItem('instaagent_profiles', JSON.stringify(existing));
  window.profiles = existing;
  if (typeof renderProfiles === 'function') renderProfiles();
  if (typeof updateConnectionStatus === 'function') updateConnectionStatus();
  showToast('arq', '📥', added + ' arquitetos importados!', (lista.length - added) + ' já existiam e foram mantidos.');
}


async function syncFollowersFromApify() {
  const token = localStorage.getItem('instaagent_apify_token') || document.getElementById('apify-token')?.value?.trim();
  if (!token || !token.startsWith('apify_api_')) {
    showToast('sup', '⚠️', 'Token ausente', 'Configure o token do Apify em Configurações primeiro.');
    return;
  }

  const targetProfiles = (window.profiles || []).filter(p => p.type === currentProfileTab);
  if (targetProfiles.length === 0) {
    showToast('sup', '⚠️', 'Sem perfis', 'Nenhum perfil nesta aba.');
    return;
  }

  showToast('arq', '🔄', 'Buscando seguidores...', `Consultando ${targetProfiles.length} perfis no Apify. Aguarde.`);

  const usernames = targetProfiles.map(p => p.handle.replace('@', ''));

  try {
    // Chamar o actor de profile scraper diretamente
    const runRes = await fetch(`https://api.apify.com/v2/acts/apify~instagram-profile-scraper/runs?token=${token}&waitForFinish=60`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usernames, resultsLimit: 1 })
    });
    const runData = await runRes.json();
    const datasetId = runData.defaultDatasetId || runData.data?.defaultDatasetId;

    if (!datasetId) throw new Error('Não foi possível iniciar o scraper.');

    // Buscar resultados do dataset
    const itemsRes = await fetch(`https://api.apify.com/v2/datasets/${datasetId}/items?token=${token}&limit=500`);
    const items = await itemsRes.json();
    const list = Array.isArray(items) ? items : (items.items || []);

    let updated = 0;
    list.forEach(item => {
      if (item.followersCount == null) return;
      const handle = '@' + (item.username || '');
      const p = window.profiles.find(x => x.handle.toLowerCase() === handle.toLowerCase());
      if (p) {
        p.followers = item.followersCount;
        updated++;
      }
    });

    saveProfiles();
    renderProfiles();
    showToast('arq', '✅', `${updated} perfis atualizados!`, 'Seguidores sincronizados com sucesso.');
    updateConnectionStatus();

  } catch(e) {
    console.error('[syncFollowers]', e);
    showToast('sup', '❌', 'Erro ao buscar seguidores', e.message);
  }
}

function saveProfiles() {
  localStorage.setItem('instaagent_profiles', JSON.stringify(window.profiles));
  if (document.getElementById('stat-profiles'))
    document.getElementById('stat-profiles').textContent = window.profiles.length;
}

function openEditProfile(handle) {
  const p = window.profiles.find(x => x.handle === handle);
  if (!p) return;
  document.getElementById('edit-profile-handle-orig').value = handle;
  document.getElementById('edit-profile-name').value = p.name;
  document.getElementById('edit-profile-handle').value = p.handle.replace('@','');
  document.getElementById('edit-profile-avatar').value = p.avatar;
  document.getElementById('edit-avatar-preview').textContent = p.avatar;
  document.getElementById('edit-avatar-preview').style.background = p.type === 'arq' ? 'var(--accent-arq-dim)' : 'var(--accent-sup-dim)';
  document.getElementById('edit-avatar-preview').style.color = p.type === 'arq' ? 'var(--accent-arq)' : 'var(--accent-sup)';
  document.getElementById('edit-avatar-preview').style.borderColor = p.type === 'arq' ? 'rgba(10,158,127,0.3)' : 'rgba(217,90,43,0.3)';
  document.getElementById('edit-subtitle').textContent = p.handle + ' · ' + (p.type === 'arq' ? 'Arquiteto(a)' : 'Fornecedor');
  document.getElementById('edit-profile-followers').value = p.followers || '';
  document.getElementById('edit-profile-type').value = p.type || 'arq';
  document.getElementById('edit-profile-seller').value = p.seller || '';
  document.getElementById('modal-edit-profile').style.display = 'flex';
}

function saveEditProfile() {
  const origHandle = document.getElementById('edit-profile-handle-orig').value;
  const p = window.profiles.find(x => x.handle === origHandle);
  if (!p) return;
  const newName = document.getElementById('edit-profile-name').value.trim();
  const newHandle = document.getElementById('edit-profile-handle').value.trim();
  const newAvatar = document.getElementById('edit-profile-avatar').value.trim().toUpperCase() || newName.substring(0,2).toUpperCase();
  const newSeller = document.getElementById('edit-profile-seller').value.trim();
  const newType = document.getElementById('edit-profile-type').value;
  if (!newName || !newHandle) { showToast('sup', '⚠️', 'Erro', 'Nome e Arroba são obrigatórios.'); return; }
  
  // Sync custom suppliers local list if type changes
  const extraSups = JSON.parse(localStorage.getItem('instaagent_custom_sups') || '[]');
  const handleWithAt = newHandle.startsWith('@') ? newHandle : '@' + newHandle;
  if (newType === 'sup') {
      if (!extraSups.includes(handleWithAt)) extraSups.push(handleWithAt);
  } else {
      const idx = extraSups.indexOf(handleWithAt);
      if (idx !== -1) extraSups.splice(idx, 1);
  }
  localStorage.setItem('instaagent_custom_sups', JSON.stringify(extraSups));

  p.name = newName;
  p.handle = handleWithAt;
  p.avatar = newAvatar;
  p.type = newType;
  p.seller = newSeller;
  const newFollowers = parseInt(document.getElementById('edit-profile-followers').value);
  if (!isNaN(newFollowers) && newFollowers >= 0) p.followers = newFollowers;
  else if (document.getElementById('edit-profile-followers').value === '') delete p.followers;
  saveProfiles();
  document.getElementById('modal-edit-profile').style.display = 'none';
  renderProfiles();
  populateSellerFilter();
  showToast('arq', '✅', 'Perfil atualizado!', newName + ' foi editado com sucesso.');
}

function editProfile(handle) {
  openEditProfile(handle);
}
// ========== ACTIONS ==========
function copyPost(user) {
  showToast('sup', '📋', 'Post copiado!', `O post de ${user} foi copiado para a área de transferência.`);
}

function adaptPost(user, text) {
  const input = document.getElementById('ai-input');
  input.value = `Adapte este post de ${user} com a identidade da nossa loja, incluindo nosso logo e linguagem: "${text.substring(0, 80)}..."`;
  sendAiMessage();
}

function notifySeller(arquiteto, seller) {
  showToast('arq', '📲', `${seller} notificado!`, `${arquiteto} postou novidade — vendedor alertado para entrar em contato.`);
}

function openConversation(user) {
  addAiMessage('user', `Como devo abordar o arquiteto ${user} sobre o post dele?`);
  sendAiMessage(true);
}

function analyzeWithAI(type) {
  const msg = type === 'fornecedor'
    ? 'Analise os posts de fornecedores com maior engajamento e me diga qual devo priorizar para adaptar ao meu perfil.'
    : 'Quais arquitetos postaram hoje? Há algum que mencionou produtos ou revestimentos que devemos abordar?';
  document.getElementById('ai-input').value = msg;
  sendAiMessage();
}

function toggleProfile(handle) {
  const p = profiles.find(x => x.handle === handle);
  if (p) p.active = !p.active;
  renderProfiles();
}

// ========== AI CHAT ==========
function handleAiKey(e) {
  if (e.key === 'Enter') sendAiMessage();
}

function addAiMessage(role, text) {
  const chat = document.getElementById('ai-chat');
  const div = document.createElement('div');
  div.className = `chat-msg ${role === 'user' ? 'user' : 'ai'}`;
  div.innerHTML = `
    <div class="chat-avatar ${role === 'user' ? 'user-av' : 'ai'}">${role === 'user' ? '👤' : '✦'}</div>
    <div class="chat-bubble">${text}</div>
  `;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function showTyping() {
  const chat = document.getElementById('ai-chat');
  const div = document.createElement('div');
  div.className = 'chat-msg ai'; div.id = 'typing-indicator';
  div.innerHTML = `
    <div class="chat-avatar ai">✦</div>
    <div class="chat-bubble">
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

async function sendAiMessage(skipInput = false) {
  const input = document.getElementById('ai-input');
  const btn = document.getElementById('ai-btn');
  const msg = input.value.trim();
  if (!msg) return;

  const apiKey = document.getElementById('nb-token').value.trim();
  if (!apiKey || !apiKey.startsWith('gsk_')) {
    addAiMessage('ai', '⚠️ Ops! Cole sua chave do Groq (que começa com gsk_) no painel de imagens abaixo primeiro.');
    return;
  }

  if (!skipInput) addAiMessage('user', msg);
  input.value = '';
  btn.disabled = true;
  showTyping();

  // Context sobre os dados monitorados
  const context = `Você é um assistente especializado em monitoramento de redes sociais para uma loja de revestimentos, louças e metais. 
  
  Dados atuais monitorados:
  - Fornecedores com posts recentes: PortoBello (post sobre Travertino Romano com 4821 likes, MUITO engajamento), Deca (torneira touchless, 2930 likes), Roca Brasil (vaso sanitário inteligente).
  - Arquitetos monitorados com posts recentes: Ana Cláudia (usou produtos PortoBello em projeto em Pinheiros), Rodrigo Maia (visitou feira Revestir), Studio Lima (reforma de cozinha gourmet).
  - Vendedores da loja: Carlos (Loja SP), Fernanda (Loja ABC), Pedro (Loja Norte).
  
  Responda de forma direta, prática e em português, como um assistente de vendas inteligente. 
  Seja conciso (máx 3-4 frases). Use emojis com moderação.`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 1000,
        messages: [
          { role: "system", content: context },
          { role: "user", content: msg }
        ]
      })
    });

    const data = await response.json();
    removeTyping();
    const reply = data.choices?.[0]?.message?.content || "Não consegui processar agora. Verifique sua conexão e tente novamente.";
    addAiMessage('ai', reply);
  } catch (e) {
    removeTyping();
    addAiMessage('ai', '⚠️ Erro de conexão com a IA Groq. Verifique a API key configurada.');
  }

  btn.disabled = false;
}

// ========== TOASTS ==========
function showToast(type, icon, title, body) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-text">
      <div class="toast-title">${title}</div>
      <div class="toast-body">${body}</div>
    </div>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

function triggerNotification() {
  const notifications = [
    { type: 'sup', icon: '🔥', title: 'Post de alto engajamento!', body: 'PortoBello postou novo lançamento — 4.8k likes em 14 min.' },
    { type: 'arq', icon: '📐', title: 'Arquiteto postou!', body: 'Ana Cláudia mencionou produtos PortoBello. Carlos (SP) notificado.' },
    { type: 'arq', icon: '🏆', title: 'Oportunidade de venda!', body: 'Rodrigo Maia visitou a Revestir — momento ideal para contato.' },
  ];
  const n = notifications[Math.floor(Math.random() * notifications.length)];
  showToast(n.type, n.icon, n.title, n.body);
}

// ========== MODAL ==========
function openModal() {
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function closeModalOutside(e) {
  if (e.target.id === 'modal-overlay') closeModal();
}

function selectType(type) {
  selectedType = type;
  document.getElementById('radio-sup').classList.toggle('selected', type === 'sup');
  document.getElementById('radio-sup').classList.toggle('sup', type === 'sup');
  document.getElementById('radio-arq').classList.toggle('selected', type === 'arq');
  document.getElementById('radio-arq').classList.toggle('arq', type === 'arq');
  const gs = document.getElementById('group-seller');
  if(gs) gs.style.display = (type === 'arq') ? 'block' : 'none';
}

function addProfile() {
  let handle = document.getElementById('new-handle').value.trim();
  const name = document.getElementById('new-name').value.trim();
  const seller = document.getElementById('new-seller') ? document.getElementById('new-seller').value.trim() : '';
  if (!handle || !name) return;
  
  if (!handle.startsWith('@')) handle = '@' + handle;
  const exists = window.profiles.some(p => (p.handle||'').toLowerCase() === handle.toLowerCase());
  if (exists) { showToast(selectedType, '⚠️', 'Erro', 'Este perfil já está cadastrado!'); return; }

  window.profiles.push({
    name, handle: handle,
    avatar: name.substring(0, 2).toUpperCase(), type: selectedType, active: true, seller: selectedType === 'arq' ? seller : null
  }); 
  saveProfiles();
  document.getElementById('stat-profiles').textContent = window.profiles.length;
  renderProfiles();
  closeModal();
  document.getElementById('new-handle').value = '';
  document.getElementById('new-name').value = '';
  showToast(selectedType, '✅', 'Perfil adicionado!', name + ' agora está sendo monitorado.');
}

// ========== TABS ==========
window.currentTab = 'dashboard';
function showTab(tab) {
    window.currentTab = tab;
    const titles = {
      dashboard: 'Visão Geral', fornecedores: 'Agente 1 — Fornecedores',
      arquitetos: 'Agente 2 — Arquitetos', perfis: 'Gerenciar Perfis', relatorios: 'Relatórios', configuracoes: 'Configurações', imggen: 'Gerador de Imagens com IA'
    };
    document.getElementById('page-title').textContent = titles[tab] || tab;

    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.remove('active');
        const onclickAttr = el.getAttribute('onclick') || '';
        if (onclickAttr.includes("'" + tab + "'")) {
            el.classList.add('active');
        }
    });

    const statsGrid = document.querySelector('.stats-grid');
    const panelFornecedores = document.getElementById('panel-fornecedores');
    const panelArquitetos = document.getElementById('panel-arquitetos');
    const aiPanel = document.querySelector('.ai-panel');
    const imggenPanel = document.querySelector('.imggen-panel');
    const profilesSection = document.querySelector('.profiles-section');
    const configSection = document.querySelector('.configuracoes-section');
    const relatoriosSection = document.querySelector('.relatorios-section');
    const twoCol = document.querySelector('.two-col');
    const feedF = document.getElementById('feed-fornecedores');
    const feedA = document.getElementById('feed-arquitetos');
    const filtersRows = document.querySelectorAll('.feed-filters-row');

    if(statsGrid) statsGrid.style.display = 'none';
    if(panelFornecedores) panelFornecedores.style.display = 'none';
    if(panelArquitetos) panelArquitetos.style.display = 'none';
    if(aiPanel) aiPanel.style.display = 'none';
    if(imggenPanel) imggenPanel.style.display = 'none';
    if(profilesSection) profilesSection.style.display = 'none';
    if(configSection) configSection.style.display = 'none';
    if(relatoriosSection) relatoriosSection.style.display = 'none';
    if(twoCol) twoCol.style.display = 'none';
    filtersRows.forEach(f => f.style.display = 'none');

    // Reset grids
    if(feedF) feedF.style.display = 'flex';
    if(feedA) feedA.style.display = 'flex';


    if (tab === 'dashboard') {
        if(statsGrid) statsGrid.style.display = 'grid';
        if(twoCol) {
            twoCol.style.display = 'grid';
            twoCol.style.gridTemplateColumns = '1fr 1fr';
        }
        if(panelFornecedores) panelFornecedores.style.display = 'flex';
        if(panelArquitetos) panelArquitetos.style.display = 'flex';
        // 3 posts per row in Dashboard
        if(feedF) { feedF.style.display = 'grid'; feedF.style.gridTemplateColumns = 'repeat(2, 1fr)'; feedF.style.gap = '20px'; }
        if(feedA) { feedA.style.display = 'grid'; feedA.style.gridTemplateColumns = 'repeat(2, 1fr)'; feedA.style.gap = '20px'; }
        // Esconder botão Analisar na visão geral
        const bSup = document.getElementById('btn-analisar-sup');
        const bArq = document.getElementById('btn-analisar-arq');
        if(bSup) bSup.style.display = 'none';
        if(bArq) bArq.style.display = 'none';
        const sortBar = document.getElementById('arq-sort-bar');
        if(sortBar) sortBar.style.display = 'none';
    } else if (tab === 'fornecedores') {
        if(twoCol) {
            twoCol.style.display = 'grid';
            twoCol.style.gridTemplateColumns = '1fr';
        }
        if(panelFornecedores) panelFornecedores.style.display = 'flex';
        if(feedF) { feedF.style.display = 'grid'; feedF.style.gridTemplateColumns = 'repeat(4, 1fr)'; feedF.style.gap = '20px'; }
        if(aiPanel) aiPanel.style.display = 'flex';
        if(document.getElementById('filters-fornecedores')) document.getElementById('filters-fornecedores').style.display='flex';
        const bSup = document.getElementById('btn-analisar-sup');
        if(bSup) bSup.style.display = 'flex';
    } else if (tab === 'arquitetos') {
        if(twoCol) {
            twoCol.style.display = 'grid';
            twoCol.style.gridTemplateColumns = '1fr';
        }
        if(panelArquitetos) panelArquitetos.style.display = 'flex';
        if(feedA) { feedA.style.display = 'grid'; feedA.style.gridTemplateColumns = 'repeat(4, 1fr)'; feedA.style.gap = '20px'; }
        if(aiPanel) aiPanel.style.display = 'flex';
        if(document.getElementById('filters-arquitetos')) document.getElementById('filters-arquitetos').style.display='flex';
        populateSellerFilter();
        const bArq = document.getElementById('btn-analisar-arq');
        if(bArq) bArq.style.display = 'flex';
        const sortBar = document.getElementById('arq-sort-bar');
        if(sortBar) sortBar.style.display = 'flex';
    } else if (tab === 'imggen') {
        if(imggenPanel) imggenPanel.style.display = 'block';
    } else if (tab === 'perfis') {
        if(profilesSection) profilesSection.style.display = 'block';
        renderProfiles();
    } else if (tab === 'configuracoes') {
        if(configSection) configSection.style.display = 'block';
    } else if (tab === 'relatorios') {
        if(relatoriosSection) relatoriosSection.style.display = 'block';
        renderRelatorios();
    }
    
    // Always re-render feeds to apply Top 5 or Filters logic
    window.renderFeeds();
}

// ========== RELATÓRIOS ==========
let currentRelTab = 'arq';
let selectedRelRows = new Set();
let relSort = { col: 'name', dir: 'asc' };
let relDateFilter = 'all';
let relColFilters = {};

function setRelDate(mode, btn) {
  relDateFilter = mode;
  // highlight active button
  document.querySelectorAll('.rel-date-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  // set calendar inputs for preset modes
  const now = new Date();
  const from = document.getElementById('rel-date-from');
  const to = document.getElementById('rel-date-to');
  const fmt = d => d.toISOString().slice(0,10);
  if (mode !== 'custom') {
    to.value = fmt(now);
    if (mode === 'week')       from.value = fmt(new Date(now - 7*864e5));
    else if (mode === 'month') { const d = new Date(now.getFullYear(), now.getMonth(), 1); from.value = fmt(d); }
    else if (mode === 'last_month') { const d = new Date(now.getFullYear(), now.getMonth()-1, 1); const e = new Date(now.getFullYear(), now.getMonth(), 0); from.value = fmt(d); to.value = fmt(e); }
    else if (mode === '3months') from.value = fmt(new Date(now - 90*864e5));
    else if (mode === '6months') from.value = fmt(new Date(now - 180*864e5));
    else if (mode === 'year')  from.value = fmt(new Date(now - 365*864e5));
    else { from.value = ''; to.value = ''; } // all
  }
  selectedRelRows.clear();
  renderRelatorios();
}

function switchRelTab(type) {
  currentRelTab = type;
  relColFilters = {};
  selectedRelRows.clear();
  const arqBtn = document.getElementById('rel-tab-arq');
  const supBtn = document.getElementById('rel-tab-sup');
  if (type === 'arq') {
    arqBtn.style.color = 'var(--accent-arq)'; arqBtn.style.borderBottom = '2px solid var(--accent-arq)';
    supBtn.style.color = 'var(--text-muted)'; supBtn.style.borderBottom = '2px solid transparent';
  } else {
    supBtn.style.color = 'var(--accent-sup)'; supBtn.style.borderBottom = '2px solid var(--accent-sup)';
    arqBtn.style.color = 'var(--text-muted)'; arqBtn.style.borderBottom = '2px solid transparent';
  }
  renderRelatorios();
}

function sortRelBy(col) {
  if (relSort.col === col) relSort.dir = relSort.dir === 'asc' ? 'desc' : 'asc';
  else { relSort.col = col; relSort.dir = 'asc'; }
  renderRelatorios();
}

function applyRelColFilter(col, val) {
  if (val.trim() === '') delete relColFilters[col];
  else relColFilters[col] = val.trim().toLowerCase();
  renderRelatorios();
}

function renderRelatorios() {
  const allPosts = JSON.parse(localStorage.getItem('instaagent_posts') || '[]');
  const profiles = window.profiles || [];
  const isArq = currentRelTab === 'arq';
  const accentColor = isArq ? 'var(--accent-arq)' : 'var(--accent-sup)';
  const accentDim   = isArq ? 'var(--accent-arq-dim)' : 'var(--accent-sup-dim)';

  // Date range filter
  const fromVal = document.getElementById('rel-date-from')?.value;
  const toVal   = document.getElementById('rel-date-to')?.value;
  const fromTs  = fromVal ? new Date(fromVal).getTime() : 0;
  const toTs    = toVal   ? new Date(toVal + 'T23:59:59').getTime() : Infinity;

  // Build rows
  let rows = profiles.filter(p => p.type === currentRelTab).map(p => {
    let pPosts = allPosts.filter(x => x.handle === p.handle);
    if (relDateFilter !== 'all' && (fromTs || toTs < Infinity)) {
      pPosts = pPosts.filter(x => { const t = new Date(x.time).getTime(); return t >= fromTs && t <= toTs; });
    }
    const totalPosts   = pPosts.length;
    const avgLikes     = totalPosts ? Math.round(pPosts.reduce((s,x) => s+(x.likes||0),0)/totalPosts) : 0;
    const avgComments  = totalPosts ? Math.round(pPosts.reduce((s,x) => s+(x.comments||0),0)/totalPosts) : 0;
    const sorted       = [...pPosts].sort((a,b) => new Date(b.time)-new Date(a.time));
    const lastPost     = sorted[0] || null;
    const lastDate     = lastPost ? new Date(lastPost.time).toLocaleDateString('pt-BR') : '—';
    const lastTs       = lastPost ? new Date(lastPost.time).getTime() : 0;
    const topPost      = [...pPosts].sort((a,b)=>(b.likes||0)-(a.likes||0))[0];
    const topLikes     = topPost?.likes || 0;
    const followers    = p.followers || 0;
    return { p, totalPosts, avgLikes, avgComments, lastDate, lastTs, topLikes, followers };
  });

  // Column filters
  Object.entries(relColFilters).forEach(([col, val]) => {
    rows = rows.filter(r => {
      const map = { name: r.p.name, handle: r.p.handle, seller: r.p.seller||'', status: r.p.active?'ativo':'inativo' };
      return (map[col] || '').toLowerCase().includes(val);
    });
  });

  // Sort
  rows.sort((a, b) => {
    let va, vb;
    switch(relSort.col) {
      case 'name':     va = a.p.name.toLowerCase(); vb = b.p.name.toLowerCase(); break;
      case 'seller':   va = (a.p.seller||'').toLowerCase(); vb = (b.p.seller||'').toLowerCase(); break;
      case 'followers':va = a.followers; vb = b.followers; break;
      case 'lastDate': va = a.lastTs; vb = b.lastTs; break;
      case 'posts':    va = a.totalPosts; vb = b.totalPosts; break;
      case 'likes':    va = a.avgLikes; vb = b.avgLikes; break;
      case 'comments': va = a.avgComments; vb = b.avgComments; break;
      case 'topLikes': va = a.topLikes; vb = b.topLikes; break;
      case 'status':   va = a.p.active?1:0; vb = b.p.active?1:0; break;
      default:         va = a.p.name.toLowerCase(); vb = b.p.name.toLowerCase();
    }
    if (va < vb) return relSort.dir === 'asc' ? -1 : 1;
    if (va > vb) return relSort.dir === 'asc' ? 1 : -1;
    return 0;
  });

  // Summary
  const summary = document.getElementById('relatorios-summary');
  if (summary) summary.textContent = `${rows.length} perfis exibidos · ${rows.reduce((s,r)=>s+r.totalPosts,0)} posts no período`;

  // Helper: sort icon
  const si = col => `<span class="sort-icon ${relSort.col===col?'active':''}">${relSort.col===col?(relSort.dir==='asc'?'▲':'▼'):'⇅'}</span>`;
  const fi = (col, ph) => `<input class="rel-col-filter" placeholder="${ph}" value="${relColFilters[col]||''}" oninput="applyRelColFilter('${col}',this.value)" onclick="event.stopPropagation()">`;

  const thS = `padding:10px 14px 6px; font-size:10px; font-family:'Syne',sans-serif; font-weight:700; text-transform:uppercase; letter-spacing:1px; color:var(--text-muted); border-bottom:2px solid var(--border); white-space:nowrap; vertical-align:top;`;
  const sellerLabel = isArq ? 'Vendedor' : 'Categoria';

  const thead = document.getElementById('relatorios-thead');
  thead.innerHTML = `<tr>
    <th style="${thS} width:36px;"><input type="checkbox" id="check-all-rel" onchange="toggleAllRelRows(this.checked)" style="cursor:pointer; margin-top:4px;"></th>
    <th class="rel-sort-th" style="${thS}" onclick="sortRelBy('name')">Perfil ${si('name')}<br>${fi('name','🔍 Nome...')}</th>
    <th class="rel-sort-th" style="${thS}" onclick="sortRelBy('seller')">${sellerLabel} ${si('seller')}<br>${fi('seller','🔍 Filtrar...')}</th>
    <th class="rel-sort-th" style="${thS}" onclick="sortRelBy('followers')">Seguidores ${si('followers')}</th>
    <th class="rel-sort-th" style="${thS}" onclick="sortRelBy('lastDate')">Último Post ${si('lastDate')}</th>
    <th class="rel-sort-th" style="${thS}" onclick="sortRelBy('posts')">Posts ${si('posts')}</th>
    <th class="rel-sort-th" style="${thS}" onclick="sortRelBy('likes')">Média Likes ${si('likes')}</th>
    <th class="rel-sort-th" style="${thS}" onclick="sortRelBy('comments')">Média Coment. ${si('comments')}</th>
    <th class="rel-sort-th" style="${thS}" onclick="sortRelBy('topLikes')">Top Post ${si('topLikes')}</th>
    <th class="rel-sort-th" style="${thS}" onclick="sortRelBy('status')">Status ${si('status')}<br>${fi('status','ativo/inativo')}</th>
  </tr>`;

  const tbody = document.getElementById('relatorios-tbody');
  if (rows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" style="padding:48px; text-align:center; color:var(--text-muted); font-size:13px;">Nenhum resultado para os filtros aplicados.</td></tr>`;
    updateExportButtons(); return;
  }

  const tdS = 'padding:11px 14px; border-bottom:1px solid var(--border); vertical-align:middle;';
  tbody.innerHTML = rows.map((r, i) => {
    const isSelected = selectedRelRows.has(r.p.handle);
    const hasData = r.totalPosts > 0;
    return `<tr id="rel-row-${i}" style="background:${isSelected?accentDim:'transparent'}; transition:background 0.15s; cursor:pointer;"
      onclick="toggleRelRow('${r.p.handle}',${i})"
      onmouseover="if(!selectedRelRows.has('${r.p.handle}'))this.style.background='var(--surface2)'"
      onmouseout="if(!selectedRelRows.has('${r.p.handle}'))this.style.background='transparent'">
      <td style="${tdS}" onclick="event.stopPropagation()">
        <input type="checkbox" class="rel-row-check" data-handle="${r.p.handle}" data-idx="${i}" ${isSelected?'checked':''} onchange="toggleRelRow('${r.p.handle}',${i})" style="cursor:pointer;">
      </td>
      <td style="${tdS}">
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="width:34px;height:34px;border-radius:50%;background:${accentDim};color:${accentColor};display:flex;align-items:center;justify-content:center;font-family:'Syne',sans-serif;font-weight:800;font-size:12px;flex-shrink:0;">${r.p.avatar}</div>
          <div><div style="font-weight:600;font-size:13px;">${r.p.name}</div><div style="font-size:11px;color:var(--text-muted);">${r.p.handle}</div></div>
        </div>
      </td>
      <td style="${tdS};color:var(--text-mid);font-size:12px;">${r.p.seller||'—'}</td>
      <td style="${tdS}">
        ${r.followers ? `<span style="font-weight:700;font-size:13px;">👥 ${Number(r.followers).toLocaleString('pt-BR')}</span>` : `<span style="font-size:11px;color:var(--text-muted);font-style:italic;">—</span>`}
      </td>
      <td style="${tdS};color:var(--text-mid);font-size:12px;">${r.lastDate}</td>
      <td style="${tdS}"><span style="font-family:'Syne',sans-serif;font-weight:700;font-size:15px;color:${hasData?accentColor:'var(--text-muted)'};">${r.totalPosts}</span></td>
      <td style="${tdS}"><span style="font-weight:600;color:${hasData?'var(--text)':'var(--text-muted)'};">${hasData?'❤️ '+r.avgLikes.toLocaleString('pt-BR'):'—'}</span></td>
      <td style="${tdS}"><span style="font-weight:600;color:${hasData?'var(--text)':'var(--text-muted)'};">${hasData?'💬 '+r.avgComments.toLocaleString('pt-BR'):'—'}</span></td>
      <td style="${tdS};font-size:12px;color:var(--text-mid);">${r.topLikes?'❤️ '+r.topLikes.toLocaleString('pt-BR'):'—'}</td>
      <td style="${tdS}">
        <span style="font-size:10px;font-weight:700;font-family:'Syne',sans-serif;padding:3px 8px;border-radius:6px;${r.p.active?'background:rgba(0,212,106,0.12);color:#00a854;':'background:var(--surface2);color:var(--text-muted);'}">
          ${r.p.active?'● Ativo':'○ Inativo'}
        </span>
      </td>
    </tr>`;
  }).join('');

  updateExportButtons();
}

function toggleRelRow(handle, idx) {
  if (selectedRelRows.has(handle)) selectedRelRows.delete(handle);
  else selectedRelRows.add(handle);
  const row = document.getElementById('rel-row-' + idx);
  const check = document.querySelector(`.rel-row-check[data-handle="${handle}"]`);
  const isArq = currentRelTab === 'arq';
  const accentDim = isArq ? 'var(--accent-arq-dim)' : 'var(--accent-sup-dim)';
  if (row) row.style.background = selectedRelRows.has(handle) ? accentDim : 'transparent';
  if (check) check.checked = selectedRelRows.has(handle);
  const allCheck = document.getElementById('check-all-rel');
  const total = document.querySelectorAll('.rel-row-check').length;
  if (allCheck) allCheck.checked = selectedRelRows.size === total;
  updateExportButtons();
}

function toggleAllRelRows(checked) {
  document.querySelectorAll('.rel-row-check').forEach(cb => {
    const handle = cb.dataset.handle;
    const idx = cb.dataset.idx;
    if (checked) selectedRelRows.add(handle); else selectedRelRows.delete(handle);
    const row = document.getElementById('rel-row-' + idx);
    const isArq = currentRelTab === 'arq';
    const accentDim = isArq ? 'var(--accent-arq-dim)' : 'var(--accent-sup-dim)';
    if (row) row.style.background = checked ? accentDim : 'transparent';
    cb.checked = checked;
  });
  updateExportButtons();
}

function updateExportButtons() {
  const hasSelection = selectedRelRows.size > 0;
  const btnPdf = document.getElementById('btn-export-pdf');
  const btnXls = document.getElementById('btn-export-excel');
  [btnPdf, btnXls].forEach(btn => {
    if (!btn) return;
    btn.disabled = !hasSelection;
    btn.style.opacity = hasSelection ? '1' : '0.4';
    btn.style.cursor = hasSelection ? 'pointer' : 'not-allowed';
  });
}

function getSelectedRows() {
  const posts = JSON.parse(localStorage.getItem('instaagent_posts') || '[]');
  const profiles = window.profiles || [];
  return [...selectedRelRows].map(handle => {
    const p = profiles.find(x => x.handle === handle);
    if (!p) return null;
    const pPosts = posts.filter(x => x.handle === handle);
    const totalPosts = pPosts.length;
    const avgLikes = totalPosts ? Math.round(pPosts.reduce((s,x) => s+(x.likes||0),0)/totalPosts) : 0;
    const avgComments = totalPosts ? Math.round(pPosts.reduce((s,x) => s+(x.comments||0),0)/totalPosts) : 0;
    const lastPost = pPosts.sort((a,b)=>new Date(b.time)-new Date(a.time))[0];
    const lastDate = lastPost ? new Date(lastPost.time).toLocaleDateString('pt-BR') : '—';
    const topPost = pPosts.sort((a,b)=>(b.likes||0)-(a.likes||0))[0];
    return { name:p.name, handle:p.handle, seller:p.seller||'—', followers: p.followers || 0, lastDate, totalPosts, avgLikes, avgComments, topLikes: topPost?.likes||0, status: p.active?'Ativo':'Inativo' };
  }).filter(Boolean);
}

function exportExcel() {
  const rows = getSelectedRows();
  if (!rows.length) return;
  const headers = ['Nome','Arroba','Vendedor','Seguidores','Último Post','Posts Captados','Média Likes','Média Comentários','Top Likes','Status'];
  const csvRows = [headers, ...rows.map(r => [r.name, r.handle, r.seller, r.followers ? r.followers.toLocaleString('pt-BR') : '—', r.lastDate, r.totalPosts, r.avgLikes, r.avgComments, r.topLikes, r.status])];
  const csv = csvRows.map(r => r.map(v => `"${v}"`).join(',')).join('\n');
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url;
  a.download = `relatorio_instaagent_${new Date().toISOString().slice(0,10)}.csv`;
  a.click(); URL.revokeObjectURL(url);
  showToast('arq','📗','Excel exportado!',`${rows.length} perfis exportados com sucesso.`);
}

function exportPDF() {
  const rows = getSelectedRows();
  if (!rows.length) return;
  const tipo = currentRelTab === 'arq' ? 'Arquitetos' : 'Fornecedores';
  const date = new Date().toLocaleDateString('pt-BR');
  const tableRows = rows.map(r => `
    <tr>
      <td>${r.name}<br><span style="color:#888;font-size:10px;">${r.handle}</span></td>
      <td>${r.seller}</td>
      <td style="text-align:center;">${r.followers ? '👥 ' + Number(r.followers).toLocaleString('pt-BR') : '—'}</td>
      <td>${r.lastDate}</td>
      <td style="text-align:center;font-weight:700;">${r.totalPosts}</td>
      <td style="text-align:center;">❤️ ${r.avgLikes.toLocaleString('pt-BR')}</td>
      <td style="text-align:center;">💬 ${r.avgComments.toLocaleString('pt-BR')}</td>
      <td style="text-align:center;font-weight:600;">❤️ ${r.topLikes.toLocaleString('pt-BR')}</td>
      <td style="text-align:center;"><span style="padding:2px 8px;border-radius:4px;font-size:10px;font-weight:700;background:${r.status==='Ativo'?'#e6faf3':'#f5f5f5'};color:${r.status==='Ativo'?'#00a854':'#888'};">${r.status}</span></td>
    </tr>`).join('');

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
  <title>Relatório InstaAgent</title>
  <style>
    * { box-sizing:border-box; margin:0; padding:0; }
    body { font-family:'Segoe UI',sans-serif; color:#1a1612; padding:32px; background:#fff; }
    .header { display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:28px; border-bottom:2px solid #f0ede8; padding-bottom:16px; }
    h1 { font-size:22px; font-weight:800; }
    .sub { font-size:12px; color:#888; margin-top:4px; }
    .badge { background:#f0ede8; border-radius:6px; padding:4px 12px; font-size:12px; font-weight:700; }
    table { width:100%; border-collapse:collapse; font-size:12px; }
    th { padding:10px 12px; background:#f4f2ee; text-align:left; font-size:10px; text-transform:uppercase; letter-spacing:0.8px; color:#9e9589; font-weight:700; border-bottom:2px solid #e0dbd3; }
    td { padding:11px 12px; border-bottom:1px solid #f0ede8; vertical-align:middle; }
    tr:last-child td { border-bottom:none; }
    .footer { margin-top:24px; font-size:10px; color:#aaa; text-align:right; }
  </style></head><body>
  <div class="header">
    <div><h1>📊 Relatório — ${tipo}</h1><div class="sub">Gerado em ${date} · InstaAgent 2RV</div></div>
    <div class="badge">${rows.length} perfis selecionados</div>
  </div>
  <table>
    <thead><tr>
      <th>Perfil</th><th>Vendedor</th><th style="text-align:center;">Seguidores</th><th>Último Post</th>
      <th style="text-align:center;">Posts</th><th style="text-align:center;">Média Likes</th>
      <th style="text-align:center;">Média Coment.</th><th style="text-align:center;">Top Post</th><th style="text-align:center;">Status</th>
    </tr></thead>
    <tbody>${tableRows}</tbody>
  </table>
  <div class="footer">InstaAgent · 2RV Revestimentos & Ambientes · ${date}</div>
  </body></html>`;

  const win = window.open('','_blank');
  win.document.write(html);
  win.document.close();
  setTimeout(() => { win.print(); }, 400);
  showToast('sup','📄','PDF gerado!',`${rows.length} perfis prontos para imprimir/salvar.`);
}



function updateNbStatus() { updateConnectionStatus(); }

function updateConnectionStatus() {
  // Groq
  const groqKey = document.getElementById('nb-token')?.value?.trim() || '';
  const groqOk = groqKey.startsWith('gsk_');
  const dotGroq = document.getElementById('dot-groq');
  const boxGroq = document.getElementById('status-groq');
  if (dotGroq && boxGroq) {
    dotGroq.style.background = groqOk ? '#00d46a' : '#e05a5a';
    dotGroq.style.boxShadow = groqOk ? '0 0 5px #00d46a' : 'none';
    boxGroq.style.borderColor = groqOk ? 'rgba(0,212,106,0.35)' : 'rgba(224,90,90,0.3)';
    boxGroq.style.color = groqOk ? '#00a854' : '#e05a5a';
    boxGroq.title = groqOk ? 'Groq conectado ✓' : 'Groq: chave não configurada';
  }

  // Apify
  const apifyKey = document.getElementById('apify-token')?.value?.trim() || localStorage.getItem('instaagent_apify_token') || '';
  const apifyOk = apifyKey.startsWith('apify_api_');
  const dotApify = document.getElementById('dot-apify');
  const boxApify = document.getElementById('status-apify');
  if (dotApify && boxApify) {
    dotApify.style.background = apifyOk ? '#00d46a' : '#e05a5a';
    dotApify.style.boxShadow = apifyOk ? '0 0 5px #00d46a' : 'none';
    boxApify.style.borderColor = apifyOk ? 'rgba(0,212,106,0.35)' : 'rgba(224,90,90,0.3)';
    boxApify.style.color = apifyOk ? '#00a854' : '#e05a5a';
    boxApify.title = apifyOk ? 'Apify conectado ✓' : 'Apify: token não configurado';
  }

  // Sync
  const posts = JSON.parse(localStorage.getItem('instaagent_posts') || '[]');
  const dotSync = document.getElementById('dot-sync');
  const boxSync = document.getElementById('status-sync');
  const labelSync = document.getElementById('label-sync');
  if (dotSync && boxSync && labelSync) {
    if (posts.length > 0) {
      const timestamps = posts.map(p => new Date(p.time).getTime()).filter(t => !isNaN(t));
      const newest = timestamps.length ? Math.max(...timestamps) : 0;
      const minutesAgo = Math.floor((Date.now() - newest) / 60000);
      const label = minutesAgo < 60 ? `Sync ${minutesAgo}min atrás` : minutesAgo < 1440 ? `Sync ${Math.floor(minutesAgo/60)}h atrás` : `Sync ${Math.floor(minutesAgo/1440)}d atrás`;
      dotSync.style.background = '#00d46a';
      dotSync.style.boxShadow = '0 0 5px #00d46a';
      boxSync.style.borderColor = 'rgba(0,212,106,0.35)';
      boxSync.style.color = '#00a854';
      labelSync.textContent = label;
      boxSync.title = `${posts.length} posts sincronizados`;
    } else {
      dotSync.style.background = '#f0a500';
      dotSync.style.boxShadow = '0 0 5px rgba(240,165,0,0.5)';
      boxSync.style.borderColor = 'rgba(240,165,0,0.35)';
      boxSync.style.color = '#c47f00';
      labelSync.textContent = 'Sem sync';
      boxSync.title = 'Nenhum feed sincronizado ainda';
    }
  }
}

function toggleSource(src) {
  const el = document.getElementById('src-' + src);
  if (src === 'planilha') {
    const upload = document.getElementById('planilha-upload');
    upload.style.display = upload.style.display === 'none' ? 'block' : 'none';
    el.classList.toggle('active-arq');
    if (activeSources.includes(src)) activeSources = activeSources.filter(s => s !== src);
    else activeSources.push(src);
    return;
  }
  if (activeSources.includes(src)) {
    activeSources = activeSources.filter(s => s !== src);
    el.classList.remove('active-arq');
  } else {
    activeSources.push(src);
    el.classList.add('active-arq');
  }
}

function loadPlanilha(event) {
  const file = event.target.files[0];
  if (!file) return;
  const status = document.getElementById('planilha-status');
  status.style.display = 'block';
  status.textContent = `✓ "${file.name}" carregada! Produtos serão buscados nela.`;
  // Simula leitura — em produção usaria SheetJS
  planilhaData = [
    { name: 'Porcelanato Venatto Calacatta', code: 'PVT-0023', desc: 'Porcelanato 80x80 polido, fundo branco com veios cinza', src: 'planilha' },
    { name: 'Revestimento Palazzo Marfim', code: 'RPM-0041', desc: 'Revestimento 30x60 acetinado tom marfim', src: 'planilha' },
  ];
}

// ── Google Custom Search (fotos dos produtos) ────────────────────────────────
const GOOGLE_CX       = '90b0de553f9934413';
const DRIVE_FOLDER_ID = '1u5CYS0TE4HRH3HOoY22tyWDfn9K5qRdA';

// Mapa de URLs de imagem por marca — pega diretamente dos sites dos fabricantes
const BRAND_IMAGE_PATTERNS = {
  'portobello': (q) => `https://www.portobello.com.br/busca?q=${encodeURIComponent(q)}`,
  'deca':       (q) => `https://www.deca.com.br/busca?q=${encodeURIComponent(q)}`,
  'portinari':  (q) => `https://www.portinari.com.br/busca?q=${encodeURIComponent(q)}`,
  'eliane':     (q) => `https://www.eliane.com/busca?q=${encodeURIComponent(q)}`,
  'roca':       (q) => `https://www.roca.com.br/busca?q=${encodeURIComponent(q)}`,
  'duratex':    (q) => `https://www.dexco.com.br/busca?q=${encodeURIComponent(q)}`,
};

// Busca arquivos no Google Drive pelo nome do produto
async function searchDrive(query) {
  try {
    const googleToken = localStorage.getItem('instaagent_google_token');
    if (!googleToken) return [];
    const q   = encodeURIComponent(`'${DRIVE_FOLDER_ID}' in parents and fullText contains '${query}' and trashed = false`);
    const url = `https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id,name,mimeType,thumbnailLink,webContentLink)&key=${googleToken}&pageSize=5`;
    const res  = await fetch(url);
    const data = await res.json();
    return data.files || [];
  } catch(e) { return []; }
}

function selectProductCard(idx, product) {
  selectedProduct = product;
  document.querySelectorAll('.product-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('pcard-' + idx)?.classList.add('selected');

  document.getElementById('selected-product').style.display = 'block';
  document.getElementById('selected-product-name').textContent = `${product.brand} — ${product.name} (${product.code})`;
  document.getElementById('selected-product-desc').textContent = product.desc;

  // Monta prompt automaticamente
  const tags = [...selectedTags.env];
  const tagStr = tags.length > 0 ? ', ' + tags.join(', ') : '';
  document.getElementById('imggen-prompt').value =
    `${product.promptHint}${tagStr}`;

  showToast('arq', '✓', 'Produto selecionado!', 'Prompt montado automaticamente. Ajuste se quiser e gere a imagem.');
}


function renderFornecedoresReal() {
    const container = document.getElementById('feed-fornecedores');
    let posts = window.fornecedoresPosts || [];
    let readPosts = JSON.parse(localStorage.getItem('instaagent_read_posts') || '[]');
    
    // Hide read posts
    posts = posts.filter(p => !readPosts.includes(p.id));

    // update stat dynamically from FULL array
    const dynamicCount = document.getElementById('dynamic-forn-count');
    if (dynamicCount) dynamicCount.innerText = posts.length;
    
    let isCompact = false;
    if (window.currentTab === 'dashboard') {
        const sorted = [...posts].sort((a,b) => (b.likes||0) - (a.likes||0));
        posts = sorted.slice(0, 6);
        isCompact = true;
        if(container) container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        if(container) container.style.gridTemplateColumns = 'repeat(5, 1fr)';
        const dateFilter = document.getElementById('filter-date-f')?.value || 'all';
        if (dateFilter === 'custom') {
            const start = document.getElementById('filter-custom-start-f')?.value;
            const end = document.getElementById('filter-custom-end-f')?.value;
            if(start) {
               const stTime = new Date(start).getTime();
               posts = posts.filter(p => new Date(p.time).getTime() >= stTime);
            }
            if(end) {
               // set end boundary to end of day
               const edTime = new Date(end).getTime() + 86399999;
               posts = posts.filter(p => new Date(p.time).getTime() <= edTime);
            }
        } else if (dateFilter !== 'all') {
            const now = Date.now();
            const ranges = { week: 7, month: 30, last_month: 60, '6_months': 180, '12_months': 365 };
            const days = ranges[dateFilter] || 9999;
            posts = posts.filter(p => (now - new Date(p.time).getTime()) < days * 86400000);
        }
    }
    

    
    container.innerHTML = posts.map(p => {
        const compactClass = isCompact ? ' compact-mode' : '';
        const imgHtml = p.imageUrl ? `<img class="post-img" src="${p.imageUrl}" onerror="this.style.display='none'"/>` : '';
        const safeText = (p.text||"").replace(/\n|\r/g, ' ').replace(/"/g, '&quot;').replace(/'/g, "\\'");
        const profile = (window.profiles || []).find(x => (x.handle||'').toLowerCase() === (p.handle||'').toLowerCase());
        const followersTag = profile?.followers ? `<span style="font-size:10px; color:var(--text-muted); margin-left:6px;">👥 ${Number(profile.followers).toLocaleString('pt-BR')}</span>` : '';
        
        return `<div class="post-item ${p.isNew ? 'new' : ''}${compactClass}" onclick="goToPost('${p.url || 'https://instagram.com/' + (p.handle||'').replace('@','')}', event)">
            <div class="compact-img-wrap">${imgHtml}</div>
            <div class="compact-content-wrap">
                <div class="post-profile">
                    <div class="avatar sup">${(p.user||'?').charAt(0).toUpperCase()}</div>
                    <div class="post-meta">
                        <div class="post-user">${p.user||p.handle}${followersTag}</div>
                        <div class="post-time">${p.handle} &middot; ${new Date(p.time).toLocaleDateString()}</div>
                    </div>
                </div>
                <div class="post-text">${p.text}</div>
                <div class="post-metrics">
                    <div class="metric"><i class="ph-fill ph-heart"></i> ${(p.likes||0).toLocaleString("pt-BR")}</div>
                    <div class="metric"><i class="ph-fill ph-chat-circle"></i> ${p.comments||0}</div>
                </div>
                <div class="post-actions">
                    <button class="action-btn" onclick="copyCaption('${safeText}', event)">📋 Copiar</button>
                    <button class="action-btn cta" onclick="adaptPost('${p.user}', '${safeText}', event)">✨ Analisar</button>
                    <button class="action-btn read-btn" onclick="markAsRead('${p.id}', event)">Marcar Lido</button>
                </div>
            </div>
        </div>`;
    }).join('') || '<div style="padding:40px; text-align:center; color:var(--text-muted); grid-column:1/-1;">Nenhum post encontrado.</div>';
}

function populateSellerFilter() {
    const sel = document.getElementById('filter-seller-a');
    if (!sel) return;
    const sellers = [...new Set(
        (window.profiles || [])
            .filter(p => p.type === 'arq' && p.seller)
            .map(p => p.seller)
    )];
    sel.innerHTML = '<option value="all">Vendedor: Todos</option>' +
        sellers.map(s => `<option value="${s}">${s}</option>`).join('');
}

let arqSortMode = 'recente';

function setArqSort(mode, btn) {
  arqSortMode = mode;
  document.querySelectorAll('.arq-sort-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderFeeds();
}

function renderArquitetosReal() {
    const container = document.getElementById('feed-arquitetos');
    let posts = window.arquitetosPosts || [];
    let readPosts = JSON.parse(localStorage.getItem('instaagent_read_posts') || '[]');
    
    // Hide read posts
    posts = posts.filter(p => !readPosts.includes(p.id));

    // update stat dynamically from FULL array
    const dynamicCount = document.getElementById('dynamic-arq-count');
    if (dynamicCount) dynamicCount.innerText = posts.length;
    
    let isCompact = false;
    if (window.currentTab === 'dashboard') {
        const sorted = [...posts].sort((a,b) => (b.likes||0) - (a.likes||0));
        posts = sorted.slice(0, 6);
        isCompact = true;
        if(container) container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        if(container) container.style.gridTemplateColumns = 'repeat(5, 1fr)';
        
        // Filtro de data
        const dateFilter = document.getElementById('filter-date-a')?.value || 'all';
        if (dateFilter === 'custom') {
            const start = document.getElementById('filter-custom-start-a')?.value;
            const end = document.getElementById('filter-custom-end-a')?.value;
            if(start) {
               const stTime = new Date(start).getTime();
               posts = posts.filter(p => new Date(p.time).getTime() >= stTime);
            }
            if(end) {
               const edTime = new Date(end).getTime() + 86399999;
               posts = posts.filter(p => new Date(p.time).getTime() <= edTime);
            }
        } else if (dateFilter !== 'all') {
            const now = Date.now();
            const ranges = { week: 7, month: 30, last_month: 60, '6_months': 180, '12_months': 365 };
            const days = ranges[dateFilter] || 9999;
            posts = posts.filter(p => (now - new Date(p.time).getTime()) < days * 86400000);
        }

        // Filtro de vendedor
        const sellerFilter = document.getElementById('filter-seller-a')?.value || 'all';
        if (sellerFilter !== 'all') {
            const arqHandles = (window.profiles || [])
                .filter(p => p.type === 'arq' && p.seller === sellerFilter)
                .map(p => p.handle);
            posts = posts.filter(p => arqHandles.includes(p.handle));
        }

        // Busca por nome/texto
        const searchVal = (document.getElementById('arq-search')?.value || '').toLowerCase().trim();
        if (searchVal) {
            posts = posts.filter(p =>
                (p.user || '').toLowerCase().includes(searchVal) ||
                (p.handle || '').toLowerCase().includes(searchVal) ||
                (p.text || '').toLowerCase().includes(searchVal)
            );
        }

        // Ordenação
        posts = [...posts];
        switch(arqSortMode) {
            case 'recente': posts.sort((a,b) => new Date(b.time) - new Date(a.time)); break;
            case 'likes': posts.sort((a,b) => (b.likes||0) - (a.likes||0)); break;
            case 'comentarios': posts.sort((a,b) => (b.comments||0) - (a.comments||0)); break;
            case 'engajamento': posts.sort((a,b) => ((b.likes||0) + (b.comments||0)*2) - ((a.likes||0) + (a.comments||0)*2)); break;
            case 'nome': posts.sort((a,b) => (a.user||'').localeCompare(b.user||'', 'pt-BR')); break;
            case 'seguidores':
                posts.sort((a,b) => {
                    const pA = (window.profiles||[]).find(x => x.handle === a.handle);
                    const pB = (window.profiles||[]).find(x => x.handle === b.handle);
                    return (pB?.followers||0) - (pA?.followers||0);
                });
                break;
        }
    }

    container.innerHTML = posts.map(p => {
        const compactClass = isCompact ? ' compact-mode' : '';
        const imgHtml = p.imageUrl ? `<img class="post-img" src="${p.imageUrl}" onerror="this.style.display='none'"/>` : '';
        const safeText = (p.text||"").replace(/\n|\r/g, ' ').replace(/"/g, '&quot;').replace(/'/g, "\\'");
        const profile = (window.profiles || []).find(x => x.handle === p.handle);
        const sellerTag = profile?.seller ? `<span style="font-size:10px; background:var(--accent-arq-dim); color:var(--accent-arq); border-radius:4px; padding:2px 7px; margin-left:6px;">👤 ${profile.seller}</span>` : '';
        const followersTag = profile?.followers ? `<span style="font-size:10px; color:var(--text-muted); margin-left:6px;">👥 ${Number(profile.followers).toLocaleString('pt-BR')}</span>` : '';
        const engajamento = (p.likes||0) + (p.comments||0)*2;

        return `<div class="post-item ${p.isNew ? 'new arq' : ''}${compactClass}" onclick="goToPost('${p.url || 'https://instagram.com/' + (p.handle||'').replace('@','')}', event)">
            <div class="compact-img-wrap">${imgHtml}</div>
            <div class="compact-content-wrap">
                <div class="post-profile">
                    <div class="avatar arq">${(p.user||'?').charAt(0).toUpperCase()}</div>
                    <div class="post-meta">
                        <div class="post-user">${p.user||p.handle}${sellerTag}${followersTag}</div>
                        <div class="post-time">${p.handle} &middot; ${new Date(p.time).toLocaleDateString('pt-BR')}</div>
                    </div>
                </div>
                <div class="post-text">${p.text}</div>
                <div class="post-metrics">
                    <div class="metric"><i class="ph-fill ph-heart"></i> ${(p.likes||0).toLocaleString("pt-BR")}</div>
                    <div class="metric"><i class="ph-fill ph-chat-circle"></i> ${p.comments||0}</div>
                    <div class="metric" style="margin-left:auto; font-size:10px; color:var(--accent-arq);">🔥 ${engajamento.toLocaleString('pt-BR')}</div>
                </div>
                <div class="post-actions">
                    <button class="action-btn" style="color:var(--accent-arq); background:var(--accent-arq-dim);" onclick="draftDirect('${p.handle}', '${safeText}', event)">💬 Direct</button>
                    <button class="action-btn read-btn" onclick="markAsRead('${p.id}', event)">Marcar Lido</button>
                </div>
            </div>
        </div>`;
    }).join('') || '<div style="padding:40px; text-align:center; color:var(--text-muted); grid-column:1/-1;">Nenhum post encontrado.</div>';
}

window.backupDashboard = function() {
    const data = {
        profiles: JSON.parse(localStorage.getItem('instaagent_profiles') || '[]'),
        apifyToken: localStorage.getItem('instaagent_apify_token') || '',
        readPosts: JSON.parse(localStorage.getItem('instaagent_read_posts') || '[]'),
        customSups: JSON.parse(localStorage.getItem('instaagent_custom_sups') || '[]'),
        hfToken: localStorage.getItem('instaagent_hf_token') || '',
        syncDate: localStorage.getItem('instaagent_last_sync') || ''
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'instaagent_backup_' + new Date().toISOString().split('T')[0] + '.json';
    a.click();
    URL.revokeObjectURL(url);
    if(window.showToast) window.showToast('sup', '💾', 'Backup concluído', 'O arquivo JSON foi salvo no seu computador.');
};