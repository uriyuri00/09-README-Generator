// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    'what is your project title?',
    'describe your project',
    'how do you install your project?',
    'usage information',
    'choose a license for your app',
    'test instructions',
    'what is your Github id?',
    'what is your email address?',
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('generateREADME.md', data, (err) => {
        if (err) {
        console.log(err);
    } else {
        console.log('successfully created.');
    } }
    )
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                name: 'title',
                type: 'input',
                message: questions[0],
            },
            {
                name: 'description',
                type: 'input',
                message: questions[1],
            },
            {
                name: 'installation',
                type: 'input',
                message: questions[2],
            },
            {
                name: 'usage',
                type: 'input',
                message: questions[3] ,
            },
            {
                name: 'license',
                type: 'list',
                message: questions[4],
                choices: [
                    'None',
                    'Apache 2.0 License',
                    'Boost Software license 1.0',
                    'BSD 3-Clause License',
                    'Mozilla Public License',
                    ]
            },
            {
                name: 'tests',
                type: 'input',
                message: questions[5],
            },
            {
                name: 'githubid',
                type: 'input',
                message: questions[6],
            },
            {
                name: 'email',
                type: 'input',
                message: questions[7],
            },
        ])

    .then((response)=> {
        const data = generateMarkdown(response);
        writeToFile(data)

    }
    )
};

// Function call to initialize app
init();




