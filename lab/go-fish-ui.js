'use strict';

var util = require('util');
var ask = require('../lib/ask.js');
var goFish = require('./go-fish');
var game = goFish.newGame(3);

console.log('Go Fish!');

while (!game.isOver()) {

}

console.log('Game over!');
