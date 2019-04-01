import React, {Component} from 'react';
import './NameForm.css';
import {Link} from 'react-router-dom';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Eliza',
            botname: 'Sam'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitInput = this.submitInput.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    // Needed to prevent weird recursive calling issue.
    submitInput() {
        console.log('here');
        this.props.submit(this.state.username, this.state.botname);
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        What would you like me to call you?
                        <input className="nameInput" name="username" type="text" onChange={this.handleInputChange}
                               placeholder="Eliza"/>
                    </label>
                    <label>
                        What would you like to call me?
                        <input className="nameInput" name="botname" type="text" onChange={this.handleInputChange}
                               placeholder="Sam"/>
                    </label>
                    <Link to="/chat/">
                        <button className="start" onClick={this.submitInput}>
                            Start Talking
                        </button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default NameForm;
