// Incorrect code
function checkPass(marks) {
  if (marks > 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

checkPass(50);


// corrected code
function checkPass(marks) {
  if (marks >= 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

checkPass(50);

