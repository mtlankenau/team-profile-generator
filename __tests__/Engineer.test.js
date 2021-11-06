// import Engineer class
const Engineer = require('../lib/Engineer');

// tests that check for object properties
test("checks for Engineer's name property", () => {
  const engineer = new Engineer('Frank');
  expect(engineer.name).toBe('Frank');
})

test("checks for Engineer's id property", () => {
  const engineer = new Engineer('Frank', '703715');
  expect(engineer.id).toBe('703715');
})

test("checks for Engineer's email property", () => {
  const engineer = new Engineer('Frank', '703715', 'franktheengineer@gmail.com');
  expect(engineer.email).toBe('franktheengineer@gmail.com');
})

test("checks for Engineer's github property", () => {
  const engineer = new Engineer('Frank', '703715', 'franktheengineer@gmail.com', 'frankgithub');
  expect(engineer.github).toBe('frankgithub');
})

// tests that check for values returned from object methods
test("checks for Engineer's name that is returned using the getName() method", () => {
  const name = new Engineer('Frank');
  expect(name.getName()).toBe('Frank');
})

test("checks for Engineer's id that is returned using the getId() method", () => {
  const id = new Engineer('Frank', '703715');
  expect(id.getId()).toBe('ID: 703715');
})

test("checks for Engineer's email that is returned using the getEmail() method", () => {
  const email = new Engineer('Frank', '703715', 'franktheengineer@gmail.com');
  expect(email.getEmail()).toBe('Email: franktheengineer@gmail.com');
})

test("checks for Engineer's github that is returned using the getGithub() method", () => {
  const github = new Engineer('Frank', '703715', 'franktheengineer@gmail.com', 'frankgithub');
  expect(github.getGithub()).toBe('Github: frankgithub');
})

test("checks for Engineer's role that is returned using the getRole() method", () => {
  const role = new Engineer;
  expect(role.getRole()).toBe('Engineer');
})