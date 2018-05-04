const express = require('express');
const path = require('path');
const http = require('http');

const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const host = '0.0.0.0';
const port = process.env.PORT || 3000;



console.log(publicPath);
var app = express();
var server = http.createServer(app);

var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, host, function() {
    console.log("Server started......." + "at Port: " + port + " on host: " + host);
});
