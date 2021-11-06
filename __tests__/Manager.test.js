// import Manager class
const Manager = require('../lib/Manager');

// tests that check for object properties
test("checks for Manager's name property", () => {
  const manager = new Manager('Tiffany');
  expect(manager.name).toBe('Tiffany');
})

test("checks for Manager's id property", () => {
  const manager = new Manager('Tiffany', '10101');
  expect(manager.id).toBe('10101');
})

test("checks for Manager's email property", () => {
  const manager = new Manager('Tiffany', '10101', 'tiffanythemanager@gmail.com');
  expect(manager.email).toBe('tiffanythemanager@gmail.com');
})

// tests that check for values returned from object methods
test("checks for Manager's name that is returned using the getName() method", () => {
  const name = new Manager('Tiffany');
  expect(name.getName()).toBe('Tiffany');
})

test("checks for Manager's id that is returned using the getId() method", () => {
  const id = new Manager('Tiffany', '10101');
  expect(id.getId()).toBe('ID: 10101');
})

test("checks for Manager's email that is returned using the getEmail() method", () => {
  const email = new Manager('Tiffany', '10101', 'tiffanythemanager@gmail.com');
  expect(email.getEmail()).toBe('Email: tiffanythemanager@gmail.com');
})

test("checks for Manager's role that is returned using the getRole() method", () => {
  const role = new Manager;
  expect(role.getRole()).toBe('Manager');
})