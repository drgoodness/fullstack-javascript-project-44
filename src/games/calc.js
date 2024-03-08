import { play, getRandom } from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandom(0, operators.length - 1)];
};

const getQuestion = (a, b, operator) => `Question: ${a} ${operator} ${b}`;

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
  const a = getRandom(0, 99);
  const b = getRandom(1, 99);
  const question = getQuestion(a, b, operator);
  const answer = getAnswer(a, b, operator);
  return { question, answer };
};

export default function run() {
  play('What is the result of the expression?', getQuestionAndAnswer);
}
