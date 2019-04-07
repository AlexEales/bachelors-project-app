import React, {Component} from 'react';
import './Input.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleKeyPress(e) {
        if(e.keyCode === 13){
           this.props.onSubmit(this.state.value);
           this.setState({ value: '' });
        }
    }

    render() {
        return (
            <div className="input-wrapper">
                <input type="text" placeholder={this.props.placeholder}
                       value={this.state.value} onChange={this.handleChange}
                       onKeyDown={this.handleKeyPress}/>
                <button className="submit" onClick={() => {
                    this.props.onSubmit(this.state.value)
                }}>
                    <FontAwesomeIcon icon="paper-plane"/>
                </button>
            </div>
        );
    }
}
export default Input;
