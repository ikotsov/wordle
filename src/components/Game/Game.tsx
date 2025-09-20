import React from "react";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";

type GuessList = string[];
const EMPTY_LIST: GuessList = [];

function Game() {
  const [guesses, setGuesses] = React.useState<GuessList>(EMPTY_LIST);

  const handleSubmitGuess = (guess: string) => {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  };

  return (
    <>
      <GuessList items={guesses} />
      <GuessInput onSubmit={handleSubmitGuess} />
    </>
  );
}

export default Game;
