// Included packages
const inquirer = require('inquirer');
const fs = require('fs');
const index = require('../index.js');

// License Badge
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'Apache') {
    badge = `![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === 'Creative Commons') {
    badge = `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`;
  } else if (license === 'GNU GPLv2') {
    badge = `![License: GNU GPL v2.0](https://img.shields.io/badge/License-GPL_v2-blue.svg)`;
  } else if (license === 'MIT') {
    badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === 'WTFPL') {
    badge = `![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)`;
  } else {
    badge = '';
  }
  return badge;
}

// License Link
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'Apache') {
    licenseLink = `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'Creative Commons') {
    licenseLink = `(http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (license === 'GNU GPLv2') {
    licenseLink = `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license === 'MIT') {
    licenseLink = `(https://opensource.org/licenses/MIT)`;
  } else if (license === 'WTFPL') {
    licenseLink = `(http://www.wtfpl.net/about/)`;
  } else {
    licenseLink = '';
  }
  return licenseLink;
}

// Write license name, badge, and link to README file
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = 
    `License: ${license} `
  }
  return licenseSection;
}


// Generate Markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  ---

  ## ${renderLicenseSection(response.license)} ${renderLicenseBadge(response.license)} 
  ### ${renderLicenseLink(response.license)}
  ---

  ## Description
  ### ${response.description}
  ---
 
  ## Table of Contents
  
  ### - [Installation](#installation)
  ### - [Usage](#usage)
  ### - [Contributors](#contributors)
  ### - [Tests](#tests)
  ### - [Questions](#questions)
  ---
    
  ## Installation
  ### ${response.instructions}
  ---

  ## Usage
  ### ${response.usage}
  ---

  ## Contributors
  ### ${response.contributors}
  ---

  ## Tests
  ### ${response.tests}
  ---

  ## Questions

  ### For any questions, please contact me at:
  ### GitHub: [https://github.com/${response.github}](https://github.com/${response.github})
  ### Email: ${response.email}
`;
}

module.exports = generateMarkdown;
