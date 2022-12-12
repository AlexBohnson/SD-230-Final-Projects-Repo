import { makeElement } from "../utils.js";

export const Tape = () => {
    
    const tape = makeElement('div', 'tape', [], '');

    const firstLine = document.createElement('p');
    firstLine.className = 'tape-line';
    firstLine.innerText = '';
    tape.appendChild(firstLine);

    return tape;
}