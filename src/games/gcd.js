import {
  askName, roundsCount, getAnswer, askQuestion, isAnswerCorrect, generateRandomNum,
} from '../index.js';

const greatestCommonDivisor = (num1, num2) => {
  if (num1 % num2 === 0) return num2;
  if (num2 % num1 === 0) return num1;
  if (num1 > num2) return greatestCommonDivisor(num1 % num2, num2);
  if (num2 > num1) return greatestCommonDivisor(num1, num2 % num1);
  return 0;
};

const startRound = (userName) => {
  const randomNum1 = generateRandomNum(1, 20);
  const randomNum2 = generateRandomNum(1, 20);
  const question = `${randomNum1} ${randomNum2}`;

  askQuestion(question);

  const userAnswer = getAnswer();
  const correctAnswer = greatestCommonDivisor(randomNum1, randomNum2).toString();

  if (isAnswerCorrect(userAnswer, correctAnswer)) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const startGameGcd = () => {
  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < roundsCount(); i += 1) {
    const result = startRound(userName);
    if (result === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGameGcd;
