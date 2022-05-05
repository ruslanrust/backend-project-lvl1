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

const hideArrayElement = (array, positionToHide) => {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i === positionToHide) {
      result.push('..');
    } else result.push(array[i]);
  }
  return result.join(' ');
};

const gameDiscription = 'What number is missing in the progression?';

const startRound = () => {
  const firstNum = generateRandomNum(1, 10);
  const step = generateRandomNum(1, 10);
  const length = generateRandomNum(5, 10);
  const hidingPosition = generateRandomNum(0, length - 1);
  const progression = generateProgression(firstNum, step, length);

  const question = hideArrayElement(progression, hidingPosition);

  const answer = progression[hidingPosition].toString();

  return [question, answer];
};

export { startRound, gameDiscription };
