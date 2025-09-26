import Guess from "../Guess";

type Props = {
  items: string[];
};

function GuessList({ items }: Props) {
  return (
    <div className="guess-results">
      {items.map((guess, index) => (
        <Guess key={index} word={guess} />
      ))}
    </div>
  );
}

export default GuessList;
