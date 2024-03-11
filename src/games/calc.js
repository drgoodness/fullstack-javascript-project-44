import play from '../index.js';
import getRandom from '../utils.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandom(0, operators.length - 1)];
};

const getAnswer = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Invalid operator ${operator}`);
  }
};

const getQuestionAndAnswer = () => {
  const operator = getRandomOperator();
  const a = getRandom();
  const b = getRandom();
  const question = `Question: ${a} ${operator} ${b}`;
  const answer = getAnswer(a, b, operator);
  return { question, answer };
};

export default function run() {
  play('What is the result of the expression?', getQuestionAndAnswer);
}
