import { play, getRandom } from '../index.js';

const getQuestion = (num) => `Question: ${num}`;

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const num = getRandom(0, 99);
  const question = getQuestion(num);
  const answer = isEven(num);
  return { question, answer };
};

export default function run() {
  play('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
}
