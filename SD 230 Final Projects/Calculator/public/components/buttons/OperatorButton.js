import { makeElement, updateDisplay, updateLastLine } from "../../utils.js"


export const OperatorButton = (value) => {

    const button = makeElement('button', value, ['number', 'calc-button'], value);


    button.addEventListener('click', () => {

        let currentNumber = window.localStorage.getItem('currentNumber');
        let calcStack = JSON.parse(window.localStorage.getItem('calcStack'));
        let currentTotal = window.localStorage.getItem('currentTotal');

        if (currentNumber !== '0') {
            if (calcStack) {
                calcStack.push(parseFloat(currentNumber));
            } else {
                calcStack = (parseFloat(currentNumber));
            }
            calcStack.push(value)
        } else if (calcStack.length === 0){
            calcStack.push(currentTotal);
            calcStack.push(value);
        } else {
            calcStack.pop();
            calcStack.push(value);
        }

        window.localStorage.setItem('calcStack', JSON.stringify(calcStack));

        if (calcStack.length <= 2 ) {
            currentTotal = calcStack[0];
        } else {

            //this is where i get NaN problem.
            currentTotal = solveProblemArray(calcStack.slice(0, (calcStack.length - 1)));
        }

        window.localStorage.setItem('currentTotal', currentTotal);
        window.localStorage.setItem('currentNumber', '0');

        updateLastLine(calcStack);
        updateDisplay(true);

    });

    return button;

}