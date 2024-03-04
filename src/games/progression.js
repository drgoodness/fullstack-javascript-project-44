import { Qna, play, getRandom } from '../index.js';

const getQuestion = (progressionStr) => `Question: ${progressionStr}`;

const buildProgression = (size, filler, increment) => Array(size)
  .fill(filler)
  .map((el, index) => index + increment);

const hideElementInProgression = (progression, index) => {
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

class Progression {
  constructor(size) {
    const index = getRandom(0, size - 1);
    const filler = getRandom(0, 9);
    const increment = getRandom(2, 9);
    this.original = buildProgression(size, filler, increment);
    this.masked = hideElementInProgression(this.original, index);
    this.hidenElement = this.original[index];
  }

  getMaskedProgressionAsString() {
    const result = this.masked.reduce((acc, el) => {
      let res = acc;
      res += `${el} `;
      return res;
    }, '');
    return result.trim();
  }

  getHiddenElement() {
    return this.hidenElement;
  }
}

const getQuestionAndAnswer = () => {
  const qna = new Qna();
  const progression = new Progression(10);
  qna.question = getQuestion(progression.getMaskedProgressionAsString());
  qna.answer = progression.getHiddenElement();
  return qna;
};

export default function run() {
  play('What number is missed in this progression?', getQuestionAndAnswer);
}
