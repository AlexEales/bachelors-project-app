import React, {Component} from 'react';
import './CrisisAlert.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class CrisisAlert extends Component {
    render() {
        return (
            <div className="crisis-wrapper">
                <button className="exit-crisis" onClick={this.props.onDismiss}>
                    <FontAwesomeIcon className="fa-2x" icon="times"/>
                </button>
                <h2>Hi, it looks like you may need some help</h2>
                <p>
                    I have detected that you may need a little more help than I can give you and so my best advice
                    is to contact one of the many organisations that are available! <br/><br/>
                    If you don't feel up to contacting them yourself let me know some information and I will contact
                    them on your behalf! And remember, if you don't want or need this help feel free to close this
                    message and continue talking to me, I will be hear as long as you need me!
                </p>
                <input className="crisis-input" type="text" placeholder="Phone Number"/>
                <p>or</p>
                <input className="crisis-input" type="text" placeholder="Postcode"/>
                <p>

                </p>
                <button className="crisis-submit" onClick={this.props.onDismiss}>
                    Submit <FontAwesomeIcon icon="paper-plane"/>
                </button>
            </div>
        );
    }
}

export default CrisisAlert;
