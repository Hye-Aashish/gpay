const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const playSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 44" class="play-svg">
  <path d="M3 2.7c-.8.8-1.3 2-1.3 3.6v31.4c0 1.6.5 2.8 1.3 3.6l.2.2L22 22 3.2 2.5z" fill="#4285f4"/>
  <path d="m28.3 28.5-6.3-6.5 6.3-6.5 7.9 4.5c2.4 1.3 2.4 3 0 4.3z" fill="#fbbc04"/>
  <path d="M28.3 28.5 22 22 3 41.3c1.1 1.1 2.8 1.2 4.7.1z" fill="#ea4335"/>
  <path d="M28.3 15.5 7.7 3.7C5.8 2.6 4.1 2.7 3 3.8L22 22z" fill="#34a853"/>
</svg>
`;

// 1. Foreground HTML (for adaptive icons, 432x432 master)
const foregroundHtml = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 432px; height: 432px; overflow: hidden; background: transparent; }
  .wrapper {
    width: 432px;
    height: 432px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .play-svg {
    width: 200px;
    height: 220px;
    filter: drop-shadow(0 8px 16px rgba(0,0,0,0.18));
  }
</style>
</head>
<body>
  <div class="wrapper">
    ${playSvg}
  </div>
</body>
</html>`;

// 2. Square / Squircle HTML (512x512 master)
const squareHtml = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 512px; height: 512px; overflow: hidden; background: transparent; }
  .wrapper {
    width: 512px;
    height: 512px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    width: 440px;
    height: 440px;
    background: #ffffff;
    border-radius: 96px;
    box-shadow: 0 16px 36px rgba(0,0,0,0.18), 0 4px 10px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .play-svg {
    width: 250px;
    height: 275px;
    filter: drop-shadow(0 6px 14px rgba(0,0,0,0.12));
  }
</style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      ${playSvg}
    </div>
  </div>
</body>
</html>`;

// 3. Round HTML (512x512 master)
const roundHtml = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 512px; height: 512px; overflow: hidden; background: transparent; }
  .wrapper {
    width: 512px;
    height: 512px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .circle {
    width: 440px;
    height: 440px;
    background: #ffffff;
    border-radius: 50%;
    box-shadow: 0 16px 36px rgba(0,0,0,0.18), 0 4px 10px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .play-svg {
    width: 240px;
    height: 264px;
    filter: drop-shadow(0 6px 14px rgba(0,0,0,0.12));
  }
</style>
</head>
<body>
  <div class="wrapper">
    <div class="circle">
      ${playSvg}
    </div>
  </div>
</body>
</html>`;

// 4. Splash HTML (master)
const splashHtml = `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1024px; height: 1024px; overflow: hidden; background: #ffffff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
  .wrapper {
    width: 1024px;
    height: 1024px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .play-svg {
    width: 180px;
    height: 198px;
    filter: drop-shadow(0 8px 18px rgba(0,0,0,0.14));
    margin-bottom: 24px;
  }
  .brand-title {
    font-size: 42px;
    font-weight: 600;
    color: #1f1f1f;
    letter-spacing: -0.5px;
  }
</style>
</head>
<body>
  <div class="wrapper">
    ${playSvg}
    <div class="brand-title">Google Play</div>
  </div>
</body>
</html>`;

const tempDir = path.join(__dirname, 'temp_icons');
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

fs.writeFileSync(path.join(tempDir, 'fg.html'), foregroundHtml);
fs.writeFileSync(path.join(tempDir, 'sq.html'), squareHtml);
fs.writeFileSync(path.join(tempDir, 'rd.html'), roundHtml);
fs.writeFileSync(path.join(tempDir, 'sp.html'), splashHtml);

console.log('Rendering master images with Edge...');
execSync(`"${edgePath}" --headless --disable-gpu --screenshot="${path.join(tempDir, 'fg_master.png')}" --window-size=432,432 --default-background-color=00000000 "file://${path.join(tempDir, 'fg.html').replace(/\\/g, '/')}"`);
execSync(`"${edgePath}" --headless --disable-gpu --screenshot="${path.join(tempDir, 'sq_master.png')}" --window-size=512,512 --default-background-color=00000000 "file://${path.join(tempDir, 'sq.html').replace(/\\/g, '/')}"`);
execSync(`"${edgePath}" --headless --disable-gpu --screenshot="${path.join(tempDir, 'rd_master.png')}" --window-size=512,512 --default-background-color=00000000 "file://${path.join(tempDir, 'rd.html').replace(/\\/g, '/')}"`);
execSync(`"${edgePath}" --headless --disable-gpu --screenshot="${path.join(tempDir, 'sp_master.png')}" --window-size=1024,1024 --default-background-color=ffffffff "file://${path.join(tempDir, 'sp.html').replace(/\\/g, '/')}"`);

console.log('Master images created successfully!');
