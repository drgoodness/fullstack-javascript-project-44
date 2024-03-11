import play from '../index.js';
import getRandom from '../utils.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateRound = () => {
  const a = getRandom();
  const b = getRandom();
  const question = `Question: ${a} ${b}`;
  const answer = getGcd(a, b);
  return { question, answer };
};

export default function run() {
  play('Find the greatest common divisor of given numbers.', generateRound);
}
