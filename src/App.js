import React from 'react';
import "./App.css";
import GameBoard from "./components/game-board/GameBoard";
import LeaderBoard from "./components/leader-board/LeaderBoard";

function App() {
  return (
      <div className="App">
        <GameBoard/>
        <LeaderBoard/>
      </div>);
}

export default App;
