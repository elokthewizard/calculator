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

    if (buttonClicked.tagName !== 'BUTTON'){
        return;
    }

    const buttonText = buttonClicked.textContent;
    
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
        operands = [];
        clearDisplay()
        display.value = result;
        lastClickWasEquals = false;
    }
};

function opWasClicked(buttonText) {
    if (lastClickWasEquals) {
        firstOperand = lastResult;
        operatorWasClicked = false;
    }
    if (operatorWasClicked) {
        secondOperand = display.value;
        operands.push(secondOperand);
        operate();
    } else {
        firstOperand = display.value;
        operands.push(firstOperand);
        clearDisplay();
    }
    operator = buttonText;
    operatorWasClicked = true;
}

function operate() {
    operands.push(display.value)
    firstOperand = parseFloat(operands[0])
    secondOperand = parseFloat(operands[1])

    switch (operator.toString()) {
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
    lastResult = result;
    lastClickWasEquals = true;
    operatorWasClicked = false;
    console.log('lastResult:' + lastResult)
}

function clearDisplay() {
    display.value = '';
}

function clearData() {
    clearDisplay();
    firstOperand = '';
    secondOperand = '';
    operator = '';
    operands = [];
    result = '';
    lastResult = '';
    operatorWasClicked = false;
    lastClickWasEquals = false;
}