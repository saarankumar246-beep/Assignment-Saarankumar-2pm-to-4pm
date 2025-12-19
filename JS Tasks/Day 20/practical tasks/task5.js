function Student(name, age) {
  this.name = name;
  this.age = age;
}

const s1 = new Student("Saaran", 20);
const s2 = new Student("Vijay", 22);

// Add method dynamically
Student.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

s1.greet();
s2.greet();
