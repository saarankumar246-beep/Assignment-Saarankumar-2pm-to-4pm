const user = {
  name: "John",
  email: "john@example.com",
  age: 25
};

const jsonString = JSON.stringify(user);
console.log(jsonString);


const jsonData = '{"name":"John","email":"john@example.com","age":25}';

const userObject = JSON.parse(jsonData);
console.log(userObject.name);