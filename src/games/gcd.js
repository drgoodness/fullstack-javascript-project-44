import { play, getRandom } from '../index.js';

const getQuestion = (a, b) => `Question: ${a} ${b}`;

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const a = getRandom(0, 99);
  const b = getRandom(0, 99);
  const qna = { question: '', answer: 0 };
  qna.question = getQuestion(a, b);
  qna.answer = gcd(a, b);
  return qna;
};

export default function run() {
  play('Find the greatest common divisor of given numbers.', getQuestionAndAnswer);
}
