function calculateBill() {
    // Store user inputs
    let name = document.getElementById("customerName").value;
    let age = parseInt(document.getElementById("customerAge").value);
    let price = parseFloat(document.getElementById("mealPrice").value);
    let tipPercent = parseFloat(document.getElementById("tipPercent").value);

    // Validate form fields
    if (!name || isNaN(age) || isNaN(price)) {
        document.getElementById("result").innerHTML =
            "<span style='color:red'>Please fill out all fields correctly.</span>";
        return;
    }

    // Calculate values
    let tip = price * (tipPercent / 100);
    let tax = price * 0.08; // 8% tax
    let discount = 0;

    // Decision-based logic: senior discount
    if (age >= 60) {
        discount = price * 0.15; // 15% discount
    }

    let total = price + tax + tip - discount;

    // Display results
    document.getElementById("result").innerHTML = `
        <strong>Bill Summary for ${name}</strong><br><br>
        Meal Price: $${price.toFixed(2)} <br>
        Tax (8%): $${tax.toFixed(2)} <br>
        Tip (${tipPercent}%): $${tip.toFixed(2)} <br>
        Discount: $${discount.toFixed(2)} <br><br>
        <strong>Total to Pay: $${total.toFixed(2)}</strong>
    `;
}
