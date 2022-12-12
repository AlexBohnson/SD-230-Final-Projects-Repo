import { makeElement, updateDisplay } from "../../utils.js"


export const PercentButton = (value) => {

    const button = makeElement('button', value, ['number', 'calc-button'], value);

    button.addEventListener('click', () => {
        let currentNumber = window.localStorage.getItem('currentNumber')
        let calcStack = window.localStorage.getItem('calcStack')

        if (currentNumber !== '0') {
            window.localStorage.setItem('currentNumber', (parseFloat(currentNumber) / 100).toString());
            updateDisplay();
        }
    })


    return button;

}