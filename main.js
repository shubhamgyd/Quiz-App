const {database} = require("./database.js");
const readline = require("readline-sync");

Questions = database.Questions
Solutions = database.Solutions
for(let i = 0; i < Questions.length; i++) {
  console.log(`\nQ${i+1} - ${Questions[i].Question}\n`)
  for (let key in Questions[i].Options) {
    console.log(`${key} - ${Questions[i].Options[key]}`);
  }
  readline.question("a/b/c/d - ");
  console.log(`The solution is - ${Solutions[i]}`)
}