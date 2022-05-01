import readlineSync from 'readline-sync';

const generateRandomNum = (min, max) => {
  const randomNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNum);
};

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const roundsCount = () => 3;

const getAnswer = () => readlineSync.question('Your answer: ');

const askQuestion = (text) => {
  console.log(`Question: ${text}`);
};

const isAnswerCorrect = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) return true;
  return false;
};

export {
  askName, roundsCount, getAnswer, askQuestion, isAnswerCorrect, generateRandomNum,
};
