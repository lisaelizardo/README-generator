
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generator.js');
const path = require('path');
//fs?
//use inquirer on Node.js as a guideline(ask for help)

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of the project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information of the project?',
        },
        {
            type: 'list',
            message: 'What is the license of the project?',
            name: 'license',
            choices: ['IBM','MIT','Mozilla']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the contribution guidelines?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions?',
        },
    ])
    .then((answers) => {
        console.log(answers)
        const markdownContent = generateMarkdown(answers);
        console.log(markdownContent)
        fs.writeFile('README.md', markdownContent, (err) => err && console.error(err))
    })