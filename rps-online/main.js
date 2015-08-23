var http = require('http').createServer();
var io = require('socket.io')(http);

var port = +process.argv[2];

http.listen(port, function(){
    console.log('listening on *:' + port);
});

var waitingPlayer;

io.on('connection', function(socket){
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('message', function(message) {
        io.emit('message', message);
    });

    socket.emit('message', 'welcome to server');

    if (waitingPlayer) {
        setupGame(socket, waitingPlayer);
        waitingPlayer = null;
    } else {
        waitingPlayer = socket;
        socket.emit('message', 'wait for the second player');
    }
});

function setupGame(p1, p2) {
    p1.emit('message', 'You are playing now!');
    p2.emit('message', 'You are playing now!');

    var players = [p1, p2];
    var turns = [];

    players.forEach(function(sock, idx) {
        sock.on('turn', function(turn) {
            console.log('Got turn', turn);

            if (turns[idx]) {
               sock.emit('message', 'You already chosen ' + turns[idx]);
               return;
            }

            turns[idx] = turn;

            if (turns[0] && turns[1]) {
               // End of round
               turns = [];
               [p1, p2].forEach(function(it) {
                   it.emit('message', 'round done');
               });
            }
       });
    });
}