#!/usr/bin/env node
import runGraetings from '../src/index.js';

function calcGame() {
  // eslint-disable-next-line no-use-before-define
  runGraetings('What is the result of the expression?', generateRound);
}

const randomOperation = () => {
  const operations = ['+', '-', '*'];

  const index = Math.floor(Math.random() * operations.length);
  return operations[index];
};

const calculation = (num1, num2, operator) => {
  let result = null;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  }

  return result;
};

function generateRound() {
  const firstNumber = Math.floor(Math.random() * 10) + 1;
  const secondNunber = Math.floor(Math.random() * 10) + 1;
  const resultRandomOperation = randomOperation();

  const question = `${firstNumber} ${resultRandomOperation} ${secondNunber}`;

  const answer = String(calculation(firstNumber, secondNunber, resultRandomOperation));

  return [question, answer];
}

calcGame();
