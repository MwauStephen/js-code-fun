// console.log(document.querySelector(".message"));
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "You did it";
// console.log((document.querySelector(".number").value = 23));

// const guess = (document.querySelector(".number").value = 25);
// console.log(typeof guess, guess);

// document.querySelector(".number").value = 21;
// gets/sets a value from an input
// console.log((document.querySelector('.guess').value = 45));

//Handling mouse clicks

// Generate a random number
// const secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess);
//   console.log(guess, typeof guess);
// });

// A guessing game program

// generates a random number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log((document.querySelector(".number").textContent = secretNumber));
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Handles the mouse click/event
document.querySelector(".check").addEventListener("click", function () {
  
  // reads the value inside the input box
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage("Not a Number!⛔");
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    displayMessage("You are correct!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
  } else if (guess !== secretNumber) {
    displayMessage(
      guess > secretNumber ? "Guess is to high" : "Guess is to low"
    );
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game😣😪");
    }
  }
});

// code to reset the game

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// code before refactoring
// else if (guess > secretNumber) {
//   if (score > 0) {
//     document.querySelector(".message").textContent = "Guess is to high";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "You lost the game😣😪";
//   }
// } else if (guess < secretNumber) {
//   if (score > 0) {
//     document.querySelector(".message").textContent = "Guess is to low";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "'You lost the game😣😪";
//   }
// }
