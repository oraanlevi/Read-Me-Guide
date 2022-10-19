const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkDown = require('./lib/Readme');
console.log('Here goes my README generator')
console.log('Answer thr following questions to generate a high quality README for your project');

const questions = [

    { type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: your_Input => {
        if (your_Input) {
            return true;
        } else {
            console.log('Enter a title to Continue!');
            return false;
        }
        }
    },

    { type: 'input',
name: 'description',
message: 'Provide a description of your project.',
validate: your_description => { 
    if(your_description) {
        return true;

    } else {
        console.log('Enter a prokject description!');
        return false;
    }
}},


{
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
    validate: your_installation =>
    { if(your_installation) {
        return true;

    } else {
        console.log('Enter the steps of installation to continue.');
        return false;
    }
    }
}
,

{
    type: 'input',
    name: 'usage',
    message: 'How do you use this project?',
    validate: your_usage =>
    { if(your_usage) {
        return true;

    } else {
        console.log('Enter the information on how to use this project.');
        return false;
    }
    }
}

{
    type: 'checkbox',
    name: 'license',
    message: 'Choose a license that will be the best for your project',
    validate: your_license =>
    { if(your_license) {
        return true;

    } else {
        console.log('Select a license for your project.');
        return false;
    }
    }
},
{
    type: 'input',
    name: 'contribution',
    message: 'How can users conribute to this project',
    validate: your_contribution =>
    { if(your_contribution) {
        return true;

    } else {
        console.log('Provide information on hoe to contribute to this project.');
        return false;
    }
    }
},
{
    type: 'input',
    name: 'test',
    message: 'How do this user test this project?',
    validate: your_test =>
    { if(your_test) {
        return true;

    } else {
        console.log('Explain how you would test this project.');
        return false;
    }
    }
},