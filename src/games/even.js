import generateRandomNum from '../utils.js';

const isEven = (num) => num % 2 === 0;

const gameDescription = "Answer 'yes' if number even otherwise answer 'no'.";

const makeRound = () => {
  const randomNum = generateRandomNum(1, 10);
  const question = randomNum;
  const answer = isEven(randomNum) ? 'yes' : 'no';

  return [question, answer];
};

export { makeRound, gameDescription };
