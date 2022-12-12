import { makeElement, updateDisplay, updateLastLine, newLastLine } from "../../utils.js"


export const EqualsButton = (value) => {

    const button = makeElement('button', 'equals', ['calc-button', 'right-bottom-corner'], value);
    let newTotal;

    button.addEventListener('click', () => {

        let currentNumber = window.localStorage.getItem('currentNumber')
        let currentTotal = window.localStorage.getItem('currentTotal');
        let calcStack = JSON.parse(window.localStorage.getItem('calcStack'));

        //have to adjust for button being pressed twice
        if (currentNumber !== '0') {
            if (calcStack) {
                calcStack.push(parseFloat(currentNumber));
            } else {
                calcStack = (parseFloat(currentNumber));
            }
        } else {
            calcStack.pop();
        }

        window.localStorage.setItem('calcStack', JSON.stringify([]))

        let calcStackWithSum = [...calcStack];
        calcStackWithSum.push(' = ');
        
        if (calcStack.length === 0){
            if(currentTotal === '0'){
                newTotal = '0';
            } else {
                console.log('wtf')
                newTotal = window.localStorage.getItem('currentTotal');
            }
        } else {
            newTotal = solveProblemArray(calcStack);
        }

        calcStackWithSum.push(newTotal);
        updateLastLine(calcStackWithSum);

        console.log("this is calcstack pop" + newTotal)

        window.localStorage.setItem('currentNumber', '0');
        window.localStorage.setItem('currentTotal', newTotal);

        updateDisplay(true);
        newLastLine();
        
    })

    return button;

}