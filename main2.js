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