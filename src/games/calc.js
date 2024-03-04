import { play, getRandom } from '../index.js';

const getQuestion = (a, b, operation) => `Question: ${a} ${operation} ${b}`;

const addition = (a, b) => a + b;

const minus = (a, b) => a - b;

const multiply = (a, b) => a * b;

const getQuestionAndAnswer = () => {
  const operation = getRandom(1, 3);
  const a = getRandom(0, 99);
  const b = getRandom(1, 99);
  const qna = { question: '', answer: 0 };
  switch (operation) {
    case 1:
      qna.question = getQuestion(a, b, '+');
      qna.answer = addition(a, b);
      break;
    case 2:
      qna.question = getQuestion(a, b, '-');
      qna.answer = minus(a, b);
      break;
    case 3:
      qna.question = getQuestion(a, b, '*');
      qna.answer = multiply(a, b);
      break;
    default:
      getQuestionAndAnswer();
      break;
  }
  return qna;
};

export default function run() {
  play('What is the result of the expression?', getQuestionAndAnswer);
}
