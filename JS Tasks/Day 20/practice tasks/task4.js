class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    // Method to display employee info
    displayInfo() {
      console.log(`Name: ${this.name}, Salary: $${this.salary}`);
    }
  }
  
  // Create an employee instance
  let emp1 = new Employee("Alice", 50000);
  
  // Call the method
  emp1.displayInfo();
  