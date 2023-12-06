let result = document.getElementById('result');
let equation = '';

function appendNumber(num) {
    equation += num;
    result.value = equation;
}

function appendOperator(op) {
    equation += op;
    result.value = equation;
}

function clearResult() {
    equation = '';
    result.value = equation;
}

function calculateResult() {
    try {
        equation = eval(equation);
        result.value = equation;
    } catch (error) {
        result.value = 'Error';
    }
}