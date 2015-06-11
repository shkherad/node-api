'use strict';

//You'll need a shuffle

module.exports = {
  newGame: function() {
    return {
      isOver: function() {
        return true;
      }
    };
  }
};
