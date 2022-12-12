import { NumberButton } from "./buttons/NumberButton.js"
import { OperatorButton } from "./buttons/OperatorButton.js";
import { ClearButton } from "./buttons/ClearButton.js";
import { EqualsButton } from "./buttons/EqualsButton.js";
import { NegateButton } from "./buttons/NegateButton.js";
import { PercentButton } from "./buttons/PercentButton.js";

export const Button = (value) => {

    if (value === 'c') return ClearButton(value);
    if (value === '=') return EqualsButton(value);
    if (value === '-/+') return NegateButton(value);
    if (value === '%') return PercentButton(value);
    if (['+', '-', '*', '/'].includes(value)) return OperatorButton(value);

    return NumberButton(value);

}