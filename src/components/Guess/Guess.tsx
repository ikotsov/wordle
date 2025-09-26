type Props = {
  word: string;
};

function Guess({ word }: Props) {
  return (
    <p className="guess">
      <span className="cell">{word[0]}</span>
      <span className="cell">{word[1]}</span>
      <span className="cell">{word[2]}</span>
      <span className="cell">{word[3]}</span>
      <span className="cell">{word[4]}</span>
    </p>
  );
}

export default Guess;
