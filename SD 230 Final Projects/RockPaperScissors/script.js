/*
Alex Bohnson
Project 2
Rock Paper Scissors Game

*/



let playerSelection;


//initializes button behaviors
function beginGame() {

    document.querySelector("#play-again").style.display = "none";
    document.querySelector("#shoot").style.display = "none";

    //game start button, only clicked once to start playing
    document.querySelector('#game-start')
        .addEventListener("click", () => {
            playRound();
            document.querySelector("#game-start").style.display = "none";

        }, { once: true })

    //play again button plays round and hides play again button
    document.querySelector('#play-again')
        .addEventListener("click", () => {
            playRound();
            document.querySelector("#play-again").style.display = "none";

        });

    //shoot button plays the game, removes listeners so that clicks don't affect icons while
    // looking at results.
    document.querySelector('#shoot')
        .addEventListener("click", () => {
            rockPaperScissorsGame();

            removeChoiceListeners();

            document.querySelector("#shoot").style.display = "none";
            document.querySelector("#play-again").style.display = "block";
        });

    //

}

//adds event listeners to each icon
//changes player selection and icon style on click
function addChoiceListeners() {
    const choices = document.querySelectorAll('.choice')
    choices.forEach((choice, i, arr) => {

        choice.addEventListener('click', function (e) {
            console.log(e);

            resetColors();

            playerSelection = arr[i].id;

            e.target.style.color = '#44bebef7';
            e.target.style.opacity = 9;

        })
    });
}

//Stops clicks from changing colors when game is showing the round's results
//Clones and replaces node which removes active listeners
//necessary because can't remove event listeners with anonymous functions 
function removeChoiceListeners() {

    const choices = document.querySelectorAll('.choice')

    choices.forEach(choice => {
        let elementWithListener = document.getElementById(choice.id);
        let newElementWithoutListeners = elementWithListener.cloneNode(true);
        elementWithListener.parentNode.replaceChild(newElementWithoutListeners, elementWithListener);
    })
}

//Adds listeners and plays round, red hand are the computer's pick. If computer and player select same, pick is yellow
function playRound() {
    document.querySelector("#shoot").style.display = "block";
    addChoiceListeners();
    resetColors();

}

//sets icon colors back to black
//could loop through elements by class
function resetColors() {

    let rock = document.getElementById("rock-icon");
    let paper = document.getElementById("paper-icon");
    let scissors = document.getElementById("scissors-icon");

    rock.style.color = 'black';
    rock.style.opacity = .5;

    paper.style.color = 'black';
    paper.style.opacity = .5;

    scissors.style.color = 'black';
    scissors.style.opacity = .5;
}

beginGame();