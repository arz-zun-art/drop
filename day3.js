const http = require('http');

const server = http.createServer((req, res) => {

    // Route: Home
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('Welcome to Home Page');
        res.end();
    }

    // Route: About
    else if (req.url === '/about' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('About Page');
        res.end();
    }

    // Route: POST /data
    else if (req.url === '/data' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString(); // collect data
        });

        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({
                message: 'Data received',
                data: body
            }));
            res.end();
        });
    }

    // Route: Not Found
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});