var readlineSync = require('readline-sync');
var answer = readlineSync.question("Is your age 19 ?");
if(answer === "yes"){
  console.log("You are right!");
}else if (answer === "no"){
  console.log("You are wrong!");
}else{
  console.log("Please enter a valid input..")
}
