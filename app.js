'use strict';

const iconArtwork = {
  spotify: '<rect width="80" height="80" rx="19" fill="#1ed760"/><circle cx="40" cy="40" r="27" fill="#111f17"/><g fill="none" stroke="#1ed760" stroke-linecap="round"><path d="M22 32c13-5 27-4 38 3" stroke-width="5"/><path d="M25 42c10-4 22-3 32 2" stroke-width="4"/><path d="M28 51c8-2 17-2 25 2" stroke-width="3.5"/></g>',
  whatsapp: '<rect width="80" height="80" rx="19" fill="#28ca67"/><path d="M20 62l4-12a25 25 0 1 1 9 9z" fill="none" stroke="#fff" stroke-width="4"/><path d="M30 25c-7 4-3 13 4 20 8 8 16 10 21 3l-1-4-8-4-4 4c-5-2-8-5-10-10l3-3-3-7z" fill="#fff"/>',
  instagram: '<defs><linearGradient id="ig" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#ffd86d"/><stop offset=".3" stop-color="#fb7745"/><stop offset=".6" stop-color="#db2476"/><stop offset="1" stop-color="#8055d8"/></linearGradient></defs><rect width="80" height="80" rx="19" fill="url(#ig)"/><rect x="18" y="18" width="44" height="44" rx="13" fill="none" stroke="#fff" stroke-width="4"/><circle cx="40" cy="40" r="11" fill="none" stroke="#fff" stroke-width="4"/><circle cx="54" cy="26" r="3" fill="#fff"/>',
  notion: '<rect x=".5" y=".5" width="79" height="79" rx="18.5" fill="#fff" stroke="#deded8"/><path d="m20 17 36-3 8 8v39l-38 4-10-9V22z" fill="#fff" stroke="#191919" stroke-width="2.5" stroke-linejoin="round"/><path d="m16 22 10 5 38-5M26 27v38" fill="none" stroke="#191919" stroke-width="2.5"/><text x="30" y="56" font-family="Georgia,serif" font-size="34" font-weight="bold" fill="#191919">N</text>',
  duolingo: '<rect width="80" height="80" rx="19" fill="#58cc02"/><path d="m19 21 9 4c8-5 18-5 26 0l8-4v26c0 14-10 23-22 23S18 61 18 47z" fill="#77dc0b"/><path d="M24 32c7-9 17-2 16 11-1-13 11-20 17-10 4 7-1 18-8 18-4 0-7-2-9-6-2 4-5 6-9 6-8 0-12-12-7-19" fill="#fff"/><ellipse cx="32" cy="39" rx="4" ry="6" fill="#4a392d"/><ellipse cx="49" cy="39" rx="4" ry="6" fill="#4a392d"/><circle cx="33" cy="37" r="1.4" fill="#fff"/><circle cx="50" cy="37" r="1.4" fill="#fff"/><path d="m34 49 6-4 7 4-7 6z" fill="#ffb72c"/><path d="M32 61h16" stroke="#58ba00" stroke-width="3" stroke-linecap="round"/>',
  canva: '<defs><linearGradient id="cv" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#05c9ce"/><stop offset=".5" stop-color="#2994dc"/><stop offset="1" stop-color="#a849e8"/></linearGradient></defs><rect width="80" height="80" rx="19" fill="url(#cv)"/><text x="40" y="49" text-anchor="middle" font-family="Georgia,serif" font-size="25" font-style="italic" fill="#fff" letter-spacing="-2">Canva</text>',
  youtube: '<rect width="80" height="80" rx="19" fill="#fff"/><rect x="12" y="22" width="56" height="37" rx="11" fill="#ff0033"/><path d="m34 31 18 10-18 10z" fill="#fff"/>',
  telegram: '<rect width="80" height="80" rx="19" fill="#2aa9e8"/><path d="M15 38 65 19c3-1 4 1 3 4L59 64c-1 3-3 3-5 1L40 54l-8 8-2-17L57 27 36 48z" fill="#fff"/><path d="m30 45 6 3 21-21z" fill="#c1e5f7"/>',
  netflix: '<rect width="80" height="80" rx="19" fill="#111"/><path d="M23 14h11v52l-11 1zm24 0h11v53l-11-1z" fill="#b20710"/><path d="M23 14h12l23 53-12-2z" fill="#e50914"/>',
  pinterest: '<rect width="80" height="80" rx="19" fill="#e60023"/><circle cx="40" cy="40" r="27" fill="#fff"/><path d="M34 60c3-6 3-8 5-16-2-4-1-12 3-12 5 0 2 8 1 11-1 4 0 6 4 6 8 0 11-18 1-22-13-5-24 7-18 17l-2 4c-9-4-10-15-4-23 7-9 23-11 31-3 11 10 5 31-8 31-4 0-7-2-8-4l-2 11z" fill="#e60023"/>',
  maps: '<rect width="80" height="80" rx="19" fill="#fff"/><path d="M40 13c-12 0-22 9-22 21 0 16 22 35 22 35s22-19 22-35c0-12-10-21-22-21" fill="#34a853"/><path d="M40 13c-10 0-18 6-21 14l16 11 20-20c-4-3-9-5-15-5" fill="#4285f4"/><path d="m19 27 16 11-7 15c-6-7-10-13-10-19z" fill="#fbbc04"/><path d="M55 18 43 30 29 15c9-4 19-2 26 3" fill="#ea4335"/><circle cx="40" cy="34" r="8" fill="#fff"/>',
  todoist: '<rect width="80" height="80" rx="19" fill="#e65d51"/><g stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="m17 28 10 5 22-12m-32 19 10 5 22-12m-32 19 10 5 22-12"/><path d="M51 26h11m-11 12h11m-11 12h11" stroke-width="3"/></g>',
  headspace: '<rect width="80" height="80" rx="19" fill="#fffaf0"/><path d="M63 39c1 15-7 26-23 26S14 55 15 40c-1-17 10-26 26-25 14-1 24 10 22 24" fill="#f57c45"/>',
  calm: '<defs><linearGradient id="cl" x2="0" y2="1"><stop stop-color="#4467dd"/><stop offset="1" stop-color="#68a7df"/></linearGradient></defs><rect width="80" height="80" rx="19" fill="url(#cl)"/><text x="40" y="50" text-anchor="middle" font-family="Georgia,serif" font-size="31" font-style="italic" fill="#fff" letter-spacing="-2">Calm</text>',
  figma: '<rect width="80" height="80" rx="19" fill="#fff"/><path d="M28 14h12v18H28a9 9 0 0 1 0-18" fill="#f24e1e"/><path d="M40 14h12a9 9 0 0 1 0 18H40" fill="#ff7262"/><path d="M28 32h12v18H28a9 9 0 0 1 0-18" fill="#a259ff"/><circle cx="49" cy="41" r="9" fill="#1abcfe"/><path d="M28 50h12v9a9 9 0 1 1-12-9" fill="#0acf83"/>',
  gmail: '<rect width="80" height="80" rx="19" fill="#fff"/><path d="M14 59V23l12 9v27" fill="#4285f4"/><path d="M54 59V32l12-9v36" fill="#34a853"/><path d="M14 23c0-7 5-8 10-4l16 12 16-12c5-4 10-3 10 4v6L40 49 14 29" fill="#ea4335"/><path d="m14 29 12 9V21l-2-2c-5-4-10-3-10 4" fill="#c5221f"/><path d="m54 38 12-9v-6c0-7-5-8-10-4l-2 2" fill="#fbbc04"/>',
  zoom: '<rect width="80" height="80" rx="19" fill="#2d8cff"/><rect x="14" y="25" width="36" height="31" rx="7" fill="#fff"/><path d="m53 34 14-9v31l-14-9z" fill="#fff"/>',
  khan: '<rect width="80" height="80" rx="19" fill="#14bf96"/><path d="m40 13 24 14v27L40 68 16 54V27z" fill="#fff"/><path d="M40 54V33m0 12c-12 1-16-6-15-13 9-1 16 4 15 13m0-4c0-10 6-14 14-13 1 9-5 15-14 13" fill="#14bf96"/><circle cx="40" cy="24" r="4" fill="#14bf96"/>',
  strava: '<rect width="80" height="80" rx="19" fill="#fc4c02"/><path d="m34 16 20 35H14z" fill="#fff"/><path d="m54 64 13-23H41z" fill="#ffb595"/>',
  snap: '<rect width="80" height="80" rx="19" fill="#fffc00"/><path d="M40 16c-10 0-15 7-15 16v7c-3 2-6-4-8 0-1 3 4 4 7 6-1 9-8 13-12 14 2 4 8 2 10 5 3-1 6-2 9 0 6 4 12 4 18 0 3-2 6-1 9 0 2-3 8-1 10-5-4-1-11-5-12-14 3-2 8-3 7-6-2-4-5 2-8 0v-7c0-9-5-16-15-16" fill="#fff" stroke="#242424" stroke-width="1.7"/>',
  chess: '<rect width="80" height="80" rx="19" fill="#789d45"/><path d="m29 17 18 2 10 12 2 16-11 10H27l3-15 7-9-13 6-7-7z" fill="#f5f0d7"/><path d="m39 21-1-8-10 6m1 38-3 6h27l-5-6" fill="#f5f0d7"/><path d="M25 66h30" stroke="#f5f0d7" stroke-width="5" stroke-linecap="round"/><circle cx="40" cy="29" r="2" fill="#557733"/>',
  subway: '<rect width="80" height="80" rx="19" fill="#79c9ed"/><path d="M0 61 29 29h22l29 32v19H0" fill="#95a6b8"/><path d="m18 80 18-42m26 42L44 38" stroke="#44546a" stroke-width="5"/><path d="M28 80V49c0-9 24-9 24 0v31" fill="#d74232"/><circle cx="40" cy="33" r="12" fill="#f4c299"/><path d="M26 29c0-16 30-16 29 1H26" fill="#fff"/><path d="M31 20h18v8H31" fill="#d34b36"/><path d="m16 59 15-5m19 0 13 5" stroke="#f4c299" stroke-width="7" stroke-linecap="round"/><path d="m35 70-3 10m13-10 3 10" stroke="#225e9c" stroke-width="8"/>',
  candy: '<rect width="80" height="80" rx="19" fill="#f4b749"/><ellipse cx="40" cy="42" rx="27" ry="22" fill="#c37630" opacity=".23"/><path d="m19 24 11 8-8 17-12-5zm41 8 10-8 1 22-12 5" fill="#df5437"/><rect x="23" y="23" width="37" height="34" rx="16" fill="#f2674b" transform="rotate(-15 40 40)"/><path d="m28 31 21-5m-17 16 22-6m-19 17 17-4" stroke="#fff1d0" stroke-width="7"/><text x="40" y="70" text-anchor="middle" font-size="8" font-family="Arial,sans-serif" font-weight="bold" fill="#fff">CANDY CRUSH</text>',
  minecraft: '<rect width="80" height="80" rx="19" fill="#92b657"/><path d="M0 29h80v51H0" fill="#8b6242"/><path d="M0 29h13v12h14V29h12v8h13v-8h15v13h13V0H0" fill="#6ca83a"/><path d="M9 48h11v9H9m22-11h13v9H31m24 9h15v9H55M8 68h13v10H8m28-7h9v9h-9" fill="#a87d56"/><path d="M0 10h13v9H0m25-15h12v12H25m25-8h15v10H50" fill="#82bb47"/>',
};

const apps = [
  {id:'spotify',name:'Spotify',publisher:'Spotify AB',category:'Entertainment',rating:4.4,downloads:'1B+',size:'42 MB',tint:'#eaf1e7',hover:'#e0ecd9',devices:['phone','tablet','tv','chromebook'],aliases:'music podcasts songs गाने म्यूजिक स्पॉटिफाई',description:'Your world of music, all in one place. Explore playlists for every mood, discover new artists, and make a little space for your favorite podcasts.'},
  {id:'whatsapp',name:'WhatsApp Messenger',shortName:'WhatsApp',publisher:'WhatsApp LLC',category:'Social',rating:4.5,downloads:'5B+',size:'58 MB',tint:'#edf2e7',hover:'#e4eddb',devices:['phone','tablet','chromebook'],aliases:'chat messaging calls व्हाट्सएप चैट',description:'Stay close to the people who matter. Share messages, photos, and everyday moments, and catch up over voice and video calls.'},
  {id:'instagram',name:'Instagram',publisher:'Instagram',category:'Social',rating:4.3,downloads:'5B+',size:'76 MB',tint:'#f7ede9',hover:'#f3e4de',devices:['phone','tablet','chromebook'],aliases:'photos reels videos इंस्टाग्राम फोटो',description:'Capture the little things and share your perspective. Discover creators, explore your interests, and keep up with friends through photos, stories, and reels.'},
  {id:'notion',name:'Notion',publisher:'Notion Labs, Inc.',category:'Productivity',rating:4.7,downloads:'10M+',size:'35 MB',tint:'#efeee9',hover:'#e6e5dc',devices:['phone','tablet','chromebook'],aliases:'notes workspace planner tasks नोशन नोट्स काम',description:'A home for all your ideas. Bring notes, tasks, projects, and plans together in a workspace that feels like yours. Start simple and build as you go.'},
  {id:'duolingo',name:'Duolingo',publisher:'Duolingo',category:'Education',rating:4.6,downloads:'500M+',size:'49 MB',tint:'#f0f3df',hover:'#e8efcf',devices:['phone','tablet','chromebook'],kids:true,aliases:'language learning english hindi languages डुओलिंगो पढ़ाई अंग्रेजी',description:'A little learning goes a long way. Build a daily language habit with bite-sized lessons, playful challenges, and friendly encouragement.'},
  {id:'canva',name:'Canva',publisher:'Canva',category:'Creativity',rating:4.8,downloads:'100M+',size:'38 MB',tint:'#eeeafb',hover:'#e5def8',devices:['phone','tablet','chromebook'],kids:true,aliases:'design photo editor graphics templates कैनवा डिजाइन',description:'Turn a spark of inspiration into something you can share. Make presentations, social posts, posters, and more with an approachable creative toolkit.'},
  {id:'youtube',name:'YouTube',publisher:'Google LLC',category:'Entertainment',rating:4.2,downloads:'10B+',size:'65 MB',tint:'#fff0ec',devices:['phone','tablet','tv','chromebook'],aliases:'video music यूट्यूब वीडियो',description:'There is always something new to discover. Watch creators you love, explore how-to videos, find new music, and follow your curiosity.'},
  {id:'telegram',name:'Telegram',publisher:'Telegram FZ-LLC',category:'Social',rating:4.5,downloads:'1B+',size:'44 MB',tint:'#e9f3fa',devices:['phone','tablet','chromebook'],aliases:'chat messaging टेलीग्राम मैसेज',description:'Keep your conversations moving. Bring friends, communities, and ideas together with messaging, channels, and group conversations.'},
  {id:'netflix',name:'Netflix',publisher:'Netflix, Inc.',category:'Entertainment',rating:4.1,downloads:'1B+',size:'31 MB',tint:'#f3eae7',devices:['phone','tablet','tv','chromebook'],aliases:'movies films shows streaming नेटफ्लिक्स फिल्म',description:'Find your next great watch. Explore stories from around the world, discover a new series, and settle into a movie for your kind of evening.'},
  {id:'pinterest',name:'Pinterest',publisher:'Pinterest',category:'Creativity',rating:4.5,downloads:'1B+',size:'27 MB',tint:'#faecec',devices:['phone','tablet','chromebook'],aliases:'ideas inspiration design pins पिनटेरेस्ट',description:'Save a little inspiration for later. Discover ideas for your home, style, recipes, and creative projects, and collect the things that speak to you.'},
  {id:'maps',name:'Google Maps',publisher:'Google LLC',category:'Lifestyle',rating:4.3,downloads:'10B+',size:'52 MB',tint:'#edf3e9',devices:['phone','tablet','chromebook'],aliases:'travel navigation directions map गूगल मैप्स नक्शा रास्ता',description:'Go somewhere new or find your way home. Explore places, plan routes, and make your everyday journeys a little easier.'},
  {id:'todoist',name:'Todoist',publisher:'Doist Inc.',category:'Productivity',rating:4.6,downloads:'10M+',size:'22 MB',tint:'#f7ede6',devices:['phone','tablet','chromebook'],aliases:'tasks to do list planner टूडू काम सूची',description:'Make room for what matters. Capture tasks, organize your plans, and take your day one small step at a time.'},
  {id:'headspace',name:'Headspace',publisher:'Headspace, Inc.',category:'Lifestyle',rating:4.6,downloads:'10M+',size:'39 MB',tint:'#faf0de',devices:['phone','tablet'],aliases:'meditation mindfulness sleep focus हेडस्पेस ध्यान',description:'A little pause can change your day. Explore approachable meditation, calming exercises, and gentle ways to build a more mindful routine.'},
  {id:'calm',name:'Calm',publisher:'Calm.com, Inc.',category:'Lifestyle',rating:4.4,downloads:'50M+',size:'46 MB',tint:'#e9effa',devices:['phone','tablet','tv'],aliases:'relax meditation sleep sounds कैल्म नींद शांति',description:'Find a softer moment in your day. Unwind with peaceful soundscapes, guided meditation, and stories made for a restful evening.'},
  {id:'figma',name:'Figma',publisher:'Figma, Inc.',category:'Creativity',rating:4.5,downloads:'1M+',size:'26 MB',tint:'#f0ebf7',devices:['phone','tablet','chromebook'],aliases:'design prototype ui ux फिग्मा डिजाइन',description:'Keep your creative work close. Explore designs, review ideas with your team, and share feedback wherever inspiration finds you.'},
  {id:'gmail',name:'Gmail',publisher:'Google LLC',category:'Productivity',rating:4.3,downloads:'10B+',size:'43 MB',tint:'#f5f0e8',devices:['phone','tablet','chromebook'],aliases:'email mail inbox जीमेल ईमेल',description:'Your inbox, a little more organized. Keep up with conversations, find the message you need, and manage your day from one familiar place.'},
  {id:'zoom',name:'Zoom Workplace',shortName:'Zoom',publisher:'Zoom Communications, Inc.',category:'Productivity',rating:4.4,downloads:'1B+',size:'62 MB',tint:'#eaf0fc',devices:['phone','tablet','chromebook'],aliases:'meetings video calls work जूम मीटिंग',description:'Bring everyone a little closer. Connect with your team through meetings, calls, and conversations wherever your day takes you.'},
  {id:'khan',name:'Khan Academy',publisher:'Khan Academy',category:'Education',rating:4.7,downloads:'10M+',size:'28 MB',tint:'#e4f4ec',devices:['phone','tablet','chromebook'],kids:true,aliases:'learning math science lessons खान एकेडमी गणित पढ़ाई',description:'Follow your curiosity. Explore lessons in math, science, and more, practice at your own pace, and discover something new each day.'},
  {id:'strava',name:'Strava',publisher:'Strava Inc.',category:'Lifestyle',rating:4.5,downloads:'50M+',size:'51 MB',tint:'#fff0e5',devices:['phone'],aliases:'fitness running cycling workout स्ट्रावा दौड़ व्यायाम',description:'Every little adventure counts. Track your runs, rides, and outdoor activities, celebrate progress, and find a community that keeps you moving.'},
  {id:'snap',name:'Snapchat',publisher:'Snap Inc.',category:'Social',rating:4.2,downloads:'1B+',size:'71 MB',tint:'#f9f6de',devices:['phone','tablet'],aliases:'camera filters stories chat स्नैपचैट कैमरा',description:'Share your day as it happens. Send moments to friends, play with creative lenses, and make ordinary conversations a little more fun.'},
  {id:'chess',name:'Chess – Play and Learn',shortName:'Chess.com',publisher:'Chess.com',category:'Strategy',rating:4.7,downloads:'50M+',size:'36 MB',tint:'#eef2df',devices:['phone','tablet','chromebook'],game:true,kids:true,aliases:'chess board strategy शतरंज चेस',description:'One move, a world of possibilities. Play a friendly match, work through a puzzle, and learn something new about the timeless game of chess.'},
  {id:'subway',name:'Subway Surfers',publisher:'SYBO Games',category:'Arcade',rating:4.5,downloads:'1B+',size:'132 MB',tint:'#e5f1f6',devices:['phone','tablet','chromebook'],game:true,kids:true,aliases:'running runner game subway सबवे सर्फर्स गेम',description:'A colorful adventure around every corner. Dash through lively city tracks, dodge obstacles, and collect coins in a playful endless runner.'},
  {id:'candy',name:'Candy Crush Saga',publisher:'King',category:'Puzzle',rating:4.6,downloads:'1B+',size:'89 MB',tint:'#fcf0dd',devices:['phone','tablet','chromebook'],game:true,kids:true,aliases:'puzzle match candy games कैंडी क्रश गेम पहेली',description:'Add a little sweetness to your day. Match colorful candies, solve playful puzzles, and discover a new challenge one level at a time.'},
  {id:'minecraft',name:'Minecraft',publisher:'Mojang',category:'Adventure',rating:4.5,downloads:'50M+',size:'184 MB',tint:'#edf2e0',devices:['phone','tablet','chromebook'],game:true,kids:true,aliases:'building blocks creative games माइनक्राफ्ट गेम',description:'Build a world of your own. Explore, create, and discover adventures in a place where your imagination sets the limits.'},
];

const state = {query:'',category:'all',store:'apps',device:'phone',view:'for-you',showAll:false,collection:false};
const $ = (selector) => document.querySelector(selector);
const searchInput = $('#search-input');
const appDialog = $('#app-dialog');
const infoDialog = $('#info-dialog');
let toastTimer;
let savedApps = readLibrary();

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
}

function icon(id) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" aria-hidden="true" focusable="false">${iconArtwork[id] || iconArtwork.notion}</svg>`;
}

function star() {
  return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m12 2 2.9 6 6.6 1-4.8 4.7 1.1 6.6-5.8-3.1-5.8 3.1 1.1-6.6L2.5 9l6.6-1z"/></svg>';
}

function normalize(value) {
  return value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[–—-]/g,' ').replace(/\s+/g,' ').trim();
}

function readLibrary() {
  try {
    const saved = JSON.parse(localStorage.getItem('play-demo-library') || '[]');
    return new Set(Array.isArray(saved) ? saved.filter((id) => apps.some((app) => app.id === id)) : []);
  } catch {
    return new Set();
  }
}

function getFilteredApps() {
  const terms = normalize(state.query).split(' ').filter(Boolean);
  let result = apps.filter((app) => {
    const inStore = state.store === 'games' ? app.game : state.store === 'kids' ? app.kids : terms.length ? true : !app.game;
    const inCategory = state.category === 'all' || app.category === state.category;
    const inCollection = !state.collection || ['notion','canva','todoist','headspace','calm','figma'].includes(app.id);
    const searchable = normalize([app.name,app.shortName || '',app.publisher,app.category,app.aliases,app.description].join(' '));
    return inStore && inCategory && inCollection && app.devices.includes(state.device) && terms.every((term) => searchable.includes(term));
  });
  if (state.view === 'top-charts') result = result.slice().sort((a,b) => b.rating - a.rating || a.name.localeCompare(b.name));
  return result;
}

function appCard(app, index) {
  return `<button class="app-card" data-app="${app.id}" aria-label="View ${escapeHTML(app.name)}, ${app.rating.toFixed(1)} stars">
    <div class="app-art" style="--tint:${app.tint};--hover-tint:${app.hover || app.tint}">${state.view === 'top-charts' ? `<span class="app-rank">#${index + 1}</span>` : ''}<div class="app-logo">${icon(app.id)}</div></div>
    <h3>${escapeHTML(app.shortName || app.name)}</h3><p class="app-category">${escapeHTML(app.category)}</p><div class="app-rating">${app.rating.toFixed(1)} ${star()}<span class="app-price">${app.id === 'minecraft' ? 'Paid' : 'Free'}</span></div>
  </button>`;
}

function essentialCard(app) {
  return `<button class="essential-card" data-app="${app.id}" aria-label="View ${escapeHTML(app.name)}"><div class="essential-icon">${icon(app.id)}</div><div><h3>${escapeHTML(app.shortName || app.name)}</h3><p>${escapeHTML(app.category)}</p><div class="app-rating">${app.rating.toFixed(1)} ${star()}</div></div><span class="essential-free">${app.id === 'minecraft' ? 'Paid' : 'Free'}</span></button>`;
}

function renderCategories() {
  const categories = state.store === 'games' ? ['Arcade','Puzzle','Strategy','Adventure'] : state.store === 'kids' ? ['Education','Creativity','Arcade','Puzzle','Strategy','Adventure'] : ['Productivity','Entertainment','Social','Creativity','Education','Lifestyle'];
  $('#category-bar').innerHTML = ['all',...categories].map((category) => `<button class="category-chip${state.category === category ? ' active' : ''}" data-category="${category}" aria-pressed="${state.category === category}">${category === 'all' ? state.store === 'games' ? 'All games' : 'All apps' : category}</button>`).join('');
}

function render() {
  const result = getFilteredApps();
  const isHome = !normalize(state.query) && state.category === 'all' && state.store === 'apps' && state.device === 'phone' && state.view === 'for-you' && !state.showAll && !state.collection;
  const visible = isHome ? result.slice(0,6) : result;
  document.body.classList.toggle('results-mode', !isHome);
  $('#featured').hidden = !isHome;
  $('#swipe-hint').hidden = !isHome;
  $('#discovery-intro').hidden = !isHome;
  $('#everyday-section').hidden = !isHome;
  $('#essentials-section').hidden = !isHome;
  $('#catalog').innerHTML = visible.map(appCard).join('');
  $('#empty-state').hidden = result.length > 0;
  $('#see-all').hidden = !isHome;
  const query = state.query.trim();
  $('#clear-search').hidden = !searchInput.value;
  $('.search-shortcut').hidden = Boolean(searchInput.value);

  let title = 'Recommended for you';
  let subtitle = 'Good finds, just a tap away.';
  if (query) {
    title = `Results for “${query}”`;
    subtitle = `${result.length} ${result.length === 1 ? 'app' : 'apps'} found${state.category !== 'all' ? ` in ${state.category}` : ''}`;
  } else if (state.collection) {
    title = 'The everyday edit';
    subtitle = 'A little focus. A little creativity. A lot of possibility.';
  } else if (state.view === 'top-charts') {
    title = state.store === 'games' ? 'Top-rated games' : 'Top-rated apps';
    subtitle = `${result.length} ${state.store === 'games' ? 'games' : 'apps'}, sorted by rating.`;
  } else if (state.category !== 'all') {
    title = `${state.category} ${state.store === 'games' ? 'games' : 'apps'}`;
    subtitle = `${result.length} little ways to find your next favorite.`;
  } else if (state.store === 'games') {
    title = 'Find your next adventure';
    subtitle = 'A little challenge. A lot of fun.';
  } else if (state.store === 'kids') {
    title = 'Big discoveries for little minds';
    subtitle = 'A playful collection to learn, create, and explore.';
  } else if (state.device !== 'phone') {
    const deviceNames = {tablet:'your tablet',tv:'your TV',chromebook:'your Chromebook'};
    title = `Discover apps for ${deviceNames[state.device]}`;
    subtitle = `${result.length} apps for your kind of screen.`;
  } else if (state.showAll || state.view === 'categories') {
    title = 'Explore all apps';
    subtitle = state.view === 'categories' ? 'Find your favorite category above, then discover something new.' : `${result.length} great places to start.`;
  }
  $('#catalog-title').textContent = title;
  $('#catalog-subtitle').textContent = subtitle;
  $('#search-status').textContent = query ? `${result.length} ${result.length === 1 ? 'app' : 'apps'} found for ${query}.` : `${visible.length} apps displayed.`;
  $('#empty-message').textContent = query ? `We couldn't find “${query}” with these filters. Try another name or reset your filters.` : 'No apps match these filters. Try another category or device.';
  $('.primary-nav').querySelectorAll('[data-store]').forEach((button) => {
    const active = button.dataset.store === state.store;
    button.classList.toggle('active',active);
    if (active) button.setAttribute('aria-current','page'); else button.removeAttribute('aria-current');
  });
  $('.browse-tabs').querySelectorAll('[data-view]').forEach((button) => {
    const active = button.dataset.view === state.view;
    button.classList.toggle('active',active);
    if (active) button.setAttribute('aria-current','page'); else button.removeAttribute('aria-current');
  });
  $('.device-filters').querySelectorAll('[data-device]').forEach((button) => {
    const active = button.dataset.device === state.device;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
  renderCategories();
}

function resetFilters() {
  Object.assign(state,{query:'',category:'all',store:'apps',device:'phone',view:'for-you',showAll:false,collection:false});
  searchInput.value = '';
  render();
}

function openApp(id) {
  const app = apps.find((item) => item.id === id);
  if (!app) return;
  if (infoDialog.open) infoDialog.close();
  $('#dialog-content').innerHTML = `<div class="dialog-app-header"><div class="dialog-app-icon">${icon(app.id)}</div><div><h2 id="dialog-title">${escapeHTML(app.shortName || app.name)}</h2><p class="dialog-publisher">${escapeHTML(app.publisher)}</p><p class="dialog-category">${escapeHTML(app.category)}</p></div></div><div class="dialog-stats"><div><strong>${app.rating.toFixed(1)} ★</strong><span>Demo rating</span></div><div><strong>${app.downloads}</strong><span>Demo downloads</span></div><div><strong>${app.size}</strong><span>Demo app size</span></div></div><h3 class="dialog-section-title">About this app</h3><p class="dialog-description">${escapeHTML(app.description)}</p><button class="primary-button dialog-save" data-save="${app.id}" aria-pressed="${savedApps.has(app.id)}">${savedApps.has(app.id) ? 'Remove from my library' : 'Add to my library'}</button><p class="dialog-disclaimer">This is a demo. App information is illustrative. Saving adds the app to your local library.</p>`;
  if (!appDialog.open) appDialog.showModal();
}

function toggleSaved(id, button) {
  const app = apps.find((item) => item.id === id);
  if (!app) return;
  if (savedApps.has(id)) savedApps.delete(id); else savedApps.add(id);
  let persisted = true;
  try {localStorage.setItem('play-demo-library',JSON.stringify([...savedApps]));} catch {persisted = false;}
  button.textContent = savedApps.has(id) ? 'Remove from my library' : 'Add to my library';
  button.setAttribute('aria-pressed',String(savedApps.has(id)));
  const message = savedApps.has(id) ? `${app.shortName || app.name} added to your library${persisted ? '' : ' for this session'}.` : `${app.shortName || app.name} removed from your library.`;
  showToast(message);
}

function showToast(message) {
  clearTimeout(toastTimer);
  $('#toast').textContent = message;
  $('#toast').hidden = false;
  toastTimer = setTimeout(() => {$('#toast').hidden = true;},3200);
}

function openLibrary() {
  const library = apps.filter((app) => savedApps.has(app.id));
  $('#info-content').innerHTML = `<h2 id="info-title">My library</h2><p>${library.length ? `${library.length} ${library.length === 1 ? 'little discovery' : 'little discoveries'}, saved for later.` : 'Your favorite apps, all in one place.'}</p>${library.length ? `<div class="library-list">${library.map(essentialCard).join('')}</div>` : '<div class="library-empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M6 3h12v18l-6-4-6 4z"/></svg><p>No apps saved yet. Open an app and choose<br>“Add to my library” to get started.</p></div>'}`;
  infoDialog.showModal();
}

function closeOnBackdrop(event) {
  if (event.target !== event.currentTarget) return;
  const bounds = event.currentTarget.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
}

searchInput.addEventListener('input',() => {state.query = searchInput.value; render();});
$('#search-form').addEventListener('submit',(event) => {event.preventDefault();state.query = searchInput.value;render();});
$('#clear-search').addEventListener('click',() => {searchInput.value = '';state.query = '';render();searchInput.focus();});
$('#reset-filters').addEventListener('click',resetFilters);
$('#see-all').addEventListener('click',() => {state.showAll = true;render();$('#catalog-title').scrollIntoView({block:'start'});});
$('#collection-button').addEventListener('click',() => {state.collection = true;state.showAll = true;render();$('#catalog-title').scrollIntoView({block:'start'});});
$('#close-dialog').addEventListener('click',() => appDialog.close());
$('#close-info').addEventListener('click',() => infoDialog.close());
appDialog.addEventListener('click',closeOnBackdrop);
infoDialog.addEventListener('click',closeOnBackdrop);
$('#library-button').addEventListener('click',openLibrary);
$('#help-button').addEventListener('click',() => {
  $('#info-content').innerHTML = '<h2 id="info-title">A little discovery goes a long way.</h2><p>Explore this Play Store inspired demo. Search by app name, category, or interest, and filter by device to find something for you.</p><p>Press <kbd>/</kbd> to jump to search. Press <kbd>Esc</kbd> in the search field to clear it. Open any app to see more and save it to your local library.</p><p>The catalog contains sample data. Ratings, download counts, and sizes are illustrative; this demo does not install apps.</p>';
  infoDialog.showModal();
});

document.addEventListener('click',(event) => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.dataset.app) openApp(button.dataset.app);
  if (button.dataset.save) toggleSaved(button.dataset.save,button);
  if (button.dataset.store) {
    Object.assign(state,{store:button.dataset.store,category:'all',collection:false,showAll:false});
    render();
  }
  if (button.dataset.view) {
    Object.assign(state,{view:button.dataset.view,collection:false,showAll:false});
    render();
  }
  if (button.dataset.category) {
    Object.assign(state,{category:button.dataset.category,collection:false});
    render();
  }
  if (button.dataset.device) {
    state.device = button.dataset.device;
    render();
  }
});

document.addEventListener('keydown',(event) => {
  const typing = event.target instanceof HTMLElement && (event.target.matches('input,textarea,select') || event.target.isContentEditable);
  if (event.key === '/' && !typing && !event.ctrlKey && !event.metaKey && !event.altKey && !appDialog.open && !infoDialog.open) {
    event.preventDefault();searchInput.focus();
  }
  if (event.key === 'Escape' && event.target === searchInput && searchInput.value) {
    searchInput.value = '';state.query = '';render();
  }
});

document.querySelectorAll('[data-icon]').forEach((element) => {element.innerHTML = icon(element.dataset.icon);});
$('#essentials').innerHTML = ['youtube','telegram','netflix','pinterest','maps','todoist'].map((id) => essentialCard(apps.find((app) => app.id === id))).join('');
render();
