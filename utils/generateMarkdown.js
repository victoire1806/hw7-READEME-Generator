//let badge = ![License badge](https://img.shields.io/badge/License-${data.license}-green);


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {

//if(license.data = lincense.data) ()

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {

//let link =  
//}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  ## Licence Badge
  ![License badge](https://img.shields.io/badge/License-${data.license}-green)
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Tests](#testing)
  5. [Contribution](#contribution)
  6. [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  [License badge](https://img.shields.io/badge/License-${data.license}-green)
 
  ## Tests
  ${data.testing}
  ## Contribution
  ${data.contribution}
  
  ## Questions
  * If you have questions, email me at: ${data.email},
  * GitHub Profile link: https://github.com/${data.gitName}
  

`;
}

module.exports = generateMarkdown;
