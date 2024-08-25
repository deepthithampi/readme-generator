// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message : "Project Title : ",
        name: "title"
    },
    {
        type: "input",
        message : "Description : ",
        name: "description"
    },
    // {
    //     type: "input",
    //     message : "Table of Contents : ",
    //     name: "contents"
    // },
    {
        type: "input",
        message : "Installation InstructionsDescription : ",
        name: "installation"
    },
    {
        type: "input",
        message : "Usage Information : ",
        name: "usage"
    },
    {
        type: "input",
        message : "Contribution Guidelines : ",
        name: "contribution"
    },
    {
        type: "input",
        message : "Test Instructions : ",
        name: "test"
    },
    
    {
        type: "list",
        message : "Choose a License : ",
        name: "license",
        choices: ["MIT","GNU","Apache 2.0","BSD","MPL-2.0","None"]
    },
    {
        type: "input",
        message : "GitHub UserName : ",
        name: "github"
    },
    {
        type: "input",
        message : "E-mail : ",
        name: "eMail"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err)=>{
        err? console.error(err):console.log("Success!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response)=>{  
        //const licenceData = response.license
        const data = generateMarkdown(response);
        writeToFile("README.md",data)
    })
}

// Function call to initialize app
init();
