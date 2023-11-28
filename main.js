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

const calculator = document.querySelector('#Calculator');
const display = document.querySelector('input');
const button = document.querySelector('button')
let lastButtonClickedWasEquals = false;
let anOperatorWasClicked = false;
let lastResult;
let firstOperand = '';
let secondOperand = '';
let operator = '';

calculator.addEventListener('click', handleEachClick); // listen for click and do stuff when detected

function operatorWasClicked() {
    if (display.value !== '') {
        firstOperand = display.value;
        clearDisplay();
        console.log("opClickFO " + firstOperand)
        anOperatorWasClicked = true;
    }
}

function clearDisplay(){
    display.value = ''; // set value of display to empty string when called
}

function handleEachClick(e) {
    const buttonClicked = e.target;
    const buttonText = buttonClicked.textContent;

    if (lastButtonClickedWasEquals){
        clearDisplay();
        lastButtonClickedWasEquals = false; // clear display and set flag back 
    }

    if (buttonClicked.id === 'clear'){
        clearDisplay();
        firstOperand = '';
        secondOperand = '';
        operator = '';
        anOperatorWasClicked = false;
    } else if (buttonClicked.id === 'equals') {
        handleEqualsButtonClick()
    } else if (buttonClicked.className === 'operator') {
        operator = buttonClicked.textContent;
        operatorWasClicked()
    } else if (anOperatorWasClicked) {
        display.value += buttonText
        secondOperand = display.value;
        console.log(secondOperand)
        anOperatorWasClicked = false;
    } else {
        display.value += buttonText;
    }
};

function handleEqualsButtonClick() {
    firstOperand = parseInt(firstOperand);
    secondOperand = parseInt(secondOperand);
    let result;

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
        case "/":
            result = divide(firstOperand,secondOperand)
            break;
        default:
            console.error("Invalid Operator")
    };

    firstOperand = result;
    display.value = result;
    lastButtonClickedWasEquals = true;
};

