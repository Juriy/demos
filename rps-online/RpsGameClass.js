'use strict';

let ROCK = 1;
let SCISSORS = 2;
let PAPER = 3;

let DRAW = 1;
let FIRST_WON = 2;
let SECOND_WON = 3;

class RpsGame {
    constructor(io, s1, s2) {
        this._io = io;
        this._players = [s1, s2];
        this._turns = [];
        this._roomName = 'rps' + RpsGame._gameCount++;
        this._initGame();
    }

    _initGame() {
        this._players.forEach(this._setupSocket.bind(this));
        this._io.to(this._roomName).emit('message', 'Joined ' + this._roomName);
    }

    _setupSocket(sock, index) {
        var self = this;
        sock.join(this._roomName);
        sock.on('turn', turn => self._onTurn(index, turn));
    }

    _onTurn(index, turn) {
        let player = this._players[index];
        let turns = this._turns;

        if (turns[index]) {
            player.emit('message', 'You selected already!');
            return;
        }

        turns[index] = RpsGame._turnToIndex(turn);
        player.emit('message', 'You selected ' + turn);

        if (turns[0] && turns[1]) {
            this._onRoundEnd();
        }
    }

    _onRoundEnd() {
        let result = this._getWinner(this._turns[0], this._turns[1]);
        switch (result) {
            case DRAW:
                this._io.to(this._roomName).emit('message', 'Draw!');
                break;
            case FIRST_WON:
                this._players[0].emit('message', 'You Win');
                this._players[1].emit('message', 'You Lose');
                break;
            case SECOND_WON:
                this._players[1].emit('message', 'You Win');
                this._players[0].emit('message', 'You Lose');
                break;
        }
        this._turns = [];
        this._io.to(this._roomName).emit('message', 'Next round!!!');
    }

    _getWinner(turnA, turnB) {
        let value = ((turnB - turnA) + 3) % 3;

        if (value == 0) {
            return DRAW;
        } else if (value == 1) {
            return FIRST_WON;
        } else if (value == 2) {
            return SECOND_WON;
        }
    }

    static _turnToIndex(turn) {
        switch (turn) {
            case 'rock':
                return 1;
            case 'scissors':
                return 2;
            case 'paper':
                return 3;
            default:
                throw Error('Unknown selection ' + turn)
        }
    }
}

RpsGame._gameCount = 0;
module.exports = RpsGame;
