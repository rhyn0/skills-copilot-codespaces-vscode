// create an express web server to serve routes on 8080
// and a socket.io server to serve on 8081

// import express and socket.io
const express = require('express');
const socketio = require('socket.io');


// handle the routes
const app = express();
const http = require('http').Server(app);
const io = socketio(http);

// routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
