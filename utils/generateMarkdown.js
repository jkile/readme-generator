function generateMarkdown(data, email, image) {

  switch (data.license) {
    case "MIT":
      licenseType =
        "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
      break;
    case "APACHE 2.0":
      licenseType =
        "[![APACHE 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.txt)";
      break;
    case "GPL 3.0":
      licenseType =
        "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)";
      break;
    default:
      licenseType =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
  }
  return `
![Avatar](${image} "User Avatar")
# ${data.repo}
# Description
  ${data.description}
# Table of Contents
*[License](#License)
*[Dependencies](#Dependencies)
*[Testing](#Testing)
*[Usage](#Usage)
*[Contributing](#Contributing)

# License
  ${licenseType}
# Dependencies
  ${data.dependency}
# Tests
  ${data.test}
# Usage
  ${data.usage}
# Contributing
  ${data.contribution}
# Questions
  Please direct questions to ${email}
`;
}

module.exports = generateMarkdown;
