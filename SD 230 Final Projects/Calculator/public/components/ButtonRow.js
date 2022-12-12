import { makeElement } from "../utils.js";
import { Button } from "./Button.js"


export const ButtonRow = (buttons) => {
    const buttonRow = makeElement('div', '', ['button-row'], '')

    //create the buttons
    for (let button of buttons) {
        buttonRow.appendChild(Button(button));
    }

    return buttonRow;

}