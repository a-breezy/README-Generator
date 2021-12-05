// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

const writeToFile = (fileContent) => {
	return new Promise((resolve, reject) => {
		fs.writeFile("./dist/README.md", fileContent, (err) => {
			if (err) {
				reject(err);
				return;
			}
			resolve({
				ok: true,
				message: "ReadMe Generated",
			});
		});
	});
};
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
		name: "githubName",
		message: "Please enter your github username",
		validate: (githubNameInput) => {
			if (githubNameInput) {
				return true;
			} else {
				console.log("Please enter your GitHub username");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "githubRepo",
		message: "Please enter your github repo",
		validate: (githubRepoInput) => {
			if (githubRepoInput) {
				return true;
			} else {
				console.log("Please enter your repo name");
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
		message:
			"Provide a step-by-step description of how to get the development environment running.",
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
		message: "Provide instructions and examples for use",
	},
	{
		type: "list",
		name: "license",
		message: "Choose a license type",
		choices: ["Apache", "GPL", "IBM", "MOZILLA", "MIT", "None"],
		default: "No license Chosen",
	},
	{
		type: "input",
		name: "collaborators",
		message:
			"List your collaborators, if any, with links to their GitHub profiles",
		default: "None",
	},
	{
		type: "input",
		name: "contribute",
		message: "Guidelines for how others can contributes",
		default: "None",
	},
	{
		type: "input",
		name: "test",
		message: "Instructions on how to test App",
		validate: (testInput) => {
			if (testInput) {
				return true;
			} else {
				console.log("Please enter a testing instructions for your project");
				return false;
			}
		},
	},
	{
		type: "input",
		name: "email",
		message: "Please add a contact email",
		validate: (emailInput) => {
			if (emailInput) {
				return true;
			} else {
				console.log("Please enter your contact email");
				return false;
			}
		},
	},
];

// TODO: Create a function to initialize app
function init() {
	inquirer
		.prompt(questions)
		.then((answers) => {
			return generateMarkdown(answers);
		})
		.then((data) => {
			return writeToFile(data);
		});
}

// Function call to initialize app
init();
