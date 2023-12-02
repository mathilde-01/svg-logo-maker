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
        message: "Enter text for your logo (Up to three characters)",
        name: "text",
      },
      {
        type: "input",
        message: "Choose the text color (OR a hexadecimal number)",
        name: "textColor",
      },
      {
        type: "list",
        message: "Choose the shape",
        choices: ["Circle", "Triangle", "Square"],
        name: "shape",
      },
      {
        type: "input",
        message: "Choose the shape background color",
        name: "shapeBackgroundColor",
      },
    ])
    .then((answers) => {
      // Error for text prompt length
      if (answers.text.length > 3) {
        console.log("Must enter a value of no more than 3 characters");
        promptQuestions();
      }
      if (answers.shape == "Circle") {
        // Calling write file function to generate SVG file
        fs.writeFileSync(
          "./dist/logo.svg",
          `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${answers.shapeBackgroundColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

</svg>
          `
        );
      }
      if (answers.shape == "Triangle") {
        // Calling write file function to generate SVG file
        fs.writeFileSync(
          "./dist/logo.svg",
          `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

</svg>
          `
        );
      }
      if (answers.shape == "Square") {
        // Calling write file function to generate SVG file
        fs.writeFileSync(
          "./dist/logo.svg",
          `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect width="200" height="200" fill="${answers.shapeBackgroundColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>

</svg>
          `
        );
      }
      
    });
}

// Calling promptUser function so inquirer prompts fire off when application is ran
promptQuestions();