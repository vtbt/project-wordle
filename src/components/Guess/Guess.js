import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {result
        ? result.map(({ letter, status }, index) => (
            <span key={index} className={`cell ${status}`}>
              {letter}
            </span>
          ))
        : range(0, 5).map((_, index) => (
            <span key={index} className="cell"></span>
          ))}
    </p>
  );
}

export default Guess;
