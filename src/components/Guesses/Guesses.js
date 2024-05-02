import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guesses({ guesses, answer }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((rowNum) => (
        <Guess key={rowNum} guess={guesses[rowNum]} answer={answer} />
      ))}
    </div>
  );
}

export default Guesses;
