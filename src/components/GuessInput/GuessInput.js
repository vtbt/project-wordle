import React from 'react';

function GuessInput({ handleSubmitNewGuess, isDisabled }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  const handleChange = (event) => {
    const nextGuess = event.target.value.toUpperCase();
    setTentativeGuess(nextGuess);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitNewGuess(tentativeGuess);
    setTentativeGuess('');
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        onChange={handleChange}
        disabled={isDisabled}
      />
    </form>
  );
}

export default GuessInput;
