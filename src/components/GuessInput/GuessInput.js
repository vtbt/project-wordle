import React from 'react';

function GuessInput() {
  const [inputValue, setInputValue] = React.useState('');
  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value.toUpperCase());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with input's value", inputValue);
    setInputValue('');
  };
  return (
    <form class="guess-input-wrapper" onSubmit={handleSubmit}>
      <label for="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        // required
        pattern="^[A-Z]{5}$"
        // minLength="5"
        // maxLength="5"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
