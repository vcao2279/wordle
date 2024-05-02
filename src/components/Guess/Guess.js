import React from "react";

function Guess({ guess }) {
  return (
    <p key={crypto.randomUUID()} className="guess">
      {guess?.split("").map((letter) => (
        <span key={crypto.randomUUID()} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
