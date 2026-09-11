function calculateTip(percent) {
    const bill = parseFloat(document.getElementById("bill").value);

    if (isNaN(bill) || bill <= 0) {
        alert("Please enter a valid bill amount.");
        return;
    }

    const tip = bill * percent;
    const total = bill + tip;

    document.getElementById("tipAmount").textContent = `Tip: $${tip.toFixed(2)}`;
    document.getElementById("totalAmount").textContent = `Total: $${total.toFixed(2)}`;
}