import React, { Component } from 'react';
import Message from './components/Message';
import Input from './components/Input';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [
        { text: 'Hello Sam', isBot: false },
        { text: 'Hello Bob', isBot: true }
      ]
    }
    this.submitMessage = this.submitMessage.bind(this);
  }

  submitMessage(message) {
    this.setState(state => {
      const messages = state.messages.push(state.input);
      return {
        input: message,
        messages
      };
    });
  }

  render() {
    console.log(this.state.messages);
    const messages = this.state.messages.map((message) => 
    <li>
      <Message text={message.text} isBot={message.isBot} />
    </li>);
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
