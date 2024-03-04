import { play, getRandom } from '../index.js';

const getQuestion = (num) => `Question: ${num}`;

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getQuestionAndAnswer = () => {
  const num = getRandom(0, 99);
  const qna = { question: '', answer: 0 };
  qna.question = getQuestion(num);
  qna.answer = isPrime(num);
  return qna;
};

export default function run() {
  play('Answer \'yes\' if given number is prime. Otherwise answer \'no\'', getQuestionAndAnswer);
}
