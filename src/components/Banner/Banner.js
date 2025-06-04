import React from 'react';

function Banner({ status, children, handleRestartGame }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <button
        onClick={handleRestartGame}
        className={`${status} restart-button`}
      >
        Restart game
      </button>
    </div>
  );
}

export default Banner;
