import React, {Component} from 'react';
import "./CountSquares.scss";

class CountSquares extends Component {
    render() {
        const {pressedIndexes, missedIndexes} = this.props;

        return (<>
                <span className="count__pressed-squares"> {pressedIndexes.length} - pressed</span>
                <br/>
                <span className="count__missed-squares"> {missedIndexes.length} - missed</span>
            </>
        );
    }
}

export default CountSquares;
