import React, { Component } from 'react';
import Message from './components/Message';
import Input from './components/Input';
import './App.css';

class App extends Component {
  render() {
    const messages = [
      { text: 'Hello Sam', isBot: false },
      { text: 'Hello Bob', isBot: true }
    ];
    return (
      <div>
        <div className="chat-area">
          <ul className="messages">
            { messages.map((message) => <li><Message text={message.text} isBot={message.isBot} /></li>) }
          </ul>
        </div>
        <Input/>
      </div>
    );
  }
}

export default App;
