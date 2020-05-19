import React, {Component} from 'react';
import "./LeaderBoard.css";

class LeaderBoard extends Component {
    render() {
        return (
            <div className="leader-board">
                <h1 className="leader-board__title">
                    Leader Board
                </h1>
                <div className="leader-board__item">
                    <div className="leader-board__winner-name">
                        winner's name
                    </div>
                    <div className="leader-board__time">
                        created time
                    </div>
                </div>
            </div>
        );
    }
}

export default LeaderBoard;
