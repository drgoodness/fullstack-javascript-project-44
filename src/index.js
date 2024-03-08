import readline from 'readline-sync';
import login from './cli.js';

const play = (rules, generateRound) => {
  const userName = login();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const { question, answer } = generateRound();
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
  play,
  getRandom,
};
