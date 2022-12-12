import { makeElement, updateDisplay } from "../../utils.js"


export const NumberButton = (value) => {

    const button = makeElement('button', value, ['number', 'calc-button'], value);

    if (value == '0') {
        button.classList.add('double-width', 'left-bottom-corner');
    }

    button.addEventListener('click', () => {

        let currentNumber = window.localStorage.getItem('currentNumber');
        currentNumber = currentNumber === '0' ? value : currentNumber + value;
        window.localStorage.setItem('currentNumber', currentNumber);
        updateDisplay();
    });
    
    return button;

}