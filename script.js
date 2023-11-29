const add = function(a,b) {
    return (a + b);
};

const subtract = function(a,b) {
    return (a - b);
};

const multiply = function(a,b) {
    return (a * b)
};

const divide = function(a,b) {
    return (a / b)
};

let firstOperand = '';
let secondOperand = '';
let operator1 = '';
let operator2 = '';
let result = '';
let lastResult = '';

const calculator = document.querySelector('#Calculator');
const display = document.querySelector('input');

calculator.addEventListener('click', handleClick);

function handleClick(e) {
    const buttonClicked = e.target;
    if (buttonClicked.tagName !== 'BUTTON') {
        return; // if we clicked a non button, return nothing
    }; 
    const buttonText = buttonClicked.textContent;
    if (buttonClicked.className === 'number') {
        display.value += buttonText
    }
    if (buttonClicked.className === 'operator' && display.value !== '') {
        operator1 = buttonText;
        firstOperand = display.value;
        clearDisplay();
    }
    if (buttonClicked.id === 'equals') {
        if (firstOperand !== '' && operator1 !== '') {
            secondOperand = display.value;
            operate();
        }
    }
}

function clearDisplay() {
    display.value = '';
}

function operate() {
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);

    switch (operator1.toString()) {
        case '+':
            result = add(firstOperand,secondOperand)
            break;
        case '-':
            result = subtract(firstOperand,secondOperand)
            break;
        case '*':
            result = multiply(firstOperand,secondOperand)
            break;
        case '/':
            result = divide(firstOperand,secondOperand)
            break;
        default:
            console.error('Invalid operator')
            return;
    }
    lastResult = result
    clearDisplay()
    display.value = result;
}