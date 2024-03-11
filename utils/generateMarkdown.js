// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = licenseBadgeGenerator(data.license);
  return `${licenseBadge}
  
# ${data.title}

## Description
### ${data.description}
---
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#constributing)
* [Tests](#tests)
* [Questions](#questions)
---
## Installation
### ${data.installation}
---
## Usage
### ${data.usage}
---
## License
### ${data.license}
---
## Contributing
### ${data.contributing}
---
## Tests
### ${data.tests}
---
## Questions
### If you have any questions, find me on Github (https://github.com/${data.gitHubName}) or email me on ${data.email}`;
}

function licenseBadgeGenerator(license) {
  let licenseBadge;

  switch (license) {
    case "Apache":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Eclipse":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "MIT":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
  }
  return licenseBadge;
}

module.exports = generateMarkdown;
