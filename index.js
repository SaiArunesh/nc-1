let readLineSync = require("readline-sync");

let score = 0;

let leaderBoard={
1:{
  username:"Sai Arunesh",
  score: "2"
}
};

let questions = {
  1:{question:"Where do I Live?", answer:"xoxo"},
  2:{question:"What song do i love?", answer:"yoyo"},
  3:{question:"What is 2*2?", answer:"dormamu"}
}

function checkUserResponse(question, rightAnswer){
  let answer = readLineSync.question(question+"\t");
  let currentScore = 0;
  answer = answer.toLowerCase();
  rightAnswer = rightAnswer.toLowerCase();
  if(answer === rightAnswer){
    console.log("you are right");
    currentScore = currentScore = 1;
    console.log("You scored ",currentScore," points\n");
  }
  else{
    console.log("Sorry, you are wrong\n");
  }
  return currentScore;
  }

  for(let [index,quest] of Object.entries(questions)){
    console.log(index,".");
     let question = quest.question
     let answer = quest.answer
     score = score + checkUserResponse(question,answer);
  }
  
console.log("Your final score is ",score," points\n\n");

  console.log("Leader Board\n");
  let scoreBeatenFlag = false;
  for(let [index,user] of Object.entries(leaderBoard)){
       let username = user.username
     let points = user.score
console.log(username," ==>",points," points");
if(score>=points)
{
  scoreBeatenFlag = true;
}
  }

  if(scoreBeatenFlag){
    console.log("\nScreenshot your final score and send to me I will buy you an icecream");  }

