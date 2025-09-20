type Props = {
  items: string[];
};

function GuessList({ items }: Props) {
  return (
    <div className="guess-results">
      {items.map((guess, index) => (
        <div key={index} className="guess">
          {guess}
        </div>
      ))}
    </div>
  );
}

export default GuessList;
