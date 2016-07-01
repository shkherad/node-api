'use strict';

const fs = require('fs');

let inFile = process.argv[2];

fs.readFile(inFile,{ encoding: 'utf8' }, (error, names) => {
  if (error) {
    console.error(error)
  }

  let name = names.split(' ')
  name.pop();

  name.forEach((name) => {
    console.log('Hello, '+name)
  })
  console.log()

})
