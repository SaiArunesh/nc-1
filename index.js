const readLineSync = require("readline-sync");
const chalk = require("chalk");

const output = chalk.bold.green;
const banner = chalk.bold.red;

let currentUserName = "";

let score = 0;

let leaderBoard = {
  1: {
    username: "hulk",
    score: "4"
  },
  2: {
    username: "hawkeye",
    score: "5"
  }
}

let questions = {
   1: { question: output("What is my age?"), answer: "22" },
  2: { question: output("Where do I live?"), answer: "TamilNadu" },
  3: { question: output("Is hulk bruce banner"), answer: "yes" },
  4: { question: output("Are you batman?"), answer: "no" },
  5: { question: output("What is 2*2?"), answer: "4" }
}

function checkUserResponse(question, rightAnswer) {
  let answer = readLineSync.question(question + "\t");
  let currentScore = 0;
  answer = answer.toLowerCase();
  rightAnswer = rightAnswer.toLowerCase();
  if (answer === rightAnswer) {
    console.log("you are right");
    currentScore = currentScore = 1;
    console.log("You scored ", currentScore, " points\n");
  }
  else {
    console.log("Sorry, you are wrong\n");
  }
  return currentScore;
}

currentUserName = readLineSync.question("What is your name? ");
if(currentUserName === "")
{
  currentUserName = "Nam nahi bateyaga?";
}

for (let [index, quest] of Object.entries(questions)) {
  console.log(index, ".");
  let question = quest.question
  let answer = quest.answer
  score = score + checkUserResponse(question, answer);
}


console.log(banner("Your final score is ", output(score), " points\n\n"));

console.log(banner("Leader Board\n"));
let scoreBeatenFlag = false;
for (let [index, user] of Object.entries(leaderBoard)) {
  let username = user.username
  let points = user.score
  console.log(username, " ==>", points, " points");
  if (score >= points) {
    scoreBeatenFlag = true;
  }
}

console.log(currentUserName, " ==>", score, " points");

if (scoreBeatenFlag) {
  console.log(output("\nScreenshot your final score and send to me I will buy you an icecream and add to Leader Board as well"));
}

