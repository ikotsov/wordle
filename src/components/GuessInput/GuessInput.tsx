import React from "react";
import { EMPTY_STRING } from "../../constants";

const GUESS_LENGTH = 5;
const INPUT_PATTERN = `[A-Za-z]{${GUESS_LENGTH}}`;

function GuessInput() {
  const [guess, setGuess] = React.useState(EMPTY_STRING);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Guess submitted:", guess);
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
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
