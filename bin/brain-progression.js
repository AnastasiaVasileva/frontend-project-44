#!/usr/bin/env node
import runGraetings from '../src/index.js';

function progGame() {
  // eslint-disable-next-line no-use-before-define
  runGraetings('What number is missing in the progression?', generateRound);
}

function generateRound() {
  const correctArray = [];
  const arrayLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const maxValue = 100;
  const step = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  const startValue = Math.floor(Math.random() * (maxValue - (arrayLength - 1) * step + 1));

  for (let i = 0; i < arrayLength; i += 1) {
    correctArray.push(startValue + i * step);
  }

  const forUserArray = [...correctArray];

  const randomIndex = Math.floor(Math.random() * arrayLength);
  forUserArray[randomIndex] = '..';
  const newArr = forUserArray;

  const question = newArr.join(' ');
  const answer = correctArray[randomIndex];
  return [question, String(answer)];
}

progGame();
