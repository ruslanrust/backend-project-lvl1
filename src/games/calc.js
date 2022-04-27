import {
  askName, roundsCount, getAnswer, askQuestion, isAnswerCorrect, generateRandomNum,
} from '../index.js';

const userName = askName();

const operations = ['+', '-', '*'];

const generateRandomOperation = () => {
  const randomNum = generateRandomNum(0, operations.length);
  return operations[randomNum];
};

const startRound = () => {
  const randomFirstOperand = generateRandomNum(1, 10);
  const randomSecondOperand = generateRandomNum(1, 10);
  const randomOperation = generateRandomOperation();
  const expression = `${randomFirstOperand} ${randomOperation} ${randomSecondOperand}`;

  askQuestion(expression);

  const userAnswer = getAnswer();
  const correctResult = () => {
    let result = 0;
    switch (randomOperation) {
      case '+':
        result = randomFirstOperand + randomSecondOperand;
        break;
      case '-':
        result = randomFirstOperand - randomSecondOperand;
        break;
      case '*':
        result = randomFirstOperand * randomSecondOperand;
        break;
      default:
        console.log('попал в дефолт');
    }
    return result;
  };

  const correctAnswer = correctResult().toString();

  if (isAnswerCorrect(userAnswer, correctAnswer)) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const startGameCalc = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < roundsCount(); i += 1) {
    const result = startRound();
    if (result === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGameCalc;
