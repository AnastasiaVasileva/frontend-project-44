import readlineSync from 'readline-sync';

const runGraetings = (rules, generateRound) => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(rules);

  let correctResult = 0;

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = generateRound();

    console.log(`Question: ${question}`);
    const userAnswer = +readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      correctResult += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      return;
    }
  }
  if (correctResult === 3) {
    console.log(`Congratulations ${name}`);
  }
};

export default runGraetings;
