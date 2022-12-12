import { makeElement, updateDisplay } from "../../utils.js"


export const NegateButton = (value) => {

    const button = makeElement('button', value, ['number', 'calc-button'], value);

    button.addEventListener('click', () => {
        let currentNumber = window.localStorage.getItem('currentNumber');

        currentNumber = (currentNumber.startsWith('-')) ? 
        currentNumber.slice(1) :
        '-' + currentNumber;

        window.localStorage.setItem('currentNumber', currentNumber);
        updateDisplay();
    });

    return button;

}