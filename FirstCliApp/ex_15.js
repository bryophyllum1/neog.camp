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
var readline= require('readline-sync');
var highscore={
  name: "Aakash",
  score: 0,
}

console.log("Welcome to the game --- Do ya know about me?------");
console.log("My name is Aakash and this game is to check your general knowledge.");

console.log("So, the game is of 4 levels. Each level contains two questions. And if you answer a question correctly, then it will increase your score by one. If you answer atleast one correctly then only you can go to the next level.")
var name=readline.question("Enter your name: ");
console.log("let's start, "+name+" ----------------");

while(true){
var score=0;
var temp=score;
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
  if (temp===score){
    console.log("You lost, wanna try again...")
    break;
  }else{
    temp=score
  }
}
console.log("You completed the game with score: "+ score);
if (score>highscore.score){
  console.log("You created new high score!");
  highscore.name= name;
  highscore.score= score;
}else{
  console.log("Current highscore was achieved by :"+ highscore.name+ " and is :" + highscore.score);
}
var choice = readline.question("Enter 1 if you want to play again or enter 2 to exit the game: ");
if (choice==='2'){
  console.log("Exiting game....")
break;
}
}
