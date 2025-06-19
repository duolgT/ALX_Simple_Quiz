// 1. Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Handle division by zero
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

// 2. Helper function to get input values and update the result
function calculate(operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    let result;

    switch (operation) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = divide(number1, number2);
            break;
    }

    document.getElementById('calculation-result').textContent = result;
}

// 3. Attach event listeners to each button
document.getElementById('add').addEventListener('click', function () {
    calculate('add');
});

document.getElementById('subtract').addEventListener('click', function () {
    calculate('subtract');
});

document.getElementById('multiply').addEventListener('click', function () {
    calculate('multiply');
});

document.getElementById('divide').addEventListener('click', function () {
    calculate('divide');
});
