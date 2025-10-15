let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

function clickNumber(num) {
    currentNumber += num.toString();
    display.value = currentNumber;
}

function clickOperator(op) {
    if (currentNumber !== '') {
        previousNumber = currentNumber;
        currentNumber = '';
        operator = op;
    }
}

function clickDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        display.value = currentNumber;
    }
}

function calculate() {
    if (currentNumber !== '' && previousNumber !== '') {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(previousNumber) + parseFloat(currentNumber);
                break;
            case '-':
                result = parseFloat(previousNumber) - parseFloat(currentNumber);
                break;
            case '*':
                result = parseFloat(previousNumber) * parseFloat(currentNumber);
                break;
            case '/':
                if (currentNumber !== '0') {
                    result = parseFloat(previousNumber) / parseFloat(currentNumber);
                } else {
                    result = 'Error';
                }
                break;
            default:
                result = '';
        }
        display.value = result.toString();
        currentNumber = result.toString();
        previousNumber = '';
        operator = '';
    }
}

function clearDisplay() {
    display.value = '';
    currentNumber = '';
    previousNumber = '';
    operator = '';
}