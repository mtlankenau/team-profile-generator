const Employee = require('./Employee');

class Engineer extends Employee {
  constructor() {
    this.github = ''
  }
  getGithub() {
    return `Github: ${this.github}`;
  }
  getRole() {
    return 'Engineer';
  }
} 