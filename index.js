const inquirer = require('inquirer');

const promptUser = () => {
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
    },
    {
      type: 'confirm',
      name: 'confirmTeam',
      message: 'Would you like to add more members to your team?',
      deafult: true
    },
    {
      type: 'list',
      name: 'newTeamMember',
      message: 'Please add another team member:',
      choices: ['Engineer', 'Intern'],
      when: ({ confirmTeam }) => {
        if (confirmTeam === true) {
          return true;
        } else {
          return false;
        }
      }
    }
  ])
};

const promptNewTeamMember = teamMember => {
  if (teamMember === 'Engineer') {
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
        name: 'enginnerId',
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
  } else if (teamMember === 'Intern') {
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
  } 
}

const confirmTeamBuild = () => {
  console.log(`
=======================
Team Build Confirmation
=======================
`)
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmFinish',
      message: 'Are you now finished with building your team?',
      deafult: false
    },
    {
      type: 'list',
      name: 'newTeamMember',
      message: 'Please add another team member:',
      choices: ['Engineer', 'Intern'],
      when: ({ confirmFinish }) => {
        if (confirmFinish === true) {
          return false;
        } else {
          return true;
        }
      }
    }
  ])
}

promptUser()
  .then(manager => {
    console.log(manager);
    console.log(manager.newTeamMember);
    return manager.newTeamMember;
  })
  .then(promptNewTeamMember)
  .then(newTeamMember => {
    console.log(newTeamMember);
    return newTeamMember;
  })
  .then(confirmTeamBuild)
  .then(confirmTeamBuildResponse => {
    if (confirmTeamBuildResponse.confirmFinish === false) {
      promptNewTeamMember(confirmTeamBuildResponse.newTeamMember);
    }
  })
  .catch(err => {
    console.log(err);
  });