import play from '../index.js';
import getRandom from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const num = getRandom();
  const question = `Question: ${num}`;
  const answer = isPrime(num) ? 'yes' : 'no';
  return { question, answer };
};

export default function run() {
  play('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
}
