class Employee {
  constructor() {
      this.name = '',
      this.id = '',
      this.email = ''
    }
    getName() {
      return `${this.name}`
    }
    getId() {
      return `ID: ${this.id}`
    }
    getEmail() {
      return `Email: ${this.email}`
    }
    getRole() {
      return 'Employee';
    }
  }

module.exports = Employee;