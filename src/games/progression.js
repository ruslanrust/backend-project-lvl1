import generateRandomNum from '../utils.js';

const generateProgression = (firstNum, step, length) => {
  const result = [];
  let currentValue = firstNum;

  for (let i = 0; i < length; i += 1) {
    result.push(currentValue);
    currentValue += step;
  }

  return result;
};

const gameDescription = 'What number is missing in the progression?';

const makeRound = () => {
  const firstNum = generateRandomNum(1, 10);
  const step = generateRandomNum(1, 10);
  const length = generateRandomNum(5, 10);
  const progression = generateProgression(firstNum, step, length);

  const hideIndex = generateRandomNum(0, length - 1);
  const answer = progression[hideIndex].toString();

  progression[hideIndex] = '..';

  const question = progression.join(' ');

  return [question, answer];
};

export { makeRound, gameDescription };
