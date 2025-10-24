/**
 * Simple HTTP Server for BlockTracker
 *
 * This server serves static files from the src/ directory
 * No frameworks needed - just Node.js built-in modules!
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory (ESM equivalent of __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const HOST = 'localhost';

// MIME types for different file extensions
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

/**
 * Create HTTP server
 */
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Parse requested path
  let filePath = req.url === '/' ? '/index.html' : req.url;

  // Security: prevent directory traversal attacks
  if (filePath.includes('..')) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  // Determine file location
  // Serve from src/ directory by default, or config/ for API keys
  let fullPath;
  if (filePath.startsWith('/config/')) {
    fullPath = path.join(__dirname, filePath);
  } else {
    fullPath = path.join(__dirname, 'src', filePath);
  }

  // Get file extension
  const ext = path.extname(fullPath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  // Read and serve the file
  fs.readFile(fullPath, (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - File Not Found</h1>');
      } else {
        // Server error
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 - Internal Server Error</h1>');
        console.error('Server error:', err);
      }
    } else {
      // Success - serve the file
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

/**
 * Start the server
 */
server.listen(PORT, HOST, () => {
  console.log('');
  console.log('╔════════════════════════════════════════════╗');
  console.log('║   🔍 BlockTracker Web3 OSINT Tool         ║');
  console.log('╚════════════════════════════════════════════╝');
  console.log('');
  console.log(`✅ Server running at: http://${HOST}:${PORT}`);
  console.log('');
  console.log('📝 Next steps:');
  console.log('   1. Open http://localhost:3000 in your browser');
  console.log('   2. Configure API keys in config/api-keys.js');
  console.log('   3. Start analyzing blockchain data!');
  console.log('');
  console.log('Press Ctrl+C to stop the server');
  console.log('');
});

/**
 * Handle server errors
 */
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use.`);
    console.error('   Try closing other applications or use a different port.');
  } else {
    console.error('❌ Server error:', err);
  }
  process.exit(1);
});
