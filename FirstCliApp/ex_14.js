var readline= require('readline-sync');
var questions = [ {
  quest : "Who is my favourite superhero?",
  ans : "BATMAN",
}, {
  quest : "What is the name of my dream car?",
  ans : "CENTODIECI",
}, {
  quest : "Do I have a pet?",
  ans : "NO",
}, {
  quest : "How many brothers do I have?",
  ans : "1",
}, {
  quest : "What is my favourite color?",
  ans : "RED",
}, {
  quest : "What is my favourite movie?",
  ans : "PURSUIT OF HAPPINESS",
}, {
  quest : "What is my last name?",
  ans : "DEEP",
}, {
  quest : "What is the name of my birth place?",
  ans : "SITAMARHI",
}]
console.log("Welcome to the game --- Do ya know me ?------");
console.log("My name is Aakash and this game is about me.");
var score=0;
console.log("So, the game is of 4 levels, each level contains two questions. And if you answer a question correctly, then it will increase your score by one.")
console.log("let's start----------------")
for(var i=0; i< 4; i++){
console.log("-------Level "+ (i+1) + "-------")
  for(var j=0; j<2; j++){
    answer=readline.question(questions[i*2+j].quest)
    if(answer.toUpperCase()===questions[i*2+j].ans){
      console.log("Right!");
      score++;
      console.log("your current score is: "+ score);
    }
    else{
      console.log("Wrong!");
            console.log("your current score is: "+ score);

    }
  }
}
console.log("You completed the game with score: "+ score);
