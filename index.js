const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const teamMemberHtmlArr = [];

function init() {
    function managerCreate() {
        inquirer.prompt([

            {
                type: 'input',
                name: 'name',
                message: 'What is the Managers name?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Whats your email',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the Managers id?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number?',
            },

        ])
            .then(({ name, id, email, officeNumber }) => {
                const manager = new Manager(id, name, email, officeNumber)
                teamMemberHtmlArr.push(generateManagerCard(manager))
                mainMenu()
            })
    }
    function mainMenu() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'name',
                message: 'Would you like to add another Employee?',
                choices: ['Engineer', 'Intern', "No, I'm done"]
            },
        ])
    }



    managerCreate()
}

init()