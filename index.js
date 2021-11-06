const inquirer = require('inquirer');
const team = [];

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
    }
  ])
};

const promptMemberChoice = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'confirmTeam',
      message: 'Would you like to add more members to your team?',
      choices: ['Engineer', 'Intern', "No, I'm finished building my team"]
    }
  ])
}

const handleNewUsers = () => {
  promptMemberChoice()
    .then(newMember => {
      console.log(newMember);
      if (newMember.confirmTeam === 'Engineer' || newMember.confirmTeam === 'Intern') {
        return promptNewTeamMember(newMember);
      } else {
        return console.log(team);
      }
    })
    .then(newTeamMember => {
      if (!newTeamMember) {
        console.log('No new member exists');
        return;
      } else {
        team.push(newTeamMember);
        return handleNewUsers();
      }
    })
}


const promptNewTeamMember = choice => {
  if (choice.confirmTeam === 'Engineer') {
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
  } else if (choice.confirmTeam === 'Intern') {
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

const generateTemplateHTML = teamMembersArray => {
  const templateHTML = 
`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <header>
    <h1>My Team</h1>
  </header>
  <section>
    ${generateManager(teamMembersArray[0])}
  </section>
</body>
</html>

`
}

// const confirmTeamBuild = () => {
//   console.log(`
// =======================
// Team Build Confirmation
// =======================
// `)
//   return inquirer.prompt([
//     {
//       type: 'confirm',
//       name: 'confirmFinish',
//       message: 'Are you now finished with building your team?',
//       deafult: false
//     },
//     {
//       type: 'list',
//       name: 'newTeamMember',
//       message: 'Please add another team member:',
//       choices: ['Engineer', 'Intern'],
//       when: ({ confirmFinish }) => {
//         if (confirmFinish === true) {
//           return false;
//         } else {
//           return true;
//         }
//       }
//     }
//   ])
// }

promptUser()
  .then(manager => {
    team.push(manager);
    return manager;
  })
  .then(() => {
    return handleNewUsers();
  })
  .then(() => {
    return generateTemplateHTML(team);
  })
  // .then(newMember => {
  //   console.log(newMember);
  //   if (newMember.confirmTeam === 'Engineer' || newMember.confirmTeam === 'Intern') {
  //     return promptNewTeamMember(newMember);
  //   } else {
  //     return;
  //   }
  // })
  // .then(newTeamMember => {
  //   // console.log(newTeamMember);
  //   // console.log(team);
  //   if (!newTeamMember) {
  //     console.log('No new member exists');
  //     return;
  //   } else {
  //     team.push(newTeamMember);
  //     return promptMemberChoice();
  //   }
  // })
  // .then(confirmTeamBuild)
  // .then(confirmTeamBuildResponse => {
  //   for (let i = 0; i < team.length; i++) {
  //     if (confirmTeamBuildResponse.confirmFinish === false) {
  //       return promptNewTeamMember(confirmTeamBuildResponse);
  //     }
  //   }
  // })
  .catch(err => {
    console.log(err);
  });