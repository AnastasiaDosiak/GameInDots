import React, {Component} from 'react';
import "./Button.scss";

class Button extends Component {
    render() {
        const {isPlaying, allowedToPlay, onRestartGame, onStartGame} = this.props;

        return (
            <button className="button" disabled={!allowedToPlay}
                    onClick={isPlaying ? onRestartGame : onStartGame}
                    type="submit">
                {isPlaying ? "Play again" : "Play"}
            </button>
        );
    }
}

export default Button;
