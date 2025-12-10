// ======== VARIABLES ==========
let clickCount = 0;

// ======== BUTTON INTERACTION ==========
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  clickCount++;
  console.log("Button clicked! Count =", clickCount);
});

// ======== FORM INTERACTION ==========
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page reload

  const name = document.getElementById("nameInput").value;
  console.log("Form submitted. Name entered:", name);

  alert("Hello, " + name + "!");
});

// JS Loaded check
console.log("JavaScript file loaded successfully!");
