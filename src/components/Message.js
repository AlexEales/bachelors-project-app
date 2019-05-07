import React, {Component} from 'react';
import './Message.css';

var classNames = require('classnames');

class Message extends Component {
    render() {
        return (
            <div>
                <div className={classNames({message: true, 'user': !this.props.isBot, 'bot': this.props.isBot})}>
                    <span className="message-text">{this.props.text}</span>
                </div>
            </div>
        );
    }
}
export default Message;
