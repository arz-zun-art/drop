const express = require('express');
const app = express();

app.use(express.json());

// Fake database (in memory)
const users = [];

// REGISTER
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // check if user exists
    const userExists = users.find(u => u.username === username);

    if (userExists) {
        return res.send('User already exists');
    }

    users.push({ username, password });

    res.send('User registered successfully');
});

// LOGIN
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        return res.send('Invalid credentials');
    }

    res.send('Login successful');
});

app.listen(3000, () => {
    console.log('Server started!');
});