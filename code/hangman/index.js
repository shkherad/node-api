'use strict';

var util = require('util');
var clone = require('clone');
var ask = require('../../lib/ask.js');

module.exports = {
  newGame: function() {
    var missedCount = 0;
    return {
      isOver: function() {
        var ans = ask('is game over? ');
        return ans === 'y';
      },
      missed: function() {
        return missedCount++;
      },
      word: function() {
        return '';
      },
      guessed: function() {
        return '';
      }
    };
  }
};
