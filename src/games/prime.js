import generateRandomNum from '../utils.js';

const isPrime = (num) => {
  if (num === 0 || num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const gameDescription = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

const makeRound = () => {
  const randomNum = generateRandomNum(1, 20);
  const question = randomNum;
  const answer = isPrime(randomNum) ? 'yes' : 'no';

  return [question, answer];
};

export { makeRound, gameDescription };
