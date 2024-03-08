import { play, getRandom } from '../index.js';

const getQuestion = (progressionStr) => `Question: ${progressionStr}`;

const buildProgression = (size, filler, increment) => Array(size)
  .fill(filler)
  .map((el, index) => index + increment);

const getProgressionWithHiddenElement = (progression, index) => {
  const maskedProgression = [];
  for (let i = 0; i < progression.length; i += 1) {
    if (i === index) {
      maskedProgression.push('..');
    } else {
      maskedProgression.push(progression[i]);
    }
  }
  return maskedProgression;
};

const getProgressionAsString = (progression) => {
  const result = progression.reduce((acc, el) => {
    let res = acc;
    res += `${el} `;
    return res;
  }, '');
  return result.trim();
};

const generateRound = () => {
  const size = 10;
  const indexOfHiddenElement = getRandom(0, size - 1);
  const filler = getRandom(0, 9);
  const increment = getRandom(2, 9);
  const progression = buildProgression(size, filler, increment);
  const maskedProgression = getProgressionWithHiddenElement(progression, indexOfHiddenElement);
  const question = getQuestion(getProgressionAsString(maskedProgression));
  const answer = progression[indexOfHiddenElement];
  return { question, answer };
};

export default function run() {
  play('What number is missing in the progression?', generateRound);
}
