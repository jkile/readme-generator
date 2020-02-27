const fs = require("fs");
const inquirer = require("inquirer");
const API = require("./utils/api");

const questions = [
    {
        type: "input",
        name: "username",
        message: "Please provide your Github username: "
    }

];

function writeToFile(fileName, data) {

}

async function init() {
    const {username} = await inquirer.prompt(questions);
    const {data} = await API.getUser(username);
    console.log(data.items[0]);
}

init();
