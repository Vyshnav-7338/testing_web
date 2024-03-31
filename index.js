const express = require('express');
const mongoose = require('mongoose');
const WebSocket = require('ws');    
const http = require('http');
const websocketServer = require('./websocket.js');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start WebSocket server
websocketServer(wss);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
