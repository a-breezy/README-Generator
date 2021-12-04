// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	switch (license) {
		case "Apache":
			return "[![License APACHE 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
		case "GPL":
			return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
		case "IBM":
			return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
		case "MIT":
			return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
		case "MOZILLA":
			return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
		case "None":
			return "";
	}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	switch (license) {
		case "Apache":
			return "[License: APACHE 2.0](https://opensource.org/licenses/Apache-2.0)";
		case "GPL":
			return "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
		case "IBM":
			return "[License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)";
		case "MIT":
			return "[License: MIT](https://opensource.org/licenses/MIT)";
		case "MOZILLA":
			return "[License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)";
		case "None":
			return "";
	}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	return `## License

  ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	return `# ${data.title} ${renderLicenseBadge(data.license)}
  
## Description

${data.description}

GitHub Repo: https://github.com/${data.githubName}/${data.githubRepo}

## Table of Contents

  * [Installation](#installation-instructions)
  * [Usage](#usage)
  * [License](#license)
  * [Collaborators](#collaborators)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions](#questions)

## Installation Instructions

${data.installationInstructions}

---
## Usage

${data.usage}

---
${renderLicenseSection(data.license)}

---
## Collaborators

${data.collaborators}

---
## How to Contribute

${data.contribute}

---
## Tests

${data.test}

---
## Questions

${data.email}
`;
}

module.exports = generateMarkdown;
