let student = {
  name: "Alex",
  age: 16,
  grade: "A"
};

for (let key in student) {
  console.log(key + ": " + student[key]);
}
