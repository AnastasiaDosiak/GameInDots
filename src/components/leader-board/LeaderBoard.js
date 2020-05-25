import React, {Component} from 'react';
import "./LeaderBoard.scss";

class LeaderBoard extends Component {
    componentDidMount() {
        this.getWinnerList();
    }

    getWinnerList = () => {
        fetch('https://starnavi-frontend-test-task.herokuapp.com/winners').then(
            res => res.json()
        ).then(
            winnerList => this.props.onSetWinners(winnerList)
        )
    };

    render() {
        const {winners} = this.props;

        return (
            <div className="leader-board">
                <h1 className="leader-board__title">
                    Leader Board
                </h1>
                <ul className="leader-board__list">
                    {winners.map(({winner, date, id}) => {
                        return <li key={id} className="leader-board__item">
                            <div className="leader-board__winner-name">
                                {winner}
                            </div>
                            <div className="leader-board__time">
                                {date}
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default LeaderBoard;
