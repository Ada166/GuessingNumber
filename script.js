function guessNumber() {
    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let guess = prompt("Guess a number between 1 and 10: ");

    if (guess == secretNumber) {
        console.log("You won, congratulation") 
        } else{
            console.log("Wrong, it was " + secretNumber + " try again!")
        }
    }

    guessNumber();