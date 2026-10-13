const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const icons = {
  myntra: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="22" fill="#ffffff"/>
    <path d="M22 68 V38 L36 56 L50 38 L64 56 L78 38 V68" fill="none" stroke="url(#mg)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="50" y="88" font-family="sans-serif" font-weight="800" font-size="11" text-anchor="middle" fill="#282c3f" letter-spacing="0.5">myntra</text>
    <defs>
      <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ff3f6c"/>
        <stop offset="50%" stop-color="#f26a10"/>
        <stop offset="100%" stop-color="#f5a623"/>
      </linearGradient>
    </defs>
  </svg>`,

  kotak: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="22" fill="#d90429"/>
    <path d="M35 50 C25 40 25 28 35 28 C45 28 55 45 65 50 C75 55 80 40 70 32" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
    <path d="M65 50 C75 60 75 72 65 72 C55 72 45 55 35 50 C25 45 20 60 30 68" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
    <text x="50" y="88" font-family="sans-serif" font-weight="700" font-size="10" text-anchor="middle" fill="#ffffff">kotak 811</text>
  </svg>`,

  razorpay: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="22" fill="#0c2340"/>
    <path d="M42 22 L68 22 L45 52 L62 52 L32 78 L42 48 L28 48 Z" fill="#3395ff"/>
  </svg>`,

  subway: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="22" fill="#0377a8"/>
    <circle cx="50" cy="46" r="28" fill="#ffcc00"/>
    <path d="M26 38 C32 18 68 18 74 38 Z" fill="#f23a29"/>
    <rect x="44" y="32" width="12" height="10" rx="3" fill="#ffffff"/>
    <circle cx="38" cy="48" r="5" fill="#2b2d42"/>
    <circle cx="62" cy="48" r="5" fill="#2b2d42"/>
    <path d="M40 60 Q50 68 60 60" stroke="#2b2d42" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>`,

  golfbattle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="22" fill="#1b998b"/>
    <path d="M0 60 Q50 40 100 70 L100 100 L0 100 Z" fill="#2e7d32"/>
    <line x1="30" y1="25" x2="30" y2="65" stroke="#ffffff" stroke-width="4"/>
    <polygon points="30 25 55 35 30 45" fill="#e63946"/>
    <circle cx="65" cy="65" r="14" fill="#ffffff"/>
    <circle cx="63" cy="63" r="2" fill="#cccccc"/>
    <circle cx="67" cy="63" r="2" fill="#cccccc"/>
    <circle cx="65" cy="67" r="2" fill="#cccccc"/>
  </svg>`,

  hillclimb: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="22" fill="#48cae4"/>
    <path d="M0 70 Q40 40 100 65 L100 100 L0 100 Z" fill="#588157"/>
    <g transform="translate(32, 40) rotate(-15)">
      <rect x="0" y="10" width="38" height="16" rx="5" fill="#e63946"/>
      <rect x="8" y="0" width="20" height="12" rx="3" fill="#3a86ff"/>
      <circle cx="8" cy="26" r="8" fill="#1b263b"/>
      <circle cx="30" cy="26" r="8" fill="#1b263b"/>
    </g>
  </svg>`,

  fruitmerge: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="22" fill="#38b000"/>
    <circle cx="38" cy="45" r="22" fill="#ff477e"/>
    <circle cx="62" cy="58" r="26" fill="#ffaa00"/>
    <circle cx="33" cy="40" r="3" fill="#222"/>
    <circle cx="43" cy="40" r="3" fill="#222"/>
    <circle cx="56" cy="55" r="3.5" fill="#222"/>
    <circle cx="68" cy="55" r="3.5" fill="#222"/>
    <path d="M58 65 Q62 70 66 65" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  </svg>`,

  snakeio: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="22" fill="#001219"/>
    <path d="M20 75 Q35 25 55 50 T80 35" fill="none" stroke="#ffb703" stroke-width="16" stroke-linecap="round"/>
    <circle cx="80" cy="35" r="14" fill="#fb8500"/>
    <polygon points="75 16 85 16 80 23" fill="#ffd166"/>
    <circle cx="76" cy="31" r="3" fill="#fff"/>
    <circle cx="84" cy="31" r="3" fill="#fff"/>
    <circle cx="77" cy="31" r="1.5" fill="#000"/>
    <circle cx="85" cy="31" r="1.5" fill="#000"/>
  </svg>`,

  hiddenspots: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="22" fill="#f4a261"/>
    <rect x="18" y="22" width="64" height="56" rx="8" fill="#ffffff"/>
    <circle cx="45" cy="45" r="16" fill="none" stroke="#264653" stroke-width="6"/>
    <line x1="57" y1="57" x2="75" y2="75" stroke="#e76f51" stroke-width="8" stroke-linecap="round"/>
    <circle cx="45" cy="45" r="6" fill="#e9c46a"/>
  </svg>`
};

for (const [name, svg] of Object.entries(icons)) {
  fs.writeFileSync(path.join(assetsDir, `${name}.png`), svg, 'utf8');
  console.log(`Saved ${name}.png`);
}

console.log('All icons generated successfully!');
