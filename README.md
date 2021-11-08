# Team Profile Generator
[![License](https://img.shields.io/badge/License-ISC-red.svg)](https://opensource.org/licenses/ISC)

![README-screenshot](https://user-images.githubusercontent.com/85750642/140678072-62eb1d84-6248-48be-9926-0e468ffaf400.jpg)

<a href = "https://watch.screencastify.com/v/wLVLia4TZDTlVZiMDOiY">Click here to view my walkthrough video!</a>

## Description
Team Profile Generator is an application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person! This project utilizes HTML, CSS, JavaScript, Node.js, Inquirer, and Jest.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

<a name="install"></a>
## Installation
In order to successfully use this project, the user must have Node.js installed on their machine.  This will give the user access to a number of Node's modules, most importantly 'file system'.  Before installing inquirer, the user should create a 'package.json' file in their root directory by typing 'npm init' in the command line terminal. Also, the user should create a .gitignore file in their root directory and add at least 'node_modules' and '.DS_Store' to the file.  Then, the user should install inquirer and jest to their project by typing 'npm install inquirer' and 'npm install jest' in the command line terminal. This will add both inquirer and jest as a dependencies within the 'package.json' file, create a 'package-lock.json file', and create the ignored 'node_modules' folder.  Lastly, the user should navigate to the 'package.json' file and ensure that the property of 'test' within the 'scripts' object is set to 'jest'.

<a name="usage"></a>
## Usage
* This project allows a user to create a webpage with summaries of each employee on a software engineering team.
* When the user enters 'node index.js' in the command line terminal, they are presented with questions pertaining to the Team Manager.
* When the user finishes answering those questions, they are prompted with whether or not to add either an Engineer or Intern to their team, or to finish building their team.
* When the user chooses to add an Engineer, they are presented with questions pertaining to an Engineer.
* When the user finishes answering those questions, they are again prompted with whether or not to add either an Engineer or Intern to their team, or to finish building their team.
* When the user chooses to add an Intern, they are presented with questions pertaining to an Intern.
* When the user finishes answering those questions, they are again prompted with whether or not to add either an Engineer or Intern to their team, or to finish building their team.
* When the user chooses to finish building their team, they are notified that the team build is complete and told where to access the index.html file created using their responses.
* When the user views the index.html file in the browser, they are presented with a webpage that displays summaries for each person added to the team.

<a name="license"></a>
## License
Notice: this application is covered under the ISC license.

<a name="contribute"></a>
## Contributing
If you would like to contribute to this project, submit a pull request within the repository.

<a name="tests"></a>
## Tests
In order to test this project, type "npm run test" in the root project directory; the JavaScript testing framework 'Jest' is already installed as a dependency and test files for the Employee, Manager, Engineer, and Intern classes are located in the '__tests__' folder.

<a name="questions"></a>
## Questions
Have more questions about this particular project? Explore one or all of the following options:
* Shoot me an email at <a href = "mailto: mtlankenau@gmail.com">mtlankenau@gmail.com</a>
* Explore my profile on Github by <a href="https://www.github.com/mtlankenau">clicking this link</a>