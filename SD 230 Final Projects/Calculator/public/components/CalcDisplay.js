
import { makeElement } from "../utils.js"


export const CalcDisplay = () => {

    const currentNumber = window.localStorage.getItem(('currentNumber') || '0');

    return makeElement('div', 'display', [], currentNumber);
}