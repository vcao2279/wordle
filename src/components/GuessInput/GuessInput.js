import React from "react";
function GuessInput({ addGuess }) {
  const [input, setInput] = React.useState("");

  const handleChange = (e) => {
    const nextInput = e.target.value.toUpperCase();
    setInput(nextInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGuess(input);
    setInput("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        type="text"
        id="guess-input"
        pattern="^.{5}$"
        title="5 letter word"
        value={input}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
