'use strict';

const fs = require('fs');

//READ DIRECTORY ASYNCHRONOUSLY
// fs.readdir('./', (error, data) => {
//   if (error) throw error;
//   console.log(data)
// }
// );

//CONSOLE LOGS FILES IN CURRENT ROOT DIRECTORY
// console.log(fs.readdirSync('./'));


// READS CONTENT OF A SINGLE FILE
//COMMAND LINE  node lib/demo.js example.json
// let inputFile = process.argv[2];
// fs.readFile(inputFile, 'utf8', (error,data) => {
//   // if (error) throw error;
//   console.log(data);
// }
// )

fs.writeFile('message.txt', 'I wrote this to the file!', {flag: 'a'}, (err) => {
  if (err) throw err;
  console.log('yay it saved');
})
