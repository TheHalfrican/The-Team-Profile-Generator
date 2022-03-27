const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const {
    generateEngineerCard,
    generateInternCard,
    generateManagerCard,
    baseHtml
} = require("./src/htmlGen")

const teamMemberHtmlArr = [];

function init() {
    function managerCreate() {
        inquirer.prompt([

            {
                type: 'input',
                name: 'name',
                message: "What is the Manager's name?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What's your email?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Manager's id?",
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
            });
    }
    function mainMenu() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'addedRole',
                message: 'Would you like to add another Employee?',
                choices: ['Engineer', 'Intern', "No, I'm done"]
            },
        ])
            .then(answers => {
                switch (answers.addedRole) {
                    case "Engineer":
                        return engineerCreate();
                    case "Intern":
                        return internCreate();
                    default:
                        return generateHtml();
                }
            })
    }
    function engineerCreate() {
        inquirer.prompt([

            {
                type: 'input',
                name: 'name',
                message: "What is the Engineer's name?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What's your email?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Engineer's id?",
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is your github username?',
            },

        ])
            .then(({ name, id, email, github }) => {
                const engineer = new Engineer(id, name, email, github)
                teamMemberHtmlArr.push(generateEngineerCard(engineer))
                mainMenu()
            });
    }
    function internCreate() {
        inquirer.prompt([

            {
                type: 'input',
                name: 'name',
                message: "What is the Intern's name?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What's your email?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Intern's id?",
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the name your School?',
            },

        ])
            .then(({ name, id, email, school }) => {
                const intern = new Intern(id, name, email, school)
                teamMemberHtmlArr.push(generateInternCard(intern))
                mainMenu();
            });
    }
    function generateHtml () {
        fs.writeFile("./dist/index.html", baseHtml(teamMemberHtmlArr), (err) => {
            err ? console.log(err) : console.log("Generated HTML File")
        })
    }


    managerCreate();
}

init();