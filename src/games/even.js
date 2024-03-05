import { play, getRandom } from '../index.js';

const getQuestion = (num) => `Question: ${num}`;

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getQuestionAndAnswer = () => {
  const num = getRandom(0, 99);
  const qna = { question: '', answer: 0 };
  qna.question = getQuestion(num);
  qna.answer = isEven(num);
  return qna;
};

export default function run() {
  play('Answer "yes" if the number is even, otherwise answer "no".', getQuestionAndAnswer);
}
