const database = {
  Questions: [
    {
      Question: `What is the difference between "==" and "==="?`,
      Options: {
        a: "Same",
        b: "'===' checks datatype and '==' checks value",
        c: "'==' checks both datatype and value and '===' checks value only",
        d: "'===' checks both datatype and value and '==' checks value only",
      },
    },
    {
      Question: `What is an Execution Context in JavaScript?`,
      Options: {
        a: "A lexical environment where the code is executed.",
        b: "A scope chain of variable and functions",
        c: "A stack of function calls",
        d: "None of these",
      },
    },
    {
      Question:
        "Which of the following is NOT a phase of the JavaScript execution context?",
      Options: {
        a: "Creation Phase",
        b: "Execution Phase",
        c: "Hoisting Phase",
        d: "Cleanup Phase",
      },
    },
    {
      Question: "What is the call stack in JavaScript?",
      Options: {
        a: "A stack data structure that keeps track of function calls.",
        b: "A global object that contains all the variables and functions.",
        c: "A scope chain of variables and functions.",
        d: "A lexical environment where the code is executed.",
      },
    },
    {
      Question: "What is hoisting in JavaScript?",
      Options: {
        a: "A mechanism where function and variable declarations are moved to the top of their scope",
        b: "A mechanism where the code is executed line by line.",
        c: "A mechanism where the call stack is updated with new function calls.",
        d: "A mechanism where the code is compiled and optimized.",
      },
    },
    {
      Question:
        "Which of the following declarations are NOT hoisted in JavaScript?",
      Options: {
        a: "var",
        b: "let",
        c: "const",
        d: "Both b and c",
      },
    },
    {
      Question: "What is the temporal dead zone (TDZ) in JavaScript?",
      Options: {
        a: "The period between a function declaration and its execution.",
        b: "The period between a variable declaration and its initialization.",
        c: "The period between a function call and its execution.",
        d: "The period between a function call and its return.",
      },
    },
    {
      Question:
        "Which of the following statements is true about hoisting in JavaScript?",
      Options: {
        a: "Function declarations are hoisted before variable declarations.",
        b: "Both function and variable declarations are hoisted at the same time.",
        c: "Variable declarations are hoisted before function declarations.",
        d: "Hoisting only affects global variables and functions.",
      },
    },
    {
      Question: `"What is the output of the following code?
    console.log(a);
    var a = 10;`,

      Options: {
        a: 10,
        b: "undefined",
        c: "Reference Error",
        d: "Syntax Error",
      },
    },
    {
      Question: `"What is the output of the following code?"
    let a = 10;
    {
    console.log(a);
    let a = 20;
    }`,
      Options: {
        a: 10,
        b: 20,
        c: "Reference Error",
        d: "Syntax Error",
      },
    },
    {
      Question: `"What is the output of the following code?"
    function foo() {
      console.log(a);
      let a = 20;
    }
    foo();`,
      Options: {
        a: 20,
        b: "undefined",
        c: "Reference Error",
        d: "Syntax Error",
      },
    },
  ],
  Solutions: [
    "d", "a", "c", "a", "a", "d", "b", "a", "b", "c", "c"
  ],
  LeaderBoard: [
    {
      name: "ayush",
      score: 3,

    },
    {
      name: "vedant",
      score: 5,

    },
    {
      name: "shubham",
      score: 4
    }
  ]
};

module.exports = {
  database,
};
