// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./util/generateMarkdown');
const fs = require('fs');
const path = requite('path');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input', 
    name: 'title',
    message: 'Please input Project Title'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please give a description for your project'
  },
  {
    type: 'input',
    name: 'Installation Instructions',
    message: 'Please give instructions for how to intall'
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Please give a description of how to use'
  },
  {
    type: 'list',
    name: 'License',
    message: 'Choose a license type',
    choices: [" // search license types and include"]
  },
  {
    type: 'input',
    name: 'Contributing',
    message: '//Search what contributing means...'
  },
  {
    type: 'input',
    name: 'Test',
    message: 'Instructions on how to test App'
  },
  {
    type: 'input',
    name: 'email',
    message: 'If you have any questions email me'
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((userResponses) => {
    writeToFile('readme.md', generateMarkdown({ ...userResponses}));
  });
}

// Function call to initialize app
init();
