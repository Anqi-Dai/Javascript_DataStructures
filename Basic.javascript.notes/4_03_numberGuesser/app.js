/*
Game rules:
The game participant will be able to enter a number to guess the winning number;
It will show you win if he/she guessed correctly, and the input will be disabled;
It will show wrong number guessed and number of guesses left;
If the participant didn't get the correct guess at last, he will be shown that.
*/

// game values
let min = 1,
  max = 10,
  winningNum = generateRandomNum(min, max),
  numChances = 3;

// UI values
const game = document.querySelector("#game"),
  minNum = document.querySelector(".number-min"),
  maxNum = document.querySelector(".number-max"),
  inputField = document.querySelector("#guess-input"),
  submitBtn = document.querySelector("#guess-submit"),
  message = document.querySelector(".message");

// set the UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// when game is over, show the button as 'Play again' and reload the page (use event delegation)
// it has to be *mousedown* here. If it's click, then it will automatically reload the page as if you have clicked the play again button, mousedown will freeze the page at the play again btn for you to click.
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// listen for click event on the submit button
submitBtn.addEventListener("click", function(e) {
  // validate if the input is a valid number
  let inputNum = parseInt(inputField.value);
  if (isNaN(inputNum) || inputNum < min || inputNum > max) {
    setMessage(`Please write a number between ${min} and ${max}`, "red");
    inputField.style.borderColor = "red";
  } else {
    if (inputNum === winningNum) {
      // game over and won
      gameOver(true);
    } else {
      numChances -= 1;
      // game over and lost
      if (numChances === 0) {
        gameOver(false);
      } else {
        // guessed wrong but has chances left
        inputField.value = "";
        setMessage(
          `Guessed wrong! You have ${numChances} guesses left.`,
          "red"
        );
        inputField.style.borderColor = "red";
      }
    }
  }
});

// functions
// optimize the code by creating a gameOver function

gameOver = function(won) {
  let color;
  won === true ? (color = "green") : (color = "red");

  inputField.disabled = true;
  inputField.style.borderColor = color;

  if (won === true) {
    setMessage(`You won! ${winningNum} is the correct number. `, color);
  } else {
    setMessage(`You lost! ${winningNum} was the correct number.`, color);
  }

  // change the btn to show 'Play again'
  submitBtn.value = "Play again";
  // add a class so that we could add an event on it later
  submitBtn.className = "play-again";
};

setMessage = function(msg, col) {
  message.textContent = msg;
  message.style.color = col;
};

// generate random winning number in a range
function generateRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
