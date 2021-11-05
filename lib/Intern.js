const Employee = require('./Employee');

class Intern extends Employee {
  constructor() {
    this.school = ''
  }
  getSchool() {
    return `School: ${this.school}`;
  }
  getRole() {
    return 'Intern';
  }
} 