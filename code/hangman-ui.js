#!/usr/bin/env node
'use strict';
//
var util = require('util');
var ask = require('../lib/ask.js');
var hangman = require('./hangman');
var game = hangman.newGame();

var move;

var displayGallows = function(missed) {
  var gallowsTemplate = [
    '     ______',
    '     |    |',
    '     |    %s',
    '     |   %s%s%s',
    '     |    %s',
    '     |   %s %s',
    '   __|_____',
    '   |      |___',
    '   |_________|'
  ].join('\n');
  console.log(util.format(gallowsTemplate,
    missed > 0 ? 'o' : ' ',
    missed > 2 ? '/' : ' ',
    missed > 1 ? '|' : ' ',
    missed > 3 ? '\\' : ' ',
    missed > 4 ? '|' : ' ',
    missed > 5 ? '/' : ' ',
    missed > 6 ? '\\' : ' '));
};

var displayWord = function(word) {
  console.log('   Word: --------');
};

var displayGuessed = function(guessed) {
  console.log(util.format('Guessed: %s', guessed));
};

var guess;

while(!game.isOver()) {
  displayGallows(game.missed());
  displayWord(game.word());
  displayGuessed(game.guessed());
  guess = ask(' Guess?: ');
}
