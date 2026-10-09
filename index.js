const fs = require('fs');
const path = require('path');
const http = require('http');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon'
};

const handler = (req, res) => {
  let pathname = (req.url || '/').split('?')[0];
  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  // Prevent path traversal
  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(__dirname, safePath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'Cache-Control': 'public, max-age=3600'
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // Fallback to index.html
    const indexPath = path.join(__dirname, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(indexPath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  }
};

module.exports = handler;

// If executed directly (e.g., node index.js or npm start)
if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  const server = http.createServer(handler);
  server.listen(port, '127.0.0.1', () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
