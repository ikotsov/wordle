import React from "react";
import { EMPTY_STRING } from "../../constants";

const GUESS_LENGTH = 5;
const INPUT_PATTERN = `[A-Za-z]{${GUESS_LENGTH}}`;

type Props = {
  onSubmit: (guess: string) => void;
};

function GuessInput({ onSubmit }: Props) {
  const [guess, setGuess] = React.useState(EMPTY_STRING);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(guess);
    setGuess(EMPTY_STRING);
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        maxLength={GUESS_LENGTH}
        minLength={GUESS_LENGTH}
        pattern={INPUT_PATTERN}
        onChange={(event) => {
          const guessModified = event.target.value.toUpperCase();
          setGuess(guessModified);
        }}
      />
    </form>
  );
}

export default GuessInput;
