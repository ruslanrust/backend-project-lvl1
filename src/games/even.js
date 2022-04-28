import {
  askName, roundsCount, getAnswer, askQuestion, isAnswerCorrect, generateRandomNum,
} from '../index.js';

const isEven = (num) => num % 2 === 0;

const startRound = (userName) => {
  const randomNum = generateRandomNum(1, 10);

  askQuestion(randomNum);

  const userAnswer = getAnswer();
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

  if (isAnswerCorrect(userAnswer, correctAnswer)) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const startGameEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log(`Hello, ${userName}!`);
  console.log("Answer 'yes' if number even otherwise answer 'no'.");

  for (let i = 0; i < roundsCount(); i += 1) {
    const result = startRound(userName);
    if (result === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGameEven;
