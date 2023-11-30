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
    if (buttonClicked.id === 'clear') {
        initializeData();
    }
    const buttonText = buttonClicked.textContent;
    if (buttonClicked.className === 'number') {
        if (operator2 != '') {
            clearDisplay();    
        }
        display.value += buttonText
        display.value = display.value.substring(0,9)
    }
    
    if (buttonClicked.className === 'operator' && display.value !== '') {
        if (firstOperand !== '' && operator1 !== '') {
            secondOperand = display.value;
            console. log('second operand is: ' + secondOperand)

            // check if operation can be performed
            if (isValidOperation(firstOperand,secondOperand,operator1)){
                operate(firstOperand,secondOperand,operator1)
                firstOperand = lastResult;
                operator2 = buttonText;
                console.log('new operand/ lastResult is ' + firstOperand)
                console.log('operator 2 is: ' + operator2)
            } else {
                console.error('Invalid Operation');
            }
        } else {
        firstOperand = display.value;
        console.log(' operand is: ' + firstOperand);
        operator1 = buttonText;
        console.log('operator1 is: ' + operator1)
        clearDisplay();
        }
    }
    
    if (buttonClicked.id === 'equals') {
        if (firstOperand !== '' && operator1 !== '') {
            secondOperand = display.value;
            operate(firstOperand,secondOperand,operator1);
        }
        

    }
}

function clearDisplay() {
    display.value = '';
}

function initializeData() {
    clearDisplay();
    firstOperand = '';
    secondOperand = '';
    operator1 = '';
    operator2 = '';
    result = '';
    lastResult = '';
}

function operate(firstOperand,secondOperand,operator) {
    firstOperand = parseFloat(firstOperand);
    secondOperand = parseFloat(secondOperand);

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
    lastResult = result
    clearDisplay()
    display.value = result;
}


function isValidOperation(firstOperand,secondOperand,operator) {
    if (operator === '/' && secondOperand === 0) {
        console.error('cannot divide by zero')
        return false;
    } else {
        return true;
    }
}