/* eslint-disable no-param-reassign */
import generateRandomNum from '../utils.js';

const greatestCommonDivisor = (num1, num2) => {
  if (num1 === 0 || num2 === 0) return 0;

  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }

  return num1;
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const makeRound = () => {
  const randomNum1 = generateRandomNum(1, 20);
  const randomNum2 = generateRandomNum(1, 20);
  const question = `${randomNum1} ${randomNum2}`;
  const answer = greatestCommonDivisor(randomNum1, randomNum2).toString();

  return [question, answer];
};

export { makeRound, gameDescription };
