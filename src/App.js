import React, { useState } from 'react';
import { InputForm } from './Components/InputForm';
import { OutputLeaderboard } from './Components/OutputLeaderboard';

function App() {
  const [leaderboard, setLeaderboard] = useState([]);

  // eachEntry: represent a player-score pair each time Submit is clicked.
  const updateLeaderboardArray = eachEntry => {
    setLeaderboard([...leaderboard, eachEntry]);
  };
  console.log(leaderboard);

  return (
    <div className='container mt-4'>
      <InputForm updateLeaderboardArray={updateLeaderboardArray} />
      <OutputLeaderboard leaderboard={leaderboard} />
    </div>
  );
}
export default App;
