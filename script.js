let stage = 1;
let userScore = 0;
let maxRange = 3;
const userName = prompt("Enter your username: ") || "User";
let numOfTries = 3;

const getNumber = (maxRange) => {
  return parseInt(prompt(`Enter a number between the range of 1 - ${maxRange}: `));
};

while (numOfTries !== 0) {
  numOfTries-=1;
  let randomNumber = Math.floor(Math.random() * (maxRange - 1)) + 1;
  const guess = getNumber(maxRange);
  console.log(randomNumber);
  console.log(guess);

  if (guess === randomNumber) {
    stage+=1;
    userScore+=1;
    maxRange+=1;
    numOfTries = 3;
    alert(
      `${userName}, you guessed right and have moved to stage ${stage}. Your score is: ${userScore}`
    );
  } else {
    console.log(`Wrong, try again. You have ${numOfTries} number of tries left.`);
  }
}
console.log(`Your final score: ${userScore}`);