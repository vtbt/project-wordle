import React from 'react';

function ResultBanner({ correctGuesses, answer }) {
  return correctGuesses ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{correctGuesses} guesses</strong>.
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default ResultBanner;
