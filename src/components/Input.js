import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div className="input-wrapper">
                <input type="text" placeholder="What's on your mind?"
                value={this.state.value}  onChange={this.handleChange}/>
                <button className="submit" onClick={() => {
                    this.props.onSubmit(this.state.value)
                }}>
                    >
                </button>
            </div>
        );
    }
}
export default Input;