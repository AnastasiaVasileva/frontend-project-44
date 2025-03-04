#!/usr/bin/env node
import runGraetings from '../src/index.js';

const generateRandomProgression = (start, stepNumber, hiddenIndex) => {
  const progression = [];

  for (let i = 0; i < 10; i += 1) {
    progression.push(start + i * stepNumber);
  }

  const number = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return [progression.join(' '), String(number)];
};

const generateRound = () => {
  const arrayLength = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const maxValue = 100;
  const stepNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  const start = Math.floor(Math.random() * (maxValue - (arrayLength - 1) * stepNumber + 1));
  const hidden = Math.floor(Math.random() * arrayLength);

  const [question, answer] = generateRandomProgression(start, stepNumber, hidden);

  return [question, answer];
};

function runProgressionGame() {
  runGraetings('What number is missing in the progression?', generateRound);
}

runProgressionGame();
