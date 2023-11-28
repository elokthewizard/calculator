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
let operator = '';
let result = '';
let lastResult = '';
let operands = [];

let operatorWasClicked = false;
let lastClickWasEquals = false;

const calculator = document.querySelector('#Calculator');
const display = document.querySelector('input');

calculator.addEventListener('click', handleClick);

function handleClick(e) {
    const buttonClicked = e.target;
    const buttonText = buttonClicked.textContent;;
    
    if (buttonClicked.id === ('clear')) {
        console.log('clearing...')
        clearData();
    } else if (buttonClicked.id === ('equals')) {
        console.log('calculating...')
        operate();
    } else if (buttonClicked.className === 'operator') {
        console.log('operator selected...')
        opWasClicked(buttonText);
    } else {
        display.value += buttonText;
    }
    if (lastClickWasEquals) {
        clearDisplay()
        display.value = result;
        lastClickWasEquals = false;
    }
};

function clearDisplay() {
    display.value = '';
}

function clearData() {
    clearDisplay();
    firstOperand = '';
    secondOperand = '';
    operator = '';
    result = '';
    lastResult = '';
    operatorWasClicked = false;
    lastClickWasEquals = false;
}

function opWasClicked(buttonText) {
    operatorWasClicked = true;
    operator = buttonText;
    operands.push(display.value)
    firstOperand = operands[0];
    clearDisplay();
}

function operate() {
    operands.push(display.value)
    secondOperand = operands[1];
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);
    console.log(firstOperand);
    console.log(secondOperand);
    console.log(operator);

    switch (operator) {
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
    console.log(result)
    lastResult = result;
    lastClickWasEquals = true;
    operatorWasClicked = false;
}