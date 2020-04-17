const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

async function main() {
    const team = await getTeam();
    const teamClassMap = mapTeamToClass(team);
    const content = render(teamClassMap);
    writeHTMLFile(content);
}

async function getTeam() {
    const team = [];
    const questions = [
        {
            name: "role",
            type: "list",
            message: "Please enter this person's role",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            name: "name",
            type: "input",
            message: "Please enter this person's name"
        },
        {
            name: "id",
            type: "input",
            message: "Please enter this person's ID number"
        },
        {
            name: "email",
            type: "input",
            message: "Please enter this person's email"
        }, {
            name: "officeNumber",
            type: "input",
            message: "Please enter the manager's Office Number",
            when: (answer) => answer.role === "Manager"
        }, {
            name: "github",
            type: "input",
            message: "Please enter the engineer's github username",
            when: (answer) => answer.role === "Engineer"
        }, {
            name: "school",
            type: "input",
            message: "Please enter the name of the intern's school",
            when: (answer) => answer.role === "Intern"
        },
    ];

    // Get manager info
    team.push(await inquirer.prompt(questions));

    while ( true === await inquirer.prompt([{ name: "addNewMember", type: 'confirm', message: 'Would you like to add another member?'}]) ){
        team.push(await inquirer.prompt(questions));
    }

    return team;
}

function mapTeamToClass(team){
    return team.map((employee) => {
        switch (employee.role){
            case 'Manager':
                return new manager(employee.name, employee.id, employee.email, employee.officeNumber);
                break;
            case 'Engineer':
                return new engineer(employee.name, employee.id, employee.email, employee.github);
                break;
            case 'Intern':
                return new intern(employee.name, employee.id, employee.email, employee.school);
                break;
            default:
                //Uhhhh return nothing?
                console.log("invalid employee role");
                return;
        }
    });
}


function writeHTMLFile(content) {
    fs.writeFile("output/team.html", content, function (err) {
        if (err) 
            throw err;
        
        console.log('Team Saved!');
    });
}

main();