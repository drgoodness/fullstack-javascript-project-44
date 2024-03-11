import play from '../index.js';
import getRandom from '../utils.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const generateRound = () => {
  const num = getRandom();
  const question = `Question: ${num}`;
  const answer = isEven(num) ? 'yes' : 'no';
  return { question, answer };
};

export default function run() {
  play('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
}
