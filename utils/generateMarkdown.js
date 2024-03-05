// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

## Table of Contents
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [License](#license)
  ### * [Contributing](#constributing)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

## Installation
### ${data.installation}
## Usage
### ${data.usage}
## License
### ${data.license}
## Contributing
### ${data.contributing}
## Tests
### ${data.tests}
## Questions
###${data.questions}
## Email
### Alternatively, contact me on ${data.email}
`;
}

module.exports = generateMarkdown;
