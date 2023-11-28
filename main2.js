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
        clearData();
    } else if (buttonClicked.id === ('equals')) {
        operate();
        lastClickWasEquals = true;
    } else if (buttonClicked.className === 'operator') {
        operatorWasClicked();
    } else {
        display.value += buttonText;
    }
    if(lastClickWasEquals) {
        clearDisplay()
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
    operator = buttonText;
    operatorWasClicked = true;
    operands.push(display.value)
    firstOperand = operands[0];
    clearDisplay();
}

function operate() {
    if (!operatorWasClicked) {
        console.log('No operator selected')
    
    display.value = parseFloat(display.value)
    return;
    }
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(display.value);

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
    display.value = result;
    lastResult = result;
    operatorWasClicked = false;
}