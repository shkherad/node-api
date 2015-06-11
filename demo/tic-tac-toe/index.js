'use strict';

var util = require('util');
var clone = require('clone');
var ask = require('../../lib/ask.js');

module.exports = {
  newGame: function(rank) {
    var board = new Array(rank*rank);

    //HACK: JavaScript array methods current skip unset indexes
    for (var i = 0; i < board.length; i++) {
      board[i] = 0;
    }

    return {
      isOver: function() {
        var ans = ask('is game over? ');
        return ans === 'y';
      },
      getBoard: function() {
        return clone(board);
      },
      currentPlayer: function(){
        return ask('who is the current player? ');
      },
      isMoveValid: function(move) {
        var ans = ask(util.format('is move %d valid? ', move));
        return ans === 'y';
      },
      move: function(move) {
        if (this.isMoveValid(move)) {
          board[move] = this.currentPlayer();
        }
      },
      isCatsGame: function() {
        var ans = ask('is it a cat\' game? ');
        return ans === 'y';
      },
      getWinner: function() {
        ask('who is the winner? ');
      }
    };
  }
};
