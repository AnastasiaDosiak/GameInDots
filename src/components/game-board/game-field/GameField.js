import React, {Component} from 'react';
import "./GameField.css";
import Square from "./square/Square";

class GameField extends Component {
    render() {
        return (
            <div className="game-field">
                <Square/>
            </div>
        );
    }
}

export default GameField;
