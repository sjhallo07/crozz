import http from 'http';
import fs from 'fs';
import path from 'path';
import { URL } from 'url';

const websiteDir = path.resolve(__dirname, '../../website');

const mimeTypes: Record<string, string> = {
  '.html': 'text/html',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.json': 'application/json',
  '.txt':  'text/plain'
};

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url || '/', `http://${req.headers.host}`);
  let filePath = path.join(websiteDir, decodeURIComponent(reqUrl.pathname));

  // Si es raíz, sirve index.html
  if (reqUrl.pathname === '/') {
    filePath = path.join(websiteDir, 'index.html');
  }

  // Previene traversal
  if (!filePath.startsWith(websiteDir)) {
    res.writeHead(403, {'Content-Type': 'text/plain'});
    res.end('403 Forbidden\n');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Not Found\n');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const mimeType = mimeTypes[ext] || 'application/octet-stream';

    res.writeHead(200, {'Content-Type': mimeType});
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});