#!/usr/bin/env node

// Starts both servers and prints the slides URL.
// Usage: node start.js

import { spawn }             from 'child_process';
import http                  from 'http';
import { readFile }          from 'fs/promises';
import { join, extname, resolve } from 'path';
import { fileURLToPath }     from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const SLIDES_PORT = 8080;
const MODEL_PORT  = 5292;

const slidesDir = __dirname;
const modelDir  = resolve(__dirname, '../../maturity-model/src');

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
  console.log('');
});

// ── Model dev server ───────────────────────────────────────────────────────

// On Windows npm is npm.cmd; on POSIX it is npm.
const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

// Pass --port via VITE_PORT env var as a fallback, and also via CLI args.
// Some Vite versions need the flag after a second '--'; others accept it directly.
const model = spawn(
  npm, ['run', 'dev', '--', '--port', String(MODEL_PORT), '--strictPort'],
  { cwd: modelDir, shell: false, stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, VITE_PORT: String(MODEL_PORT) } }
);

let modelReady = false;
model.stdout.on('data', (chunk) => {
  const txt = chunk.toString();
  if (!modelReady && /ready|Local|localhost/i.test(txt)) {
    modelReady = true;
    console.log('  Model ready  http://localhost:' + MODEL_PORT);
    console.log('  Ctrl+C to stop both.');
    console.log('');
  }
});

// Show stderr so startup errors are visible.
model.stderr.on('data', (chunk) => {
  process.stderr.write('  [model] ' + chunk.toString().trimEnd() + '\n');
});

model.on('exit', (code) => {
  if (code !== 0 && code !== null) {
    console.error('\n  Model server exited (code ' + code + ')');
  }
});

process.on('SIGINT', () => {
  model.kill('SIGTERM');
  process.exit(0);
});
