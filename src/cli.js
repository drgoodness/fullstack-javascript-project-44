import readline from 'readline-sync';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readline.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export default welcome;
