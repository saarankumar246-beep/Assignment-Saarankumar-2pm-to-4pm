function calculate(num1, num2, operator) {
  try {
    // Check for empty inputs
    if (num1 === "" || num2 === "") {
      throw new Error("Inputs cannot be empty");
    }

    // Convert to numbers
    num1 = Number(num1);
    num2 = Number(num2);

    // Check for valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Inputs must be numbers");
    }

    // Perform calculation
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          throw new Error("Cannot divide by zero");
        }
        result = num1 / num2;
        break;
      default:
        throw new Error("Invalid operator");
    }

    console.log("Result:", result);
  } catch (error) {
    console.log("Calculator Error:", error.message);
  }
}

calculate(10, 2, "/"); 
calculate(10, 0, "/");   
calculate("a", 5, "+");  
calculate("", 5, "+");