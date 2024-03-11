import play from '../index.js';
import getRandom from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateRound = () => {
  const start = getRandom(0, 9);
  const step = getRandom(2, 9);
  const length = getRandom(8, 10);
  const progression = generateProgression(start, step, length);

  const randomIndex = getRandom(0, progression.length - 1);
  const answer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;

  return { question, answer };
};

export default function run() {
  play('What number is missing in the progression?', generateRound);
}
