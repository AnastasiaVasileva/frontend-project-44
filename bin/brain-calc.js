#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const operations = ['+', '-', '*'];
const randomOperation = () => {
  const index = Math.floor(Math.random() * operations.length);
  return operations[index];
};
let correctAnswer = 0;

for (let i = 0; i < 3; i += 1) {
  const resultRandomOperation = randomOperation();
  const firstNumber = Math.floor(Math.random() * 10) + 1;
  const secondNunber = Math.floor(Math.random() * 10) + 1;
  let result = 0;

  console.log(`Question:  ${firstNumber} ${resultRandomOperation} ${secondNunber}`);

  if (resultRandomOperation === '+') {
    result = firstNumber + secondNunber;
  } else if (resultRandomOperation === '-') {
    result = firstNumber - secondNunber;
  } else if (resultRandomOperation === '*') {
    result = firstNumber * secondNunber;
  }

  const answer = readlineSync.question('Your answer: ');

  if (Number(answer) === result) {
    console.log('Correct!');
    correctAnswer += 1;
  } else if (Number(answer) !== result) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (correctAnswer === 3) {
  console.log(`Congratulations, ${name}`);
}
