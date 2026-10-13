const fs = require('fs');
const path = require('path');

const list = ['kotak', 'razorpay', 'subway', 'golfbattle', 'hillclimb', 'fruitmerge', 'snakeio', 'hiddenspots'];

for (const name of list) {
  const p = path.join(__dirname, 'assets', `${name}.png`);
  let content = fs.readFileSync(p, 'utf8');
  if (!content.includes('width="100%"')) {
    content = content.replace('<svg ', '<svg width="100%" height="100%" ');
    fs.writeFileSync(p, content, 'utf8');
  }
}

console.log('Processed all SVGs in assets');
