// imported classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//imported modules
const fs = require('fs');
const inquirer = require('inquirer');

// imported file for generating HTML template
const render = require('./src/page-template');

// global array
const team = [];

// first function to run upon entering 'node index.js' in terminal. 
// inquirer asks users for information about manager.
const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'text',
      name: 'managerName',
      message: "Please enter the Team Manager's name:"
    },
    {
      type: 'text',
      name: 'managerId',
      message: "Please enter the Team Manager's Employee ID:"
    },
    {
      type: 'text',
      name: 'managerEmail',
      message: "Please enter the Team Manager's email address:"
    },
    {
      type: 'text',
      name: 'managerOffice',
      message: "Please enter the Team Manager's office number:"
    }
  ])
};

// function designated to handle 
const handleNewUsers = () => {
  promptMemberChoice()
    .then(newMember => {
      if (newMember.selection === 'Engineer' || newMember.selection === 'Intern') {
        return promptNewTeamMember(newMember);
      } else {
        console.log(team);
        return buildTeam();
      }
    })
    .then(newTeamMember => {
      if (!newTeamMember) {
        console.log("Team build complete! Please view the 'index.html' file in the 'dist/' folder for the finished webpage!");
        return;
      } else if (newTeamMember.engineerGithub) {
        const newEngineer = new Engineer(newTeamMember.engineerName, newTeamMember.engineerId, newTeamMember.engineerEmail, newTeamMember.engineerGithub);
        console.log(newEngineer);
        team.push(newEngineer);
        return handleNewUsers();
      } else if (newTeamMember.internSchool) {
        const newIntern = new Intern(newTeamMember.internName, newTeamMember.internId, newTeamMember.internEmail, newTeamMember.internSchool);
        console.log(newIntern);
        team.push(newIntern);
        return handleNewUsers();
      }
    })
}

const promptMemberChoice = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'selection',
      message: 'Would you like to add more members to your team?',
      choices: ['Engineer', 'Intern', "No, I'm finished building my team"]
    }
  ])
}

const promptNewTeamMember = choice => {
  if (choice.selection === 'Engineer') {
    console.log(`
================
Add New Engineer
================
`);
    return inquirer.prompt([
      {
        type: 'text',
        name: 'engineerName',
        message: "Please enter the Engineer's name:"
      },
      {
        type: 'text',
        name: 'engineerId',
        message: "Please enter the Engineer's Employee ID:"
      },
      {
        type: 'text',
        name: 'engineerEmail',
        message: "Please enter the Engineer's email address:"
      },
      {
        type: 'text',
        name: 'engineerGithub',
        message: "Please enter the Engineer's github username:"
      }
    ])
  } else if (choice.selection === 'Intern') {
    console.log(`
==============
Add New Intern
==============
`);
    return inquirer.prompt([
      {
        type: 'text',
        name: 'internName',
        message: "Please enter the Intern's name:"
      },
      {
        type: 'text',
        name: 'internId',
        message: "Please enter the Intern's Employee ID:"
      },
      {
        type: 'text',
        name: 'internEmail',
        message: "Please enter the Intern's email address:"
      },
      {
        type: 'text',
        name: 'internSchool',
        message: "Please enter the Intern's school:"
      }
    ])
  } else {
    return;
  }
}

const buildTeam = () => {
  fs.writeFileSync('./dist/index.html', render(team), 'utf-8');
}

promptManager()
  .then(manager => {
    const newManager = new Manager(manager.managerName, manager.managerId, manager.managerEmail, manager.managerOffice);
    console.log(newManager);
    team.push(newManager);
  })
  .then(() => {
    return handleNewUsers();
  })
  .catch(err => {
    console.log(err);
  });