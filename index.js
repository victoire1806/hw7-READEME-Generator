// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const readme = "README.md";
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        message: "Project Title?",
        name: "title"
    },
    {
        type: "input",
        message: "Project Description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Installation instructions for this project? ",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions on how to use your project:",
        name: "usage"
    },
    {
        type: "input",
        message: "Contributors for this project? ",
        name: "contribution"
    },
  
    {
        type: "input",
        message: "What are the testing instructions for this project? ",
        name: "testing"
    },
    {
        type: "checkbox",
        message: "Please select a license for this project:",
        choices: [
            "Apache_License_2.0",
            "Boost_Software_License 1.0",
            "MIT",
            "ISC",
            "GNU_LGPLv3",
            "Mozilla_Public_License_2.0",
            "Eclipse_Punlic_License",
        ],
        name: "license"
    },
    {
        type: "input",
        message: "What is your GitHub username? ",
        name: "gitName"
    },
    {
        type: "input",
        message: "What is your email address? ",
        name: "email"
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
        return console.log(err);
      }
      else{
        return console.log("Your README.md file has been generated")
      }
    });
}

// function to initialize app
function init() {
    inquirer.prompt(questions).then(userdata => writeToFile(readme, userdata));
}
 

// Function call to initialize app
init();
