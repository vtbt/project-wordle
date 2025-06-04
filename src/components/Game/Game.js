import React, { useEffect } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import GuessKeyboard from '../GuessKeyboard';

// // Pick a random word on every pageload.
// const answer = sample(WORDS);
// // To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  // running | won | lost
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  const [gameStatus, setGameStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  const handleSubmitNewGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };

  const handleRestartGame = () => {
    setGameStatus('running');
    setGuesses([]);
    setAnswer(sample(WORDS));
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitNewGuess={handleSubmitNewGuess}
        isDisabled={gameStatus !== 'running'}
      />
      <GuessKeyboard guesses={guesses} answer={answer} />
      {gameStatus === 'won' && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestartGame={handleRestartGame}
        />
      )}
      {gameStatus === 'lost' && (
        <LostBanner answer={answer} handleRestartGame={handleRestartGame} />
      )}
    </>
  );
}

export default Game;
