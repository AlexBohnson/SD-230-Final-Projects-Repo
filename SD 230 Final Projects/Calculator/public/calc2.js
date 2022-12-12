/*Alex Bohnson

    This program has methods to solve math problems entered in the form of a string or as arrays.
    Does not work with paranthesis and exponents at the moment.
    It does multiplication and division first.

    String entered currently needs to end in an equals sign '='
    
    Does not deal with input errors.
*/

// returns an array that looks like this
// problemArray[num, operator, num, operator, num, operator]

function buildProblemArray(stringInput) {

    let index = 0;
    let problemArray = new Array();
    problemArray[0] = '';

    //i = index of string input problem
    for (let i = 0; i < stringInput.length; i++) {
        if (stringInput[i] == '=') {
            return problemArray;
        } else if (stringInput[i] == '*' || stringInput[i] == '/' || stringInput[i] == '+' || stringInput[i] == '-') {
            index++;
            problemArray[index] = stringInput[i];
            index++;
            problemArray[index] = '';
        } else {
            problemArray[index] = problemArray[index] + '' + stringInput[i];
        }
    }
}

//works through multiplication and division of array
function multiplyDivideProblemArray(problemArray) {
    let result;

    for (let i = 0; i < problemArray.length; i++) {
        switch (problemArray[i]) {
            case '*':

                result = parseFloat(problemArray[i - 1]) * parseFloat(problemArray[i + 1]);
                problemArray[i - 1] = result;
                problemArray.splice(i, 2);
                solveProblemArray(problemArray);
                break;
            case '/':

                result = parseFloat(problemArray[i - 1]) / parseFloat(problemArray[i + 1]);
                problemArray[i - 1] = result;
                problemArray.splice(i, 2);
                solveProblemArray(problemArray);
                break;
        }
    }
    return problemArray;
}

//works through addition and subtraction
function addSubtractProblemArray(problemArray) {
    for (let i = 0; i < problemArray.length; i++) {
        switch (problemArray[i]) {
            case '+':

                result = parseFloat(problemArray[i - 1]) + parseFloat(problemArray[i + 1]);
                problemArray[i - 1] = result;
                problemArray.splice(i, 2);
                solveProblemArray(problemArray);
                break;
            case '-':

                result = parseFloat(problemArray[i - 1]) - parseFloat(problemArray[i + 1]);
                problemArray[i - 1] = result;
                problemArray.splice(i, 2);
                solveProblemArray(problemArray);
                break;
        }
    }
    return problemArray;
}

//combines functions
function solveProblemArray(problemArray) {

    addSubtractProblemArray(multiplyDivideProblemArray(problemArray))

    return problemArray;
}