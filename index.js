// Inquirer (node package manager) import
const inquirer = require("inquirer");

// File system module (node package manager) import
const fs = require("fs");


// Questions prompt using inquirer
function promptQuestions() {
    inquirer
      .prompt([
        {
          type: "input",
          message:
            "Enter your logo text (Up to three characters)",
          name: "text",
        },
        {
          type: "input",
          message:
            "Choose your text color",
          name: "textColor",
        },
        {
          type: "list",
          message: "Choose your shape",
          choices: ["Circle", "Triangle", "Square"],
          name: "shape",
        },
        {
          type: "input",
          message:
            "Choose your shape background color",
          name: "shapeBackgroundColor",
        },
      ])
      .then((answers) => {
        // Error for text prompt length
        if (answers.text.length > 3) {
          console.log("Must enter a value of no more than 3 characters");
          promptQuestions();
        } else {
          // Calling write file function to generate SVG file
          writeToFile("logo.svg", answers);
        }
      });
  }
  
  // Calling promptUser function so inquirer prompts fire off when application is ran
  promptQuestions();


  // Function writeToFile