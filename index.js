const fs = require("fs");
const inquirer = require("inquirer");
const API = require("./utils/api");
const generateMarkdown = ("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "username",
        message: "Provide your Github username: "
    },
    {
        type: "input",
        name: "repo",
        message: "Provide project name: "
    },
    {
        type: "list",
        name: "license",
        message: "Provide license for project: ",
        choices: ["APACHE 2.0", "GPL 3.0", "BSD 3", "MIT"]
    },
    {
        type: "input",
        name: "dependency",
        message: "Provide command to run dependency install: "
    },
    {
        type: "input",
        name: "test",
        message: "Provide command to run tests: "
    },
    {
        type: "input",
        name: "info",
        message: "Provide details on use of repo: "
    },
    {
        type: "input",
        name: "contribution",
        message: "Provide details on contributing to repo: "
    }

];

async function writeToFile(fileName, data) {
    await fs.appendFile("README.md",generateMarkdown(data));
}

async function init() {
    const userInput = await inquirer.prompt(questions);
    const {data} = await API.getUser(userInput.username);
    console.log(data.items[0]);
    console.log(data);

}

init();
