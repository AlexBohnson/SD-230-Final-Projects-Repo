
//Helper function to generate random number between 1 and 3
// 1 - Rock
// 2 - Paper
// 3 - Scissors
function generateRPS() {
    return Math.ceil(Math.random() * 3);
}

function getUserGuess(){
    let answer = prompt('Pick rock paper or scissors').toLowerCase();;
    while (answer !== 'rock' && answer !== 'paper' && answer !== 'scissors' ){
        answer = prompt('Please enter \'rock\' \'paper\' or \'scissors\'').toLowerCase();
        
    }
    return answer;
}

//Plays the rocker paper scissors game
function rockPaperScissorsGame() {
    let rps = generateRPS();
    //let guess = getUserGuess();

    switch (playerSelection) {
        case 'rock':
            switch (rps) {
                case 1:
                    document.getElementById("rock-icon").style.color = 'yellow';
                    alert('Computer picked Rock too... Draw :(');
                    break;
                case 2:
                    document.getElementById("paper-icon").style.color = 'red';
                    alert('Computer picked Paper! You\'ve lost...');
                    break;
                case 3:
                    document.getElementById("scissors-icon").style.color = 'red';
                    alert('Computer picked Scissors! You\'ve won!!');
                    break;
            }
            break;
        case 'paper':
            switch (rps) {
                case 1:
                    document.getElementById("rock-icon").style.color = 'red';
                    alert('Computer picked Rock! You\'ve won!!');
                    break;
                case 2:
                    document.getElementById("paper-icon").style.color = 'yellow';
                    alert('Computer picked Paper too. It\'s a Draw...');
                    break;
                case 3:
                    document.getElementById("scissors-icon").style.color = 'red';
                    alert('Computer picked Scissors! You\'ve lost');
                    break;
            }
            break
        case 'scissors':
            switch (rps) {
                case 0:
                    document.getElementById("rock-icon").style.color = 'red';
                    alert('Computer picked Rock. You\'ve lost');
                    break;
                case 1:
                    document.getElementById("paper-icon").style.color = 'red';
                    alert('Computer picked Paper! You\'ve won!');
                    break;
                case 2:
                    document.getElementById("scissors-icon").style.color = 'yellow';
                    alert('Computer picked Scissors too. It\s a Draw.');
                    break;
            }
            break;
    }
}