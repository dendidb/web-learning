JS Destructuring ES 6
--

const person = {
  firstName: 'John',
  lastName: 'DOe',
  body: {
    height: 'Doe',
    weight: '65kg',
  }
}

const {firstName, lastName, body} = person;

console.log(firstName);