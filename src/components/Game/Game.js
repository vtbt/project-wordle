import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import ResultBanner from '../ResultBanner/ResultBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [correctGuesses, setCorrectGuesses] = React.useState(0);

  const handleSubmitNewGuess = (guess) => {
    const nextGuesses = [...guesses, { id: crypto.randomUUID(), guess }];
    setGuesses(nextGuesses);
    if (guess === answer) {
      setCorrectGuesses(nextGuesses.length);
    }
  };

  return (
    <>
      <GuessResults
        guesses={guesses.slice(0, NUM_OF_GUESSES_ALLOWED)}
        answer={answer}
      />
      <GuessInput
        handleSubmitNewGuess={handleSubmitNewGuess}
        isDisabled={
          guesses.length === NUM_OF_GUESSES_ALLOWED || !!correctGuesses
        }
      />
      {(guesses.length === NUM_OF_GUESSES_ALLOWED || !!correctGuesses) && (
        <ResultBanner correctGuesses={correctGuesses} answer={answer} />
      )}
    </>
  );
}

export default Game;
