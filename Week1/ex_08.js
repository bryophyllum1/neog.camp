var readlineSync = require('readline-sync') ;

function check(quest, ans){
  var answer = readlineSync.question(quest+ " ");
  if (answer === ans){
    return "right";
  }else{
    return "wrong";
  }
}
var quest = "What is my age ?";
var ans = "19";
console.log(check(quest, ans));
