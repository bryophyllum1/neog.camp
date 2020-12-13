var readlineSync = require('readline-sync');
var userInput = readlineSync.question("Hey man, what's your name ?");
console.log("Welcome " + userInput);
