// import Intern class
const Intern = require('../lib/Intern');

// tests that check for object properties
test("checks for Intern's name property", () => {
  const intern = new Intern('Winston');
  expect(intern.name).toBe('Winston');
})

test("checks for Intern's id property", () => {
  const intern = new Intern('Winston', '389120');
  expect(intern.id).toBe('389120');
})

test("checks for Intern's email property", () => {
  const intern = new Intern('Winston', '389120', 'winstontheintern@gmail.com');
  expect(intern.email).toBe('winstontheintern@gmail.com');
})

test("checks for Intern's school property", () => {
  const intern = new Intern('Frank', '389120', 'winstontheintern@gmail.com', 'University of Coding');
  expect(intern.school).toBe('University of Coding');
})

// tests that check for values returned from object methods
test("checks for Intern's name that is returned using the getName() method", () => {
  const name = new Intern('Winston');
  expect(name.getName()).toBe('Winston');
})

test("checks for Intern's id that is returned using the getId() method", () => {
  const id = new Intern('Winston', '389120');
  expect(id.getId()).toBe('ID: 389120');
})

test("checks for Intern's email that is returned using the getEmail() method", () => {
  const email = new Intern('Winston', '389120', 'winstontheintern@gmail.com');
  expect(email.getEmail()).toBe('Email: winstontheintern@gmail.com');
})

test("checks for Intern's school that is returned using the getSchool() method", () => {
  const school = new Intern('Winston', '389120', 'winstontheintern@gmail.com', 'University of Coding');
  expect(school.getSchool()).toBe('School: University of Coding');
})

test("checks for Intern's role that is returned using the getRole() method", () => {
  const role = new Intern;
  expect(role.getRole()).toBe('Intern');
})