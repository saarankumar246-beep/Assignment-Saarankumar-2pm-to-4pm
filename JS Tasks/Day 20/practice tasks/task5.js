// Employee class
class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}, Salary: $${this.salary}`);
    }
  }
  
  // Manager class inherits from Employee
  class Manager extends Employee {
    constructor(name, salary, department) {
      super(name, salary); // Call parent constructor
      this.department = department;
    }
  
    // Override or extend displayInfo
    displayInfo() {
      console.log(`Name: ${this.name}, Salary: $${this.salary}, Department: ${this.department}`);
    }
  }
  
  // Create a manager instance
  let mgr1 = new Manager("Bob", 80000, "IT");
  
  // Call the method
  mgr1.displayInfo();
  