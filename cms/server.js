const http = require('http');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const DATA_PATH = path.join(__dirname, 'content.json');
const BACKUP_DIR = process.env.BACKUP_DIR || path.join(__dirname, 'backups');
const MAX_BACKUPS = parseInt(process.env.MAX_BACKUPS || '20', 10);
const PORT = process.env.PORT || 4000;
const JWT_SECRET = 'super-secret-key-change-this'; // In production use env var

// Hardcoded admin user
const ADMIN_USER = {
  username: 'admin',
  passwordHash: '$2a$10$vs2thajtmN9jkl7NCx5gL.DPn.o3MoPaCmwrllFlOOUyBVtsX4KCu' // admin123
};

function isObj(v) {
  return v && typeof v === 'object' && !Array.isArray(v);
}

function deepMerge(prev, patch) {
  if (Array.isArray(prev) && Array.isArray(patch)) {
    const result = prev.slice();
    for (let i = 0; i < patch.length; i++) {
      const pv = result[i];
      const ph = patch[i];
      if (ph === undefined) continue;
      if (Array.isArray(pv) && Array.isArray(ph)) {
        result[i] = deepMerge(pv, ph);
      } else if (isObj(pv) && isObj(ph)) {
        result[i] = deepMerge(pv, ph);
      } else {
        result[i] = ph;
      }
    }
    return result;
  }
  if (isObj(prev) && isObj(patch)) {
    const result = { ...prev };
    for (const k of Object.keys(patch)) {
      const pv = prev[k];
      const ph = patch[k];
      if (Array.isArray(pv) && Array.isArray(ph)) {
        result[k] = deepMerge(pv, ph);
      } else if (isObj(pv) && isObj(ph)) {
        result[k] = deepMerge(pv, ph);
      } else {
        result[k] = ph;
      }
    }
    return result;
  }
  return patch !== undefined ? patch : prev;
}

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
    console.log('Backend benar-benar menulis file? YA');
    console.log(`Saved content to ${DATA_PATH}`);
    try {
      if (!fs.existsSync(BACKUP_DIR)) {
        fs.mkdirSync(BACKUP_DIR, { recursive: true });
      }
      const ts = new Date();
      const stamp = [
        ts.getFullYear(),
        String(ts.getMonth() + 1).padStart(2, '0'),
        String(ts.getDate()).padStart(2, '0'),
        String(ts.getHours()).padStart(2, '0'),
        String(ts.getMinutes()).padStart(2, '0'),
        String(ts.getSeconds()).padStart(2, '0'),
      ].join('');
      const backupPath = path.join(BACKUP_DIR, `content-${stamp}.json`);
      fs.writeFileSync(backupPath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`Backup written: ${backupPath}`);
      const files = fs.readdirSync(BACKUP_DIR)
        .filter(f => f.startsWith('content-') && f.endsWith('.json'))
        .map(f => ({ name: f, full: path.join(BACKUP_DIR, f), time: fs.statSync(path.join(BACKUP_DIR, f)).mtimeMs }))
        .sort((a, b) => b.time - a.time);
      if (files.length > MAX_BACKUPS) {
        files.slice(MAX_BACKUPS).forEach(f => {
          try {
            fs.unlinkSync(f.full);
            console.log(`Old backup removed: ${f.full}`);
          } catch (err) {
            console.warn(`Failed to remove old backup ${f.full}:`, err.message);
          }
        });
      }
    } catch (err) {
      console.warn('Backup failed:', err.message);
    }
    return true;
  } catch (err) {
    console.error('Failed to write to content.json:', err);
    console.log('Backend benar-benar menulis file? TIDAK (Error)');
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
  if (url === '/api/login' && method === 'POST') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        const { username, password } = JSON.parse(body || '{}');
        if (!username || !password) {
             return sendJSON(res, 400, { ok: false, error: 'Username and password required' });
        }
        if (username === ADMIN_USER.username && bcrypt.compareSync(password, ADMIN_USER.passwordHash)) {
          const token = jwt.sign({ username, role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
          return sendJSON(res, 200, { ok: true, token, role: 'admin' });
        } else {
          return sendJSON(res, 401, { ok: false, error: 'Username atau password salah' });
        }
      } catch (err) {
        console.error('Login error:', err);
        return sendJSON(res, 400, { ok: false, error: 'Invalid request body' });
      }
    });
    return;
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
        data[page] = deepMerge(prev, json);
        const summaryKeys = Object.keys(json);
        console.log(`[SAVE] ${method} ${url} page=${page} keys=${summaryKeys.length > 0 ? summaryKeys.join(',') : '(none)'}`);
        const success = writeJSON(data);
        if (success) {
          return sendJSON(res, 200, { ok: true, page, content: data[page] });
        } else {
          return sendJSON(res, 500, { ok: false, error: 'write_failed' });
        }
      } catch {
        return sendJSON(res, 400, { ok: false, error: 'invalid_json' });
      }
    });
    return;
  }
  if (url === '/api/content' && method === 'POST') {
    // Auth check
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return sendJSON(res, 401, { ok: false, error: 'Unauthorized' });
    }
    try {
      jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return sendJSON(res, 403, { ok: false, error: 'Forbidden' });
    }

    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        const json = JSON.parse(body || '{}');
        const data = readJSON();
        const next = deepMerge(data, json);
        const success = writeJSON(next);
        if (success) {
          return sendJSON(res, 200, { ok: true });
        } else {
          return sendJSON(res, 500, { ok: false, error: 'write_failed' });
        }
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
