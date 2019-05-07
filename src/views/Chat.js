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
                <div className="top-buttons">
                    <Link to="/">
                        <button className="top-button">
                            <FontAwesomeIcon className="fa-3x" icon="times"/>
                        </button>
                    </Link>

                    <button className="top-button" onClick={ this.props.toggleBlur }>
                        <FontAwesomeIcon className="fa-2x" icon="adjust"/>
                    </button>

                    <button className="top-button" style={{marginRight: '20px'}} onClick={ this.props.toggleCrisis }>
                        <FontAwesomeIcon className="fa-2x" icon="exclamation"/>
                    </button>
                </div>
                <ul className="messages">
                    {messages}
                </ul>
                {this.props.isCrisis && 
                <CrisisAlert onDismiss={this.props.toggleCrisis}/>
                }
                <Input onSubmit={this.props.submit} placeholder="What's on your mind?"/>
            </div>
        );
    }
}

export default Chat;
