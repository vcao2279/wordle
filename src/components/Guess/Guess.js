import React from "react";
import { checkGuess } from "../../game-helpers";

const NUMBER_OF_LETTERS = 5;

function Guess({ guess, answer }) {
  const letters = guess
    ? checkGuess(guess, answer)
    : Array(NUMBER_OF_LETTERS).fill({ letter: "", status: "" });

  return (
    <p key={crypto.randomUUID()} className="guess">
      {letters.map((i) => (
        <span key={crypto.randomUUID()} className={`cell ${i.status}`}>
          {i.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
