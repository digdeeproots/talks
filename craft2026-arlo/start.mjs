#!/usr/bin/env node

// Starts the slides server.
// Usage: node start.mjs

import http                  from 'http';
import { readFile }          from 'fs/promises';
import { join, extname }     from 'path';
import { fileURLToPath }     from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const SLIDES_PORT = 8080;
const slidesDir = __dirname;

const MIME = {
  '.html':  'text/html; charset=utf-8',
  '.css':   'text/css',
  '.js':    'application/javascript',
  '.json':  'application/json',
  '.jpg':   'image/jpeg',
  '.jpeg':  'image/jpeg',
  '.png':   'image/png',
  '.gif':   'image/gif',
  '.svg':   'image/svg+xml',
  '.ico':   'image/x-icon',
  '.woff':  'font/woff',
  '.woff2': 'font/woff2',
};

http.createServer(async (req, res) => {
  const urlPath = req.url.split('?')[0];
  const target  = urlPath === '/' ? '/slides.html' : urlPath;
  const file    = join(slidesDir, target);

  try {
    const data = await readFile(file);
    const ext  = extname(file).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found: ' + target);
  }
}).listen(SLIDES_PORT, '127.0.0.1', () => {
  console.log('');
  console.log('  http://localhost:' + SLIDES_PORT + '/slides.html');
  console.log('  Ctrl+C to stop.');
  console.log('');
});

process.on('SIGINT', () => process.exit(0));
