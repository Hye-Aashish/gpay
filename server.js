// A dependency-free local development server.
'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const mimeTypes = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.json':'application/json; charset=utf-8'};
const port = Number(process.env.PORT) || 3000;

const server = http.createServer((request,response) => {
  if (!['GET','HEAD'].includes(request.method)) {
    response.writeHead(405,{'Allow':'GET, HEAD'});response.end('Method not allowed');return;
  }
  let pathname;
  try {pathname = decodeURIComponent(new URL(request.url,'http://localhost').pathname);} catch {
    response.writeHead(400);response.end('Bad request');return;
  }
  const file = path.resolve(root,`.${pathname === '/' ? '/index.html' : pathname}`);
  // Only expose the public files, never repository metadata or local source tooling.
  const relative = path.relative(root,file).replace(/\\/g,'/');
  const allowed = ['index.html','styles.css','mobile.css','app.js'].includes(relative) || relative.startsWith('assets/');
  if (relative.startsWith('..') || path.isAbsolute(relative) || !allowed) {
    response.writeHead(404);response.end('Not found');return;
  }
  fs.readFile(file,(error,content) => {
    if (error) {response.writeHead(404);response.end('Not found');return;}
    response.writeHead(200,{'Content-Type':mimeTypes[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    response.end(request.method === 'HEAD' ? undefined : content);
  });
});

server.on('error',(error) => {console.error(`Could not start the preview: ${error.message}`);process.exitCode = 1;});
server.listen(port,'127.0.0.1',() => console.log(`Play Store demo: http://localhost:${port}`));
