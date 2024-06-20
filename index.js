const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMardown.js');

const questions = [
  {
    type: 'input', 
    name: 'titleOfProject',
    message: 'What is the title of your project?'
  },
  {  
    type: 'input', 
    name: 'Description',
    message: 'What is a description of your project?'
  },
  {  
    type: 'input', 
    name: 'TableOfContents',
    message: 'Provide a table of contents:'
  },
  {  
    type: 'input', 
    name: 'Installation',
    message: 'Provide installation instructions:'
  },
  {  
    type: 'input', 
    name: 'Usage',
    message: 'Provide usage information:'
  },
  {  
    type: 'list', 
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'None']
  },
  {  
    type: 'input', 
    name: 'Contributing',
    message: 'Provide contribution guidelines:'
  },
  {  
    type: 'input', 
    name: 'Tests',
    message: 'Provide tests instructions:'
  },
  {  
    type: 'input', 
    name: 'Questions',
    message: 'Provide questions or contact information:'
    
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('README.md file has been generated');
  });
}

function init() {

  inquirer
  .prompt(questions).then((answers) => {
    const readmeContent = `
    # ${answers.titleOfProject}

    ## Description
    ${answers.Description}

    ## Table of Contents
    ${answers.TableOfContents}

    ## Installation
    ${answers.Installation}

    ## Usage
    ${answers.Usage}

    ## License
    ${answers.license}

    ## Contributing
    ${answers.Contributing}

    ## Tests
    ${answers.Tests}

    ## Questions
    ${answers.Questions}
    `;

    writeToFile('GeneratedREADME.md', readmeContent);
  });
}

init();



function init() {
  inquirer.prompt(questions).then((answers)=> {
    const markdown = generateMarkdown(answers);
    writeToFile('GeneratedREADME.md', markdown);
  });
}

init();



 

