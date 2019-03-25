import React, { Component } from 'react';
import './Chat.css';
import Message from './Message';
import Input from './Input';

class Chat extends Component {
    // Move messages to here, leave the background of the app and the input bar and route to the name input etc.
    // Have a different submit input method for each view therefore the input bar is part of the view.
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { id: 1, text: 'Hello Sam', isBot: false },
                { id: 2, text: 'Hello Bob', isBot: true }
            ]
        }
        this.submitMessage = this.submitMessage.bind(this);
    }

    submitMessage(message) {
        this.setState(state => {
            const messages = state.messages;
            messages.push({ id: messages.length + 1, text: message, isBot: false });
            return {
            messages
            };
        });
    }

    render() {
        const messages = this.state.messages.map((message) => 
            <li key={message.id}>
            <Message text={message.text} isBot={message.isBot} />
            </li>
        );
        return (
            <div>
                <ul className="messages">
                { messages }
                </ul>
                <Input onSubmit={this.submitMessage}/>
            </div>
        );
    }
}

export default Chat;