import React, { useEffect } from 'react';
import { checkGuess } from '../../game-helpers';
const row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

const LETTERS = [row1, row2, row3];

function GuessKeyboard({ guesses, answer }) {
  const keyResultMap = new Map();

  guesses.forEach((guess) => {
    const result = checkGuess(guess, answer);
    result.forEach(({ letter, status }) => {
      if (!keyResultMap.has(letter)) keyResultMap.set(letter, status);
    });
  });

  return (
    <div className="guess-keyboard-wrapper">
      {LETTERS.map((row, index) => (
        <div key={index} className={`guess-keyboard-row row${index + 1}`}>
          {row.map((keyItem, index) => (
            <span
              key={index}
              className={
                keyResultMap.has(keyItem)
                  ? `guess-keyboard-key ${keyResultMap.get(keyItem)}`
                  : 'guess-keyboard-key'
              }
            >
              {keyItem}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GuessKeyboard;
