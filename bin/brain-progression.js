#!/usr/bin/env node
import runGraetings from '../src/index.js';

function getRandomRange(min = 0, max = 100) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

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
  const start = getRandomRange();
  const stepNumber = getRandomRange(2, 10);
  const hidden = getRandomRange(0, 9);
  const [question, answer] = generateRandomProgression(start, stepNumber, hidden);

  return [question, answer];
};

function runProgressionGame() {
  runGraetings('What number is missing in the progression?', generateRound);
}

runProgressionGame();
