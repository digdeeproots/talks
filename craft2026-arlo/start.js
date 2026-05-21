#!/usr/bin/env node
'use strict';

// Starts both servers and prints the slides URL.
// Usage: node start.js

const { spawn } = require('child_process');
const http      = require('http');
const fs        = require('fs');
const path      = require('path');

const SLIDES_PORT = 8080;
const MODEL_PORT  = 5292;

const slidesDir = __dirname;
const modelDir  = path.resolve(__dirname, '../../maturity-model/src');

// ── Slides static file server ──────────────────────────────────────────────

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

http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  const target  = urlPath === '/' ? '/slides.html' : urlPath;
  const file    = path.join(slidesDir, target);

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found: ' + target);
      return;
    }
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(SLIDES_PORT, '127.0.0.1', () => {
  console.log('');
  console.log('  http://localhost:' + SLIDES_PORT + '/slides.html');
  console.log('');
});

// ── Model dev server ───────────────────────────────────────────────────────

const model = spawn(
  'npm', ['run', 'dev', '--', '--port', String(MODEL_PORT)],
  { cwd: modelDir, shell: true, stdio: ['ignore', 'pipe', 'pipe'] }
);

let modelReady = false;
model.stdout.on('data', (chunk) => {
  if (modelReady) return;
  if (/ready|Local|localhost/i.test(chunk.toString())) {
    modelReady = true;
    console.log('  Model ready on http://localhost:' + MODEL_PORT);
    console.log('  Ctrl+C to stop both.');
    console.log('');
  }
});
model.stderr.on('data', () => {});

model.on('exit', (code) => {
  if (code !== 0 && code !== null) {
    console.error('\n  Model server exited (code ' + code + ')');
  }
});

process.on('SIGINT', () => {
  model.kill('SIGTERM');
  process.exit(0);
});
