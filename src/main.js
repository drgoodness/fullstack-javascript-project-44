import readline from 'readline-sync';

class Qna {
  constructor() {
    this.question = '';
    this.answer = 0;
  }
}

const login = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const play = (initQuestion, qanFunc) => {
  const userName = login();
  console.log(initQuestion);
  for (let i = 0; i < 3; i += 1) {
    const { question, answer } = qanFunc();
    console.log(answer); // TODO remove once debugged
    const answerStr = String(answer);
    console.log(`${question}\n`);
    const userAnswer = readline.question('Your answer: ');
    if (answerStr !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;( - correct answer is '${answerStr}'\n`);
      console.log(`Let's try again, ${userName}!\n`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!\n`);
  return true;
};

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {
  Qna,
  login,
  play,
  getRandom,
};
