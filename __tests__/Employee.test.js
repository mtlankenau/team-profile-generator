// import Employee class
const Employee = require('../lib/Employee');

// tests that check for object properties
test("checks for Employee's name property", () => {
  const employee = new Employee('Mike');
  expect(employee.name).toBe('Mike');
})

test("checks for Employee's id property", () => {
  const employee = new Employee('Mike', '392503');
  expect(employee.id).toBe('392503');
})

test("checks for Employee's email property", () => {
  const employee = new Employee('Mike', '392503', 'mtlankenau@gmail.com');
  expect(employee.email).toBe('mtlankenau@gmail.com');
})

// tests that check for values returned from object methods
test("checks for Employee's name that is returned using the getName() method", () => {
  const name = new Employee('Mike');
  expect(name.getName()).toBe('Mike');
})

test("checks for Employee's id that is returned using the getId() method", () => {
  const id = new Employee('Mike', '392503');
  expect(id.getId()).toBe('392503');
})

test("checks for Employee's email that is returned using the getEmail() method", () => {
  const email = new Employee('Mike', '392503', 'mtlankenau@gmail.com');
  expect(email.getEmail()).toBe('mtlankenau@gmail.com');
})

test("checks for Employee's role that is returned using the getRole() method", () => {
  const role = new Employee;
  expect(role.getRole()).toBe('Employee');
})
