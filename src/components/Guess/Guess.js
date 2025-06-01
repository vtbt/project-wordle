import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {result
        ? result.map(({ letter, status }, index) => (
            <span key={index} className={`cell ${status}`}>
              {letter}
            </span>
          ))
        : range(5).map((num) => <span key={num} className="cell"></span>)}
    </p>
  );
}

export default Guess;
