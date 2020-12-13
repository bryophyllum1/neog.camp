var readlineSync = require('readline-sync');
var quest= "Is your hometown Sitamarhi ?";
var answer = readlineSync.question(quest);
var score=0;
if(answer === "yes"){
  console.log("You are right!");
  score=score+1;
  console.log(score);
}else if (answer === "no"){
  console.log("You are wrong!");
  score=score-1;
  console.log(score);
}else{
  console.log("Please enter a valid input..")
  console.log(score);
}
