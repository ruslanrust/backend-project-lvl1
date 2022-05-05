import generateRandomNum from '../utils.js';

const operators = ['+', '-', '*'];

const generateRandomOperator = () => {
  const randomNum = generateRandomNum(0, operators.length - 1);
  return operators[randomNum];
};

const gameDiscription = 'What is the result of the expression?';

const startRound = () => {
  const randomFirstOperand = generateRandomNum(1, 10);
  const randomSecondOperand = generateRandomNum(1, 10);
  const randomOperator = generateRandomOperator();
  const expression = `${randomFirstOperand} ${randomOperator} ${randomSecondOperand}`;

  const question = expression;

  const resultOfExpression = () => {
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

  const answer = resultOfExpression().toString();

  return [question, answer];
};

export { startRound, gameDiscription };
