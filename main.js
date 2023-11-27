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

calculator.addEventListener('click', e => {

    display.value += e.target.textContent;

    if (e.target.id == "clear") {
        display.value = ''
    }

    if (e.target.id == "equals"){
        let expression = display.value
        let elements = expression.split(/(\D)/);
        
        let operand1 = parseInt(elements[0]);
        let operand2 = parseInt(elements[2]);
        let operator = elements[1];
    
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
        }
        display.value = result;
    
    };
});



// const operand1 = null
// const operand2 = null
// const operator = null

// const operate = function(firstOne, secondOne, operator) {
//     return (firstOne, operator, secondOne)
// }