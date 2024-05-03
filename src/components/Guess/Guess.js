import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const letters = checkGuess(guess, answer);

  return (
    <p key={crypto.randomUUID()} className="guess">
      {range(5).map((i) => (
        <Cell
          key={i}
          letter={letters ? letters[i].letter : undefined}
          status={letters ? letters[i].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
