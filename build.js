const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const outDir = path.join(rootDir, 'www');

// Clean & recreate www directory
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}
fs.mkdirSync(outDir, { recursive: true });

// Files to copy
const filesToCopy = ['index.html', 'styles.css', 'mobile.css'];
for (const file of filesToCopy) {
  const src = path.join(rootDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(outDir, file));
    console.log(`Copied ${file} -> www/${file}`);
  }
}

// Copy assets directory recursively
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const assetsSrc = path.join(rootDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  copyDir(assetsSrc, path.join(outDir, 'assets'));
  console.log('Copied assets/ -> www/assets/');
}

console.log('Build complete! Web assets ready in www/');
