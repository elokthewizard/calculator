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

let operand1 = '';
let operand2 = '';
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
    if (buttonClicked.className === "number") {
        display.value += buttonText
    }
}