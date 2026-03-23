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
});

// POST route (receives data)
app.post('/data', (req, res) => {
    console.log(req.body); // log incoming data
    res.send({ message: 'Data received!', yourData: req.body });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});