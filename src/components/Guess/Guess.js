import React from 'react';
import { range } from '../../utils';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}
function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          //   letter={result ? result[num].letter : undefined}
          //   status={result ? result[num].status : undefined}
          letter={value?.[num]?.letter}
          status={value?.[num]?.status}
        />
      ))}
    </p>
  );
}

export default Guess;
