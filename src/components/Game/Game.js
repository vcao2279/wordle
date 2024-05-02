import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [winner, setWinner] = React.useState(false);
  const [loser, setLoser] = React.useState(false);

  const gameOver = winner || loser;

  const addGuess = (newGuess) => {
    console.log(newGuess);

    const letters = checkGuess(answer, newGuess.toUpperCase());

    const isWinner = letters.every((letter) => letter.status === "correct");

    if (isWinner) {
      setWinner(true);
    }

    // if there are already 5 guesses, and this last guess is incorrect, then is loser
    if (guesses.length === 5) {
      setLoser(true);
    }

    setGuesses([...guesses, newGuess]);
  };

  const winBanner = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>
  );

  const loseBanner = (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    </div>
  );

  return (
    <div className="game-wrapper">
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} gameOver={gameOver} />
      {winner && winBanner}
      {loser && loseBanner}
    </div>
  );
}

export default Game;
