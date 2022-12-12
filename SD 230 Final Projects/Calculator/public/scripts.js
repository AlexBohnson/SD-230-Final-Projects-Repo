import { Calc } from './components/Calc.js';
import { Tape } from './components/Tape.js';


(() =>{

    //set get local storage variables
    window.localStorage.setItem('currentNumber', '0');
    window.localStorage.setItem('currentTotal', 0);
    window.localStorage.setItem('calcStack', JSON.stringify([]));

    const app = document.querySelector('#calculatorApp');
    calculatorApp.appendChild(Calc());
    calculatorApp.appendChild(Tape());

})();