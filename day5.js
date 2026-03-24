const express = require('express'); //importing the express module to create a web application framework for Node.js
const app = express(); //creating an instance of the express application, which will be used to define routes and middleware for our server

app.get('/', (req, res) => { //bato banyeko route handler ko lagi  home page ma request aayo bhane yo function execute huncha
    res.send('Hello from home page'); //yo function le client lai response pathaune kam garcha, yo case ma client lai 'Hello from home page' message pathaune kam garcha
});

app.get('/about', (req, res) => { //bato banyeko route handler ko lagi about page ma request aayo bhane yo function execute huncha
    res.send('Hello from about page bata'); //yo function le client lai response pathaune kam garcha, yo case ma client lai 'Hello from about page bata' message pathaune kam garcha
});

app.listen(3000, () => { //yo line le server lai port 3000 ma listen garcha, jaba server successfully start huncha taba console ma message print garcha
    console.log('Server started!'); //yo line le console ma 'Server started!' message print garcha, jab server successfully start huncha
});