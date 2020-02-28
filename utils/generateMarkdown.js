function generateMarkdown(data) {
  return `
# ${data.repo}
  ${data.description}
## License
  ${data.license}
## Dependencies
  ${data.dependencies}
## Tests
  ${data.test}
## Usage
  ${data.usage}
## Contributing
  ${data.contribution}
`;
}

module.exports = generateMarkdown;
