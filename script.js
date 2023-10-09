// Constants
const HOTDOG_PRICE = 3.75;
const FRIES_PRICE = 3.00;
const SODA_PRICE = 2.50;
const TAX_RATE = 0.0625; // 6.25%

/*
formatcurrecy()
Parameters: amount (number) to turn into currency
Returns: formatted currency string
Purpose: formats with two decimals per spec
*/
function formatCurrency(amount) {
    // Round the amount to two decimal places
    const roundedAmount = Math.round(amount * 100) / 100;

    // Convert to a string
    const amountString = roundedAmount.toString();

    // Check if the string already has two decimal places
    if (amountString.indexOf('.') === -1) {
        // If no decimal part, add '.00'
        return '$' + amountString + '.00';
    } else {
        // Split the string into parts
        const parts = amountString.split('.');
        
        // If there's only one digit after the decimal point, add a '0'
        if (parts[1].length === 1) {
            parts[1] += '0';
        }

        // Join the parts back together with a '.'
        return '$' + parts.join('.');
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
        <p>Hotdogs: ${numDogs} x ${formatcurrency(HOTDOG_PRICE)} = ${formatcurrency(numDogs * HOTDOG_PRICE)}</p>
        <p>French Fries: ${numFries} x ${formatcurrency(FRIES_PRICE)} = ${formatcurrency(numFries * FRIES_PRICE)}</p>
        <p>Drinks: ${numSodas} x ${formatcurrency(SODA_PRICE)} = ${formatcurrency(numSodas * SODA_PRICE)}</p>
        <p>Subtotal: ${formatcurrency(subtotal)}</p>
        <p>Discount: ${formatcurrency(discount)}</p>
        <p>Tax: ${formatcurrency(taxAmount)}</p>
        <h3>Total: ${formatcurrency(finalTotal)}</h3>
    `;

    // Set the HTML content of the order details div
    orderDetailsDiv.innerHTML = orderDetailsHTML;
}

