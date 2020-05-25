import React, {useState} from 'react';
import "./App.css";
import GameBoard from "./components/game-board/GameBoard";
import LeaderBoard from "./components/leader-board/LeaderBoard";

function App() {
    const [winners , setWinners] = useState([]);
    const handleSetWinners = (winnerList) => {
        setWinners(winnerList.reverse())
    };
  return (
      <div className="App">
        <GameBoard onSetWinners={handleSetWinners}/>
        <LeaderBoard onSetWinners={handleSetWinners} winners={winners}/>
      </div>);
}

export default App;
