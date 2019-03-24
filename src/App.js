import React, { Component } from 'react';
import Message from './components/Message';
import Input from './components/Input';
import './App.css';

class App extends Component {

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
    console.log(this.state);
    const messages = this.state.messages.map((message) => 
      <li key={message.id}>
        <Message text={message.text} isBot={message.isBot} />
      </li>
    );
    return (
      <div>
        <div className="chat-area">
          <ul className="messages">
            { messages }
          </ul>
        </div>
        <Input onSubmit={this.submitMessage}/>
      </div>
    );
  }
}

export default App;
