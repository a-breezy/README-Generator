// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
	{
		type: "input",
		name: "title",
		message: "Please input Project Title",
		validate: (titleInput) => {
			if (titleInput) {
				return true;
			} else {
				console.log("Please enter a title for your project");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "description",
		message: "Please give a description for your project",
		validate: (descriptionInput) => {
			if (descriptionInput) {
				return true;
			} else {
				console.log("Please enter a description for your project");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "installationInstructions",
		message: "Please give instructions for how to intall",
		validate: (installationInstructionsInput) => {
			if (installationInstructionsInput) {
				return true;
			} else {
				console.log(
					"Please enter a installation instructions for your project"
				);
				return false;
			}
		},
	},
	{
		type: "input",
		name: "usage",
		message: "Please give a description of how to use",
	},
	{
		type: "list",
		name: "license",
		message: "Choose a license type",
		choices: ["Apache", "GPL", "IBM", "MOZILLA", "MIT", "None"],
	},
	{
		type: "input",
		name: "contributing",
		message: "List collaborators",
	},
	{
		type: "input",
		name: "test",
		message: "Instructions on how to test App",
	},
	{
		type: "input",
		name: "email",
		message: "If you have any questions email me",
	},
];

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((userResponses) => {
		fs.writeFile("./dist/readme.md", userResponses, (err) => {
			err ? console.log(err) : console.log("generated File");
		});
	});
}

// Function call to initialize app
init();
