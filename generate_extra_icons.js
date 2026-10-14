const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const assetsDir = path.join(__dirname, 'assets');

const icons = {
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stop-color="#feda75"/>
        <stop offset="25%" stop-color="#fa7e1e"/>
        <stop offset="50%" stop-color="#d62976"/>
        <stop offset="75%" stop-color="#962fbf"/>
        <stop offset="100%" stop-color="#4f5bd5"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="24" fill="url(#ig)"/>
    <rect x="22" y="22" width="56" height="56" rx="16" fill="none" stroke="#ffffff" stroke-width="6"/>
    <circle cx="50" cy="50" r="14" fill="none" stroke="#ffffff" stroke-width="6"/>
    <circle cx="67" cy="33" r="4" fill="#ffffff"/>
  </svg>`,

  youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="24" fill="#ffffff"/>
    <rect x="14" y="26" width="72" height="48" rx="15" fill="#ff0000"/>
    <polygon points="43,38 65,50 43,62" fill="#ffffff"/>
  </svg>`,

  netflix: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="24" fill="#000000"/>
    <path d="M26 20 h14 v60 h-14 z" fill="#b81d24"/>
    <path d="M60 20 h14 v60 h-14 z" fill="#b81d24"/>
    <path d="M26 20 h14 l34 60 h-14 z" fill="#e50914"/>
  </svg>`,

  telegram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="24" fill="#2aabee"/>
    <path d="M20 48 L76 26 C80 24 83 27 82 31 L71 78 C70 82 66 83 62 80 L48 69 L40 77 C39 78 38 79 36 79 L38 62 L70 33 C71 32 70 31 68 32 L30 56 L20 52 C16 51 16 47 20 48 Z" fill="#ffffff"/>
  </svg>`,

  candy: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="bgc" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ff758c"/>
        <stop offset="100%" stop-color="#ff7eb3"/>
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="24" fill="url(#bgc)"/>
    <circle cx="50" cy="50" r="30" fill="#f44336"/>
    <path d="M35 35 Q50 20 65 35 Q80 50 65 65 Q50 80 35 65 Q20 50 35 35 Z" fill="#ffeb3b" opacity="0.9"/>
    <circle cx="50" cy="50" r="16" fill="#03a9f4"/>
    <ellipse cx="44" cy="42" rx="4" ry="7" fill="#ffffff" opacity="0.8" transform="rotate(-30 44 42)"/>
  </svg>`,

  chess: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="24" fill="#769656"/>
    <path d="M36 24 C36 20 40 18 44 18 C46 18 48 20 50 20 C54 20 58 17 62 19 C66 21 68 25 68 30 C68 37 62 44 65 52 C67 58 72 62 72 68 C72 72 68 74 64 74 L36 74 C32 74 28 72 28 68 C28 62 33 58 35 52 C38 44 32 37 32 30 C32 25 34 24 36 24 Z" fill="#eeeed2"/>
    <rect x="28" y="76" width="44" height="6" rx="3" fill="#eeeed2"/>
  </svg>`,

  duolingo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="24" fill="#58cc02"/>
    <circle cx="40" cy="45" r="18" fill="#ffffff"/>
    <circle cx="60" cy="45" r="18" fill="#ffffff"/>
    <circle cx="42" cy="45" r="9" fill="#4b4b4b"/>
    <circle cx="58" cy="45" r="9" fill="#4b4b4b"/>
    <circle cx="44" cy="42" r="3" fill="#ffffff"/>
    <circle cx="60" cy="42" r="3" fill="#ffffff"/>
    <polygon points="50,52 42,62 58,62" fill="#ff9600"/>
  </svg>`
};

const tempHtml = path.join(__dirname, 'temp_icons', 'render_extra.html');

for (const [name, svg] of Object.entries(icons)) {
  const html = `<!DOCTYPE html><html><body style="margin:0;padding:0;background:transparent;width:256px;height:256px;display:flex;align-items:center;justify-content:center;">${svg.replace('viewBox="0 0 100 100"', 'viewBox="0 0 100 100" width="256" height="256"')}</body></html>`;
  fs.writeFileSync(tempHtml, html, 'utf8');
  const outPng = path.join(assetsDir, `${name}_real.png`);
  execSync(`"${edgePath}" --headless --disable-gpu --screenshot="${outPng}" --window-size=256,256 --default-background-color=00000000 "file://${tempHtml.replace(/\\/g, '/')}"`);
  console.log(`Rendered ${name}_real.png`);
}

console.log('All extra app icons rendered!');
