

(function init() {
    var socket = io('http://localhost:3003');

    socket.on('message', onMessage);

    var container = document.querySelector('.main');
    var form = document.querySelector('#chat-form');
    var chat = document.querySelector('ul.chat');
    var messageInput = document.querySelector('.chat-input');

    var rockButton = document.querySelector('#rock');
    var paperButton = document.querySelector('#paper');
    var scissorsButton = document.querySelector('#scissors');

    rockButton.addEventListener('click', function() {
        sendTurn('rock');
    });

    paperButton.addEventListener('click', function() {
        sendTurn('paper');
    });

    scissorsButton.addEventListener('click', function() {
        sendTurn('scissors');
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        sendMessage();
    });

    function onMessage(message) {
        var el = document.createElement('li');
        el.innerHTML = message;
        chat.appendChild(el);
        container.scrollTop = el.offsetTop;
    }

    function sendMessage() {
        var value = messageInput.value;
        socket.emit('message', value);
        messageInput.value = '';
    }

    function sendTurn(turn) {
        socket.emit('turn', turn);
    }

})();