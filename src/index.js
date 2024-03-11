import readline from 'readline-sync';
import login from './cli.js';

export default function play(rules, generateRound) {
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
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!\n`);
}
