const http = require('http');
const Server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('arjun thakur');
});
Server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});