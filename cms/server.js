const http = require('http');
const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, 'content.json');
const PORT = process.env.PORT || 4000;

function readJSON() {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf8');
    const data = JSON.parse(raw);
    if (typeof data !== 'object' || data === null) return {};
    return data;
  } catch {
    return {};
  }
}

function writeJSON(data) {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch {
    return false;
  }
}

function sendJSON(res, status, body) {
  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
  const { method, url } = req;
  if (method === 'OPTIONS') {
    return sendJSON(res, 200, {});
  }
  if (url === '/api/health') {
    return sendJSON(res, 200, { ok: true });
  }
  if (url === '/api/content' && method === 'GET') {
    const data = readJSON();
    return sendJSON(res, 200, data);
  }
  if (url.startsWith('/api/content/') && method === 'GET') {
    const page = decodeURIComponent(url.split('/').pop() || '');
    const data = readJSON();
    return sendJSON(res, 200, data[page] || {});
  }
  if (url.startsWith('/api/content/') && (method === 'PUT' || method === 'PATCH')) {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        const json = JSON.parse(body || '{}');
        const page = decodeURIComponent(url.split('/').pop() || '');
        const data = readJSON();
        const prev = data[page] || {};
        data[page] = { ...prev, ...json };
        writeJSON(data);
        return sendJSON(res, 200, { ok: true, page, content: data[page] });
      } catch {
        return sendJSON(res, 400, { ok: false, error: 'invalid_json' });
      }
    });
    return;
  }
  if (url === '/api/content' && method === 'POST') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        const json = JSON.parse(body || '{}');
        const data = readJSON();
        const next = { ...data, ...json };
        writeJSON(next);
        return sendJSON(res, 200, { ok: true });
      } catch {
        return sendJSON(res, 400, { ok: false, error: 'invalid_json' });
      }
    });
    return;
  }
  sendJSON(res, 404, { ok: false, error: 'not_found' });
});

server.listen(PORT, () => {
  console.log(`Content API running on http://localhost:${PORT}`);
});

