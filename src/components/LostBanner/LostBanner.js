import React from 'react';
import Banner from '../Banner';

function LostBanner({ answer, handleRestartGame }) {
  return (
    <Banner
      status="sad"
      action={handleRestartGame}
      actionText="Restart game"
      buttonClassName="sad-restart-button"
    >
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
