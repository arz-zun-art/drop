const https = require('https'); //importing the https module to create a server that can handle secure requests
const url = require('url'); //importing the url module to parse URL strings, allowing us to work with URLs in our server
const fs = require('fs'); //importing the fs module to work with the file system, allowing us to read and write files
const express = require('express'); //importing the express module to create a web application framework for Node.js
const { get } = require('http');

const app = express();

app.get('/', (req, res) => { //bato banyeko route handler ko lagi  home page ma request aayo bhane yo function execute huncha
    return res.send('Hello from home page'); //yo function le client lai response pathaune kam garcha, yo case ma client lai 'Hello from home page' message pathaune kam garcha
});

app.get('/about', (req, res) => {
    return res.send('Hello from about page bata');
});

function handleRequest(req, res) {} //yo function le server ma aayeko request lai handle garcha, yo function le client lai response pathaune kam garcha

const server = https.createServers(get); //yo line le https server create garcha, handleRequest function lai request handler ko rup ma pass garcha


myserver.listen(3000, () => { //yo line le server lai port 3000 ma listen garcha, jab server successfully start huncha tab console ma message print garcha
    console.log('server started!');
});