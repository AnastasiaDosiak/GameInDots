import React, {Component} from 'react';
import "./GameBoard.css";
import GameField from "./game-field/GameField";

class GameBoard extends Component {
    render() {
        return (
            <div className="game-board">
                <div className="game-board__header-container">
                    <input className="game-board__input" placeholder="Enter  your name"/>
                    <button className="game-board__button" type="submit">Play</button>
                </div>
                <GameField/>
            </div>
        );
    }
}

export default GameBoard;
