import { makeElement, updateDisplay, updateLastLine } from "../../utils.js"


export const ClearButton = (value) => {

    const button = makeElement('button', value, ['number', 'calc-button'], value);


    button.addEventListener('click', () => {
        let currentTotal = window.localStorage.getItem('currentTotal')
        let currentNumber = window.localStorage.getItem('currentNumber')
        let calcStack = JSON.parse(window.localStorage.getItem('calcStack'));


        if (currentNumber === '0') {

            window.localStorage.setItem('calcStack', JSON.stringify([]))
            window.localStorage.setItem('currentTotal', '0')

        }
        calcStack = JSON.parse(window.localStorage.getItem('calcStack'));
        window.localStorage.setItem('currentNumber', '0')

        updateLastLine(calcStack);

        updateDisplay(true);
    })

    return button;

}