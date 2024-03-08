import { play, getRandom } from '../index.js';

const getQuestion = (a, b) => `Question: ${a} ${b}`;

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateRound = () => {
  const a = getRandom(0, 99);
  const b = getRandom(0, 99);
  const question = getQuestion(a, b);
  const answer = getGcd(a, b);
  return { question, answer };
};

export default function run() {
  play('Find the greatest common divisor of given numbers.', generateRound);
}
