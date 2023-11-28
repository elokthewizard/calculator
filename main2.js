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

