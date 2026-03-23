const http = require('http');
const server = http.create server((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('arjun thakur');
});
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});