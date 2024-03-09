const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const promptQuestions = [
  {
    name: "title",
    message: "What is your project title?",
    type: "input"
  },
  {
    name: "description",
    message: "Please describe your project",
    type: "input"
  },
  {
    name: "installation",
    message: "What steps are needed to install your project?",
    type: "input"
  },
  {
    name: "usage",
    message: "What is the use of your project?",
    type: "input"
  },
  {
    name: "license",
    message: "What license does your project use?",
    type: "list",
    choices: ["MIT", "Apache", "Eclipse"]
  },
  {
    name: "contributing",
    message: "Who maintains and can contribute to the project?",
    type: "input"
  },
  {
    name: "tests",
    message: "How do you test this project?",
    type: "input"
  },
  {
    name: "gitHubName",
    message:
      "What is your Github username so others can reach you for questions?",
    type: "input"
  },
  {
    name: "email",
    message: "What is your email so others can reach you for questions?",
    type: "input"
  }
];

// function to initialize program
function init() {
  inquirer.prompt(promptQuestions).then((answers) => {
    const markdown = generateMarkdown(answers);
    fs.writeFile("GeneratedREADME.md", markdown, (err) => {
      console.log(err);
    });
  });
}

// function call to initialize program
init();

// Create the final README structure with string literal first, with #, ##, spaces etc., then just put the data where it is needed.
