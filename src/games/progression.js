import {
  askName, roundsCount, getAnswer, askQuestion, isAnswerCorrect, generateRandomNum,
} from '../index.js';

const generateProgression = (firstNum, step, length) => {
  const result = [];
  let currentValue = firstNum;

  for (let i = 0; i < length; i += 1) {
    result.push(currentValue);
    currentValue += step;
  }

  return result;
};

const hideArrayElement = (array, positionToHide) => {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i === positionToHide) {
      result.push('..');
    } else result.push(array[i]);
  }
  return result.join(' ');
};

const startRound = () => {
  const firstNum = generateRandomNum(1, 10);
  const step = generateRandomNum(1, 10);
  const length = generateRandomNum(5, 10);
  const hidingPosition = generateRandomNum(0, length - 1);
  const progression = generateProgression(firstNum, step, length);

  askQuestion(hideArrayElement(progression, hidingPosition));

  const userAnswer = getAnswer();
  const correctAnswer = progression[hidingPosition].toString();

  if (isAnswerCorrect(userAnswer, correctAnswer)) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);

  return false;
};

const startGameProgression = () => {
  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < roundsCount(); i += 1) {
    const result = startRound();
    if (result === false) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGameProgression;
