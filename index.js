const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please describe your project',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What technologies have you used for this project',
    name: 'technologies',
  },
  {
    type: 'input',
    message: 'What is your Github username',
    name: 'username',
  },

];

// function to write README file
function writeToFile(fileName, data) {
  
}

// function to initialize program
function init() {
  inquirer
  .prompt([
      {
        type: 'input',
        message:"",
      }
  ])
  .then((answers) => {
    console.log(answers);
    fs.writeFile('log.txt', JSON.stringify(answers), (err) =>{
      console.log(err)
    })
  });

}

// function call to initialize program
init();

// Create the final README structure with string literal first, with #, ##, spaces etc., then just put the data where it is needed.