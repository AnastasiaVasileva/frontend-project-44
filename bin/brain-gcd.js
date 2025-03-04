#!/usr/bin/env node
import runGraetings from '../src/index.js';

function gcdGame() {
  // eslint-disable-next-line no-use-before-define
  runGraetings('Find the greatest common divisor of given numbers.', generateRound);
}

function generateRound() {
  let firstNumber = Math.floor(Math.random() * 100) + 1;
  let secondNunber = Math.floor(Math.random() * 100) + 1;
  function gcdfunc() {
    while (secondNunber !== 0) {
      const temp = secondNunber;
      secondNunber = firstNumber % secondNunber;
      firstNumber = temp;
    }
    return firstNumber;
  }

  const question = `${firstNumber} ${secondNunber}`;

  const answer = gcdfunc();

  return [question, String(answer)];
}

gcdGame();
