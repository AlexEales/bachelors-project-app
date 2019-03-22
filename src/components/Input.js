import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    render() {
        return (
            <div className="input-wrapper">
                <input type="text" placeholder="What's on your mind?"/>
                <button className="submit"> > </button>
            </div>
        );
    }
}
export default Input;