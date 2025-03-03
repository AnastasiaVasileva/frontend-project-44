#!/usr/bin/env node
import runGraetings from '../src/index.js';

function primeGame() {
  // eslint-disable-next-line no-use-before-define
  runGraetings('Answer "yes" if given number is prime. Otherwise answer "no".', generateRound);
}

function getRandomNumber() {
  return Math.floor(Math.random() * 1000) + 1;
}

function primality(num) {
  if (num <= 1) return 'no';
  if (num <= 3) return 'yes';

  if (num % 2 === 0 || num % 3 === 0) return 'no';

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return 'no';
  }

  return 'yes';
}

function generateRound() {
  const question = getRandomNumber();
  const answer = primality(question);
  return [question, String(answer)];
}

primeGame();
