import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ guesses, answer }) {
  console.log('Rendering GuessResults with guesses:', guesses);
  const displayedGuesses = [
    ...guesses,
    ...range(0, NUM_OF_GUESSES_ALLOWED - guesses.length).map(() => ({
      id: crypto.randomUUID(),
      guess: '',
    })),
  ];
  return (
    <div className="guess-results">
      {displayedGuesses.map(({ id, guess }) => (
        <Guess key={id} guess={guess} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
