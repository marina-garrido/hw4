// Constants
const HOTDOG_PRICE = 3.75;
const FRIES_PRICE = 3.00;
const SODA_PRICE = 2.50;
const TAX_RATE = 0.0625; // 6.25%

/*
formatCurrecy()
Parameters: amount (number) to turn into currency
Returns: formatted currency string
Purpose: formats with two decimals per spec
*/
function formatCurrency(amount) {
    // Round the amount
    const roundedAmount = Math.round(amount * 100) / 100;

    // Convert to string
    const amountString = roundedAmount.toString();

    // Check if the string has two decimal places
    if (amountString.indexOf('.') === -1) {
        return '$' + amountString + '.00'; // If no decimal part
    } else {
        return '$' + amountString; // If existing decimal places
    }
}


/*
calculateorder()
Parameters: nothing
Returns: the final order displayed
Purpose: calculate and display the order
*/
function calculateorder() {
    // Get user input
    const numDogs = parseInt(document.getElementById("hotdogs").value) || 0; // parseInt parses a string and returns an int
    const numFries = parseInt(document.getElementById("fries").value) || 0; // getElementByID retrieves a reference to an HTML element
    const numSodas = parseInt(document.getElementById("sodas").value) || 0;

    // Calculate subtotal
    const subtotal = (numDogs * HOTDOG_PRICE) + (numFries * FRIES_PRICE) + (numSodas * SODA_PRICE);

    // Apply discount if subtotal is $25 or more
    let discount = 0;
    if (subtotal >= 25) {
        discount = subtotal * 0.10;
    }

    // Calculate final total including tax
    const taxAmount = (subtotal - discount) * TAX_RATE;
    const finalTotal = subtotal - discount + taxAmount;

    // Get the div element to display the order details
    const orderDetailsDiv = document.getElementById("order-details");

    // Generate the HTML for order details
    const orderDetailsHTML = `
        <p>Hotdogs: ${numDogs} x ${formatCurrency(HOTDOG_PRICE)} = ${formatCurrency(numDogs * HOTDOG_PRICE)}</p>
        <p>French Fries: ${numFries} x ${formatCurrency(FRIES_PRICE)} = ${formatCurrency(numFries * FRIES_PRICE)}</p>
        <p>Drinks: ${numSodas} x ${formatCurrency(SODA_PRICE)} = ${formatCurrency(numSodas * SODA_PRICE)}</p>
        <p>Subtotal: ${formatCurrency(subtotal)}</p>
        <p>Discount: ${formatCurrency(discount)}</p>
        <p>Tax: ${formatCurrency(taxAmount)}</p>
        <h3>Total: ${formatCurrency(finalTotal)}</h3>
    `;

    // Set the HTML content of the order details div
    orderDetailsDiv.innerHTML = orderDetailsHTML;
}


