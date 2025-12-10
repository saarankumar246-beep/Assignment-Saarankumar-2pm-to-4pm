// IIFE to protect global scope
(() => {
  // Reusable function to calculate tip
  const calculateTip = (bill, tipPercent, people) => {
    const tipAmount = (bill * tipPercent) / 100;
    const totalPerPerson = (bill + tipAmount) / people;
    return { tipAmount, totalPerPerson };
  };

  // Reusable function to update the DOM
  const updateResults = ({ tipAmount, totalPerPerson }) => {
    document.getElementById('tip-amount').textContent = `Tip: $${tipAmount.toFixed(2)}`;
    document.getElementById('total-amount').textContent = `Total per Person: $${totalPerPerson.toFixed(2)}`;
  };

  // Arrow function as event callback
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    const bill = parseFloat(document.getElementById('bill').value);
    const tip = parseFloat(document.getElementById('tip').value);
    const people = parseInt(document.getElementById('people').value);

    if (bill > 0 && tip >= 0 && people > 0) {
      const result = calculateTip(bill, tip, people);
      updateResults(result);
    } else {
      alert("Please enter valid numbers!");
    }
  };

  // Attach callback using addEventListener
  document.getElementById('tip-form').addEventListener('submit', handleFormSubmit);

})();
