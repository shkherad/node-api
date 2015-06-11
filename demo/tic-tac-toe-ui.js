'use strict';

var util = require('util');
var ask = require('../lib/ask.js');
var ticTacToe = require('./tic-tac-toe');
var game = ticTacToe.newGame(3);

var move;

var displayBoard = function(board) {
  var cells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  cells.forEach(function(cell, i, array) {
    array[i] = ' ' + (board[i] || cell) + ' ';
  });

  console.log([
    cells.slice(0, 3).join('|'),
    '---+---+---',
    cells.slice(3, 6).join('|'),
    '---+---+---',
    cells.slice(6, 9).join('|')
  ].join('\n'));
};

while (!game.isOver()) {
  displayBoard(game.getBoard());
  move = ask(util.format('\n%s\'s move? ', game.currentPlayer()));
  if (game.isMoveValid(move)) {
    game.move(move);
  } else {
    console.log('That\'s not a valid move!');
  }
}

if (game.isCatsGame()) {
  console.log('It\'s a draw!');
} else {
  var winner = game.getWinner();
  console.log(util.format('%s won!'));
}

