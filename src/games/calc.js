import {
  askName, roundsCount, getAnswer, askQuestion, isAnswerCorrect, generateRandomNum,
} from '../index.js';

const operators = ['+', '-', '*'];

const generateRandomOperator = () => {
  const randomNum = generateRandomNum(0, operators.length - 1);
  return operators[randomNum];
};

const startRound = (userName) => {
  const randomFirstOperand = generateRandomNum(1, 10);
  const randomSecondOperand = generateRandomNum(1, 10);
  const randomOperator = generateRandomOperator();
  const expression = `${randomFirstOperand} ${randomOperator} ${randomSecondOperand}`;

  askQuestion(expression);

  const userAnswer = getAnswer();
  const correctResult = () => {
    let result = 0;
    switch (randomOperator) {
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
        console.log('ops');
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
  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < roundsCount(); i += 1) {
    const result = startRound(userName);
    if (result === false) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGameCalc;
