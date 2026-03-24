// Load Express
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Root route (GET)
app.get('/', (req, res) => {
    res.send('Hello! This is your HTTP server.');
});

// About route (GET)
app.get('/about', (req, res) => {
    res.send('About page of your server.');
}); {
    function handleRequest(req, res) { //yo function le server ma aayeko request lai handle garcha, yo function le client lai response pathaune kam garcha
    }
    const server = https.createServer(app); //yo line le https server create garcha, handleRequest function lai request handler ko rup ma pass garcha

    myserver.listen(3000, () => { //yo line le server lai port 3000 ma listen garcha, jab server successfully start huncha tab console ma message print garcha
                console.log('Server running on https://localhost:3000');
            }