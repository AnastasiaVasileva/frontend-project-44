#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswer = 0;
for (let i = 0; i < 3; i += 1) {
  const randomNumer = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${randomNumer}`);
  const answer = readlineSync.question('Your answer: ');
  if ((randomNumer % 2 === 0 && answer === 'yes') || (randomNumer % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
    correctAnswer += 1;
  } else if (randomNumer % 2 === 0 && answer === 'no') {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    console.log(`'Let's try again, ${name}!`);
    break;
  } else if (randomNumer % 2 !== 0 && answer === 'yes') {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`'Let's try again, ${name}!`);
    break;
  } else if (answer !== 'yes' || answer !== 'no') {
    console.log(`${answer} is wrong answer ;(.`);
    console.log(`'Let's try again, ${name}!`);
    break;
  }
}
if (correctAnswer === 3) {
  console.log(`Congratulations, ${name}`);
}
