import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  const gameOver = gameStatus !== "running";

  const addGuess = (newGuess) => {
    console.log(newGuess);
    const nextGuesses = [...guesses, newGuess];

    if (newGuess === answer) {
      setGameStatus("won");
    }

    // if there are already 5 guesses, and this last guess is incorrect, then is loser
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
    setGuesses(nextGuesses);
  };

  return (
    <div className="game-wrapper">
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} gameOver={gameOver} />
      {gameStatus === "won" && <WonBanner numberOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </div>
  );
}

export default Game;
