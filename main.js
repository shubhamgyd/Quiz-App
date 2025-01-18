const {database} = require("./database.js");
const readline = require("readline-sync");


let score = 0;
Questions = database.Questions
Solutions = database.Solutions
const name = readline.question("Enter your username: \n");

function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    return true;
  } else {
    return false;
  }
}

function ShowQuestions() {
for(let i = 0; i < Questions.length; i++) {
  console.log(`\nQ${i+1} - ${Questions[i].Question}\n`)
  for (let key in Questions[i].Options) {
    console.log(`${key} - ${Questions[i].Options[key]}`);
  }
  const selectedAnswer = readline.question("Select the option - (a/b/c/d) - ");
  if (checkAnswer(selectedAnswer, Solutions[i])){
    score += 1;
    console.log("Correct Answer");
  } else {
    console.log("Incorrect Answer")
    console.log(`The solution is - ${Solutions[i]}`)
  }
}
}

function checkUserExistsInDatabase(user){
  const val = database.LeaderBoard.filter(({name, score}) => name == user);
  if (val.length) {
    return true;
  } else {
    return false
  }
}

function ShowLeaderBoard() {

  if (checkUserExistsInDatabase(name)) {
    let user = name;
    for (let i = 0; i < database.LeaderBoard.length; i++) {
      if (database.LeaderBoard[i].name == user) {
        database.LeaderBoard[i].score = score;
        break
      }
    }
  } else {
    database.LeaderBoard.push({
      name: name, score: score
    })
  }

  database.LeaderBoard.sort((a, b) => b.score - a.score)
  for (let i = 0; i < database.LeaderBoard.length; i++) {
    console.log(`${database.LeaderBoard[i].name} - ${database.LeaderBoard[i].score}`)
  }

}

ShowQuestions()
console.log(`Your score is ${score}`)
ShowLeaderBoard()
console.log(database.LeaderBoard)