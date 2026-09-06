#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const buildDir = process.argv[2] || '/home/user/.autonomyai/storybook-builds';
const port = parseInt(process.argv[3]) || 5556;

const server = http.createServer((req, res) => {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Parse URL
  const parsedUrl = url.parse(req.url, true);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Handle root and ensure it serves v1 by default
  if (pathname === '/' || pathname === '') {
    pathname = '/v1/index.html';
  }

  // Resolve file path
  let filePath = path.join(buildDir, pathname);
  const normalizedPath = path.normalize(filePath);
  const normalizedBuildDir = path.normalize(buildDir);

  // Security check - prevent directory traversal
  if (!normalizedPath.startsWith(normalizedBuildDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  // Try to serve the file
  fs.stat(filePath, (err, stats) => {
    if (err) {
      // If not found, try index.html for that directory
      const indexPath = path.join(filePath, 'index.html');
      fs.stat(indexPath, (indexErr, indexStats) => {
        if (indexErr) {
          res.writeHead(404);
          res.end('Not Found');
          return;
        }
        serveFile(indexPath, res);
      });
      return;
    }

    if (stats.isDirectory()) {
      const indexPath = path.join(filePath, 'index.html');
      fs.stat(indexPath, (indexErr) => {
        if (indexErr) {
          res.writeHead(403);
          res.end('Forbidden');
          return;
        }
        serveFile(indexPath, res);
      });
    } else {
      serveFile(filePath, res);
    }
  });
});

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  let contentType = 'text/html; charset=utf-8';

  const mimeTypes = {
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml; charset=utf-8',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.map': 'application/json; charset=utf-8',
  };

  if (mimeTypes[ext]) {
    contentType = mimeTypes[ext];
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end(`Error reading file: ${err.message}`);
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    });
    res.end(data);
  });
}

server.listen(port, '0.0.0.0', () => {
  console.log(`Storybook server is running at http://localhost:${port}`);
  console.log(`Serving from: ${buildDir}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Trying a different approach...`);
    process.exit(1);
  }
  throw err;
});
