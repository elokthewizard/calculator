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
    return (a/b)
};

const calculator = document.querySelector('#Calculator');
const display = document.querySelector('input');
const button = document.querySelector('button')
let lastButtonClickedWasEquals = false;
let lastResult;

calculator.addEventListener('click', handleEachClick);

function clearDisplay(){
    display.value = '';
}

function handleEachClick(e) {
    const buttonClicked = e.target;
    const buttonText = buttonClicked.textContent;

    if (lastButtonClickedWasEquals){
        clearDisplay();
        lastButtonClickedWasEquals = false;
    }

    if (buttonClicked.id === 'clear'){
        clearDisplay();
    } else if (buttonClicked.id === 'equals') {
        handleEqualsButtonClick()
    } else {
        display.value += buttonText;
    }
};

function parseExpression(expression) {
    const elements = expression.split(/(\D)/);
    const operand1 = elements[0] === '' ? lastResult : parseInt(elements[0]);
    const operand2 = parseInt(elements[2]);
    const operator = elements[1];
    return { operand1, operand2, operator};
}

function handleEqualsButtonClick() {
    const expression = display.value;
    const {operand1, operand2, operator} = parseExpression(expression);

    if (isNaN(operand1) || isNaN(operand2)) {
        console.error("Invalid Operands");
        return;
    }

    let result;

    switch (operator) {
        case '+':
            result = add(operand1,operand2)
            break;
        case '-':
            result = subtract(operand1,operand2)
            break;
        case '*':
            result = multiply(operand1,operand2)
            break;
        case "/":
            result = divide(operand1,operand2)
            break;
        default:
            console.error("Invalid Operator")
    };

    lastResult = result;
    display.value = result;
    lastButtonClickedWasEquals = true;
};






// const operand1 = null
// const operand2 = null
// const operator = null

// const operate = function(firstOne, secondOne, operator) {
//     return (firstOne, operator, secondOne)
// }