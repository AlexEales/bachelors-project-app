import React, { Component } from 'react';
import './Message.css';

var classNames = require('classnames');

class Message extends Component {
    render() {
        return (
            <div className={classNames({ message: true, 'user': !this.props.isBot, 'bot': this.props.isBot })}>
                <span className="message-text">{this.props.text}</span>
            </div>
        );
    }
}
export default Message;