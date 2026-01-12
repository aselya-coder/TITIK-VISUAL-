
const http = require('http');

function request(method, path, data) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 4000,
      path: '/api/content' + path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const req = http.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          resolve(body);
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    if (data) {
      req.write(JSON.stringify(data));
    }
    req.end();
  });
}

async function run() {
  try {
    console.log('Checking CMS Health...');
    const health = await request('GET', '/../health'); // Hacky path because base is /api/content
    // Actually the server.js defines /api/health separately
    // Let's just try to read content
    
    console.log('Reading Content...');
    const content = await request('GET', '');
    console.log('Current Content Keys:', Object.keys(content));

    console.log('Writing Test Data...');
    const testData = { "test-page": { "test-field": "test-value-" + Date.now() } };
    const writeRes = await request('POST', '', testData);
    console.log('Write Result:', writeRes);

    console.log('Reading Content Again...');
    const content2 = await request('GET', '');
    console.log('Test Page Content:', content2['test-page']);

    if (content2['test-page'] && content2['test-page']['test-field'] === testData['test-page']['test-field']) {
      console.log('SUCCESS: Data persistence verified.');
    } else {
      console.error('FAILURE: Data was not persisted.');
    }

  } catch (e) {
    console.error('Error:', e);
  }
}

run();
