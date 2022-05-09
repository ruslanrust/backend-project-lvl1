import generateRandomNum from '../utils.js';

const operators = ['+', '-', '*'];

const resultOfExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`operator ${operator} - unsupported`);
  }
};

const gameDescription = 'What is the result of the expression?';

const makeRound = () => {
  const randomNum1 = generateRandomNum(1, 10);
  const randomNum2 = generateRandomNum(1, 10);
  const randomOperator = operators[generateRandomNum(0, operators.length - 1)];

  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;

  const answer = resultOfExpression(randomNum1, randomNum2, randomOperator).toString();

  return [question, answer];
};

export { makeRound, gameDescription };
