#!/usr/bin/env node
import runGraetings from '../src/index.js';

function evenGame() {
  // eslint-disable-next-line no-use-before-define
  runGraetings('Answer "yes" if the number is even, otherwise answer "no".', generateRound);
}

const isEven = (num) => num % 2 === 0;

function generateRound() {
  const question = Math.floor(Math.random() * 100) + 1;

  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
}

evenGame();
