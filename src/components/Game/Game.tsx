import React from "react";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { EMPTY_STRING, NUM_OF_GUESSES_ALLOWED } from "../../constants";

type GuessList = string[];
const PLACEHOLDER_LIST: GuessList = Array(NUM_OF_GUESSES_ALLOWED).fill(
  EMPTY_STRING
);

function Game() {
  const [guesses, setGuesses] = React.useState<GuessList>(PLACEHOLDER_LIST);

  const handleSubmitGuess = (guess: string) => {
    setGuesses((prevGuesses) => {
      const nextIndex = prevGuesses.findIndex((g) => g === EMPTY_STRING);
      if (nextIndex === -1) {
        return prevGuesses;
      }
      const newGuesses = [...prevGuesses];
      newGuesses[nextIndex] = guess;
      return newGuesses;
    });
  };

  return (
    <>
      <GuessList items={guesses} />
      <GuessInput onSubmit={handleSubmitGuess} />
    </>
  );
}

export default Game;
