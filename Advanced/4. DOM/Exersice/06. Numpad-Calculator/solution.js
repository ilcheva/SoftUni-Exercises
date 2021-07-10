function solve() {
    let expression = document.getElementById("expressionOutput");
    let result = document.getElementById("resultOutput");

    document.querySelector('.keys').addEventListener('click', symbolClicked);
    document.querySelector('.clear').addEventListener('click', clear);

    function clear() {
        expression.textContent = '';
        result.textContent = '';
    }
    function symbolClicked(event) {
        let buttonPressed = event.target.value;
        switch (buttonPressed) {
            case '/':
            case '*':
            case '+':
            case '-':
                expression.textContent += ` ${buttonPressed} `;
                break;
            case '=':

                let [leftOperand, operator, rigthOperand] = expression.textContent.split(' ');
                if (!leftOperand || !operator) {
                    result.textContent = 'NaN';
                } else {
                    let operation = calculateResult(+leftOperand, operator, +rigthOperand);
                    result.textContent = operation;
                }
                break;
            default:
                expression.textContent += buttonPressed;
        }
    }
    function calculateResult(leftOperand, operator, rigthOperand) {
        switch (operator) {
            case '*':
                return leftOperand * rigthOperand;
            case '+':
                return leftOperand + rigthOperand;
            case '-':
                return leftOperand - rigthOperand;
            case '/':
                return leftOperand / rigthOperand;

        }
    }
}