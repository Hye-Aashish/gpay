const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');
const files = ['kotak', 'razorpay', 'subway', 'golfbattle', 'hillclimb', 'fruitmerge', 'snakeio', 'hiddenspots'];

for (const f of files) {
  const p = path.join(assetsDir, f + '.png');
  let content = fs.readFileSync(p, 'utf8');
  if (!content.includes('width=')) {
    content = content.replace('<svg ', '<svg width="100" height="100" ');
    fs.writeFileSync(p, content, 'utf8');
    console.log('Updated width/height on:', f);
  }
}

console.log('SVG dimensions updated successfully!');
