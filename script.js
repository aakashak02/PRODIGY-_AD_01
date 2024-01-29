let currentInput = '';
let operator = '';
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    currentInput += ' ' + operator + ' ';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        currentInput = result.toString();
        updateDisplay();
        resultDisplayed = true;
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
        resultDisplayed = true;
    }
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
