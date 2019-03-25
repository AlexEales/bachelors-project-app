import React, { Component } from 'react';
import './App.css';
import Chat from './components/Chat';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="chat-area">
			<Route path="/" exact component={Chat}/>
        </div>
      </Router>
    );
  }
}

export default App;
