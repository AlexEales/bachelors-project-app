import React, {Component} from 'react';
import './Chat.css';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Message from '../components/Message';
import Input from '../components/Input';
import CrisisAlert from '../components/CrisisAlert';

class Chat extends Component {
    render() {
        const messages = this.props.messages.map((message) =>
            <li key={message.id}>
                <Message name={message.name} text={message.text} isBot={message.isBot}/>
            </li>
        );
        return (
            <div className={this.props.blurred ? 'blurred' : ''}>
                <Link to="/">
                    <button className="exit-chat">
                        <FontAwesomeIcon className="fa-2x" icon="times"/>
                    </button>
                </Link>
                <ul className="messages">
                    {messages}
                </ul>
                {this.props.isCrisis &&
                <CrisisAlert onDismiss={this.props.crisisDismiss}/>
                }
                <Input onSubmit={this.props.submit} placeholder="What's on your mind?"/>
            </div>
        );
    }
}

export default Chat;
