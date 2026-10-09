const fs = require('fs');
const path = require('path');
const http = require('http');

function getHtml() {
  try {
    return fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
  } catch {
    try {
      return fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
    } catch {
      return '';
    }
  }
}

let htmlContent = getHtml();

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
  if (pathname === '/' || pathname === '' || pathname === '/index.html') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    });
    return res.end(getHtml());
  }

  // Prevent path traversal
  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  const locations = [
    path.join(__dirname, safePath),
    path.join(process.cwd(), safePath)
  ];

  for (const filePath of locations) {
    try {
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, {
          'Content-Type': mimeTypes[ext] || 'application/octet-stream',
          'Cache-Control': 'public, max-age=3600'
        });
        return fs.createReadStream(filePath).pipe(res);
      }
    } catch {}
  }

  // Default fallback to index.html
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'public, max-age=3600'
  });
  res.end(htmlContent || getHtml());
};

module.exports = handler;

// Local development
if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  const server = http.createServer(handler);
  server.listen(port, '127.0.0.1', () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}
