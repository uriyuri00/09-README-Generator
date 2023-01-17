// TODO: Create a function that returns a license badge based on which license is passed in
const inquirer = require('inquirer');
const fs = require('fs');

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  let licenseOptions =
  {
    "Apache license 2.0": "https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg",
    "BSD 3-Clause \"New\" or \"Revised\" License": "https://img.shields.io/badge/License-BSD_3--Clause-orange.svg",
    "Boost Software License 1.0": "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
    "Mozilla Public License 2.0": "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
  }
  if (license !== "None") {
    badge = `![License](${licenseOptions[license]})`
  }
  return badge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license !== "None") {
    licenseLink = "- [License](#license)"
  }
  return licenseLink;

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license !== "None") {
    licenseSection = `## License\n${license}`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}


  ## Table of Contents 
  - [Project Description](#Description)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  ${renderLicenseLink(data.license)}
  - [Installation](#Installation)
  - [Questions](#Questions)


  ## Description
  
  ${data.description}
  ## Usage
   ${data.usage}


  ## Installation:
  
  ${data.installation}
  
  ## License
  
  ${data.license}
  
  ## Questions
  ### If you have any question, contact here

   Github: http://github.com/${data.githubid}
   OR
   Email: ${data.email}




`;
}

module.exports = generateMarkdown;
