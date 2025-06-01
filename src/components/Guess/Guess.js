import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(0, 5).map((_, index) => (
        <span key={index} className="cell">
          {guess?.[index] || ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
