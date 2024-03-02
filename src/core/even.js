import { Qna, play, getRandom } from '../main.js';

const getQuestion = (num) => `Question: ${num}`;

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getQuestionAndAnswer = () => {
  const num = getRandom(0, 99);
  const qna = new Qna();
  qna.question = getQuestion(num);
  qna.answer = isEven(num);
  return qna;
};

export default function run() {
  play('Answer \'yes\' if given number is even. Otherwise answer \'no\'', getQuestionAndAnswer);
}
