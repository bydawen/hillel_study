import { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Winner from './components/Winner/Winner';

import jakesData from './data/jakes.json';

function App() {
  const [jakes, setJakes] = useState(jakesData);
  const [winner, setWinner] = useState(null);

  const handleVote = (clickedJakeId) => {
    setJakes(previousJakes =>
      previousJakes.map(currentJake => currentJake.id === clickedJakeId ? { ...currentJake, votes: currentJake.votes + 1 } : currentJake)
    );
  };

  const showResults = () => {
    const winningJake = jakes.reduce((previousJake, currentJake) => {
      if (!previousJake) {
        return currentJake;
      }

      if (currentJake.votes > previousJake.votes) {
        return currentJake;
      }
      return previousJake;

    }, null);

    setWinner(winningJake);
  };

  const isVoted = jakes.some(item => item.votes > 0);

  return (
    <div>
      <h1>Homework 25.1</h1>
      <List jakes={jakes} onVote={handleVote} />

      {isVoted &&
        <button onClick={showResults}>Show Results</button>
      }

      {winner &&
        <Winner winner={winner} />
      }
    </div>
  );
}

export default App;
