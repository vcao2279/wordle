import React from "react";

const NUMBER_OF_LETTERS = 5;

function Guess({ guess }) {
  const letters = guess ? guess.split("") : Array(NUMBER_OF_LETTERS).fill("");

  return (
    <p key={crypto.randomUUID()} className="guess">
      {letters.map((letter) => (
        <span key={crypto.randomUUID()} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
