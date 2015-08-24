'use strict';

let http = require('http').createServer();
let io = require('socket.io')(http);
let RpsGame = require('./RpsGameClass');

let port = +process.argv[2];
http.listen(port, () => console.log('listening on *:' + port));

let waitingPlayer;

io.on('connection', onPlayerConnected);

function onPlayerConnected(socket) {
    socket.on('disconnect', () => console.log('user disconnected'));
    socket.on('message', msg => io.emit('message', msg));
    socket.emit('message', 'welcome to server');
    matchPlayers(socket);
}

function matchPlayers(socket) {
    if (waitingPlayer) {
        setupGame(socket, waitingPlayer);
        waitingPlayer = null;
    } else {
        waitingPlayer = socket;
        socket.emit('message', 'wait for the second player');
    }
}

function setupGame(p1, p2) {
    new RpsGame(io, p1, p2);
}