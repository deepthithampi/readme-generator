// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/License-${license}-blue)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[More about ${license} license](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
## License
This project is licensed under the ${license} license.  
${renderLicenseBadge(license)}  
${renderLicenseLink(license)}
    `;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
    
## Description
${data.description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
\`\`\`
${data.installation} 
\`\`\`
   
## Usage
${data.usage}
    
${renderLicenseSection(data.license)}
    
## Contributing
${data.contribution}
    
## Tests
\`\`\`
${data.test}
\`\`\`
    
## Questions
For any questions, please feel free to contact me at ${data.eMail}. 
You can also find more of my work at [${data.github}](https://github.com/${data.github}).

## Walkthrough Video

Here is a video demonstration the functionality of the prokect:

[Video](https://app.screencastify.com/v3/watch/sGINy0ctCCSWbKk0aM4m)

`;
}

export default generateMarkdown;
