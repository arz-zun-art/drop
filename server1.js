const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Root route (GET)
app.get('/', (req, res) => {
    res.send('Hello! This is your HTTP server.');
});

// Another GET route
app.get('/about', (req, res) => {
    res.send('About page of your server.');
});

// POST route
app.post('/data', (req, res) => {
    console.log(req.body); // logs incoming JSON
    res.send({ message: 'Data received!', yourData: req.body });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

// conslos