// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        name:'title',
        message: 'What is the name of your project?'
    },
    {
        name: 'description',
        message: 'Please write a short description of your project.'
    },
    {
        name:'license',
        type: 'list',
        message: 'What kind of license does your project have?',
        choices: ['Apache', 'Creative Commons', 'GNU GPLv2', 'MIT', 'WTFPL', 'None'],
        default: 'MIT'
    },
    {
        name:'instructions',
        message: 'What dependencies should a user install?'
    },
    {
        name: 'tests',
        message: 'What command should be entered to run tests?'
    },
    {
        name:'usage',
        message: 'What should the user know about using your app?'
    },
    {
        name: 'contributors',
        message: 'Would you like to give anyone credit for assisting you with this project?'
    },
    {
        name:'email',
        message: 'What is your email address?'
    },
    {
        name:'github',
        message: 'What is your GitHub username?'
    }
];

function writeThisFile(response) {
    const answers = generateMarkdown(response);
    fs.writeFile('README.md', answers, (err) => {
        if (err) { return console.log(err); }
        
    console.log('Success!');
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);

        const answers = generateMarkdown(response);
        writeThisFile(response);
    });
}

// Function call to initialize app
init();
