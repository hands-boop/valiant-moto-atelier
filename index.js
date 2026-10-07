const fs = require('fs');
const path = require('path');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.json': 'application/json'
};

module.exports = (req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
  
  const candidates = [
    path.join(__dirname, 'public', reqPath),
    path.join(__dirname, reqPath)
  ];
  
  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      const ext = path.extname(candidate).toLowerCase();
      res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      return fs.createReadStream(candidate).pipe(res);
    }
  }

  // Fallback to index.html
  const indexPath = path.join(__dirname, 'index.html');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  fs.createReadStream(indexPath).pipe(res);
};

// Also support running directly locally
if (require.main === module) {
  const http = require('http');
  const server = http.createServer(module.exports);
  server.listen(4173, () => console.log('Local server running on port 4173'));
}
