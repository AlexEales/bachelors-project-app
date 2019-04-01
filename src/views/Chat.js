import React, {Component} from 'react';
import './Chat.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Message from '../components/Message';
import Input from '../components/Input';

class Chat extends Component {
    render() {
        const messages = this.props.messages.map((message) =>
            <li key={message.id}>
                <Message name={message.name} text={message.text} isBot={message.isBot}/>
            </li>
        );
        return (
            <div>
                <button className="exit-chat">
                    <FontAwesomeIcon className="fa-2x" icon="times"/>
                </button>
                <ul className="messages">
                    {messages}
                </ul>
                <Input onSubmit={this.props.submit}/>
            </div>
        );
    }
}

export default Chat;
