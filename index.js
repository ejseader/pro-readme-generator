// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        name:'email',
        message: 'What is your email address?'
    },
    {
        name:'title',
        message: "What is your project's name?"
    },
    {
        name: 'description',
        message: 'Please write a short description of your project.'
    },
    {
        name:'license',
        message: 'What kind of license should your project have?'
    },
    {
        name:'dependencies',
        message: "What command should be run to install dependencies?"
    },
    {
        name: 'tests',
        message: 'What command should be entered to run tests?'
    },
    {
        name:'instructions',
        message: "What should the user know about using your repo?"
    },
    {
        name: 'contributing',
        message: 'What should the user know about contributing to the repo?'
    }
]).then((answersObj) => {
    console.log(answersObj);
});


// // TODO: Create a function to write README file
// function writeToFile('README.md', data) {}

// // TODO: Create a function to initialize app
function init() {}

// // Function call to initialize app
init();
