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
const input = document.querySelector('input');
const button = document.querySelector('button')

calculator.addEventListener('click', e => {
    input.value += e.target.textContent;
});

// const operand1 = null
// const operand2 = null
// const operator = null

// const operate = function(firstOne, secondOne, operator) {
//     return (firstOne, operator, secondOne)
// }