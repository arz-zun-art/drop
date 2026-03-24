const http = require('http');
const Server = http.create Server((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('arjun thakur');
});
Servererver.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});