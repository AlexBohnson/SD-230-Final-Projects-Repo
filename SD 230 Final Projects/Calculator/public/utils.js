export const makeElement = (element, id, classes, content) => {
    const newElement = document.createElement(element);
    newElement.id = id;
    newElement.classList.add(...classes);
    newElement.innerHTML = content;
    return newElement;
}

export const updateDisplay = (showTotal=false) => {

    const display = document.getElementById('display');

    if(showTotal)
        display.innerHTML = window.localStorage.getItem(('currentTotal') || '0')
    else
        display.innerHTML = window.localStorage.getItem('currentNumber');
}

export const updateLastLine = (calcStack) => {
    const lastLine = document.querySelector('#tape > p:last-child')

    let updatedLineText = '';
    calcStack.forEach((item) => {
        updatedLineText += `${item} `;
    });

    lastLine.innerHTML = updatedLineText;
}

export const newLastLine = () => {
    const newLine = document.createElement('p');
    newLine.className = 'tape-line';
    newLine.innerText = '';
    tape.appendChild(newLine);
}