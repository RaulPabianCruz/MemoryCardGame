import { useState } from 'react';
import CardComponent from './CardComponent';

function shuffleCards(oldArray) {
  let newArray = [...oldArray];
  let length = newArray.length;

  while (length > 0) {
    let index = Math.floor(Math.random() * length);
    length -= 1;

    let temp = newArray[length];
    newArray[length] = newArray[index];
    newArray[index] = temp;
  }

  return newArray;
}

export default function MemoryGame({ pokemonList }) {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [selectionList, setSelectionList] = useState([]);
  const [pokeList, setPokeList] = useState(shuffleCards(pokemonList));

  function processChoice(name) {
    let isChosenTwice = selectionList.includes(name);

    if (!isChosenTwice) {
      let newScore = score + 1;
      setScore(newScore);
      setSelectionList(selectionList.concat(name));

      if (newScore > topScore) setTopScore(newScore);
    } else {
      setScore(0);
      setSelectionList([]);
    }

    setPokeList(shuffleCards(pokeList));
  }

  return (
    <div className="memory-game container">
      <div className="memory-game header-section">
        <div className="desc-section">
          <h1>Memory Game</h1>
          <p>
            {
              "Get points by clicking on an image, but don't click one any more than once."
            }
          </p>
        </div>
        <div className="score-section">
          <p className="current-score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      </div>
      <div className="card-section">
        {pokeList.map((pokeName) => (
          <CardComponent
            key={pokeName}
            name={pokeName}
            onSelection={processChoice}
          />
        ))}
      </div>
    </div>
  );
}
