import React, {Component} from 'react';
import "./Input.scss";

class Input extends Component {
    handleNameChange = (event) => {
        const userName = event.target.value;
        userName.trim().length > 0 && this.props.onChangeUserNameState(userName)
    };

    render() {
        const {userName} = this.props;

        return (
            <input className="input"
                   autoFocus
                   onChange={this.handleNameChange}
                   placeholder="Enter your name"
                   value={userName}
            />
        );
    }
}

export default Input;
