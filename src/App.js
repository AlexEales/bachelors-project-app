import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Chat from './views/Chat';
import NameForm from './views/NameForm';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPaperPlane, faTimes} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

library.add(faTimes, faPaperPlane);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			botname: '',
			messages: []
		};
		// Bind methods.
		this.submitMessage = this.submitMessage.bind(this);
		this.submitName = this.submitName.bind(this);
	}

	async submitMessage(message) {
		this.setState(state => {
			const messages = state.messages;
			messages.push({id: messages.length + 1, name: this.state.username, text: message, isBot: false});
			messages.push({id: messages.length + 1, name: this.state.botname, text: 'Typing...', isBot: true});
			return {
				messages
			};
		});
		const result = await this.dialogflowRequest(message);
		this.setState(state => {
			const messages = state.messages;
			messages.pop();
            messages.push({id: messages.length + 1, name: this.state.botname, text: result, isBot: true});
			return {
				messages
			};
		})
	}

	submitName(user, bot) {
		this.setState({
			'username': user, 'botname': bot, messages: [
				{
					id: 1,
					name: bot,
					text: 'Hello ' + user + ' my name is ' + bot + ', I`m here to answer any of your questions about mental health!',
					isBot: true
				}
			]
		});
	}

	async dialogflowRequest(utterance) {
        const response = await axios.post('https://ae470-test-api.herokuapp.com/message', {
            "text": utterance
		});
        return response.data.text;
	}

	render() {
		return (
			<Router>
				<div className="chat-area">
					<Route exact path="/" component={
						() => <NameForm submit={this.submitName}/>
					}/>
					<Route path="/chat/" exact component={
						() => <Chat messages={this.state.messages} submit={this.submitMessage}/>
					}/>
				</div>
			</Router>
		);
	}
}

export default App;
