import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmitNewGuess = (guess) => {
    const nextGuesses = [...guesses, { id: crypto.randomUUID(), guess }];
    setGuesses(nextGuesses);
  };

  return (
    <>
      <GuessResults guesses={guesses.slice(0, NUM_OF_GUESSES_ALLOWED)} />
      <GuessInput handleSubmitNewGuess={handleSubmitNewGuess} />
    </>
  );
}

export default Game;
