//
var rs = require('readline-sync');

var prompt = function(question) {
  return rs.question(question);
};

module.exports = prompt;
