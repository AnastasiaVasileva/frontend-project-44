#!/usr/bin/env node

import runGraetings from '../src/index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = Math.floor(Math.random() * 100) + 1;

  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

function runEvenGame() {
  runGraetings('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
}

runEvenGame();
