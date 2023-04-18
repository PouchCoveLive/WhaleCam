import React, {Component} from "react"
import './style.css';

class EmailInput extends Component
{
    constructor()
    {
        super();
        this.state = {
            confirmation: "",
            emailRegistered: false
        };
    }

    addEmailToDB(email) {
        var XMLHttpRequest = require('xhr2');
        var req = new XMLHttpRequest();
        const url = 'http://localhost:8080/api/emails';
        req.open("POST", url);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(JSON.stringify({ "email": email }))
        req.onloadend = () => {
            if(req.status == 200) {
                this.setState({
                    confirmation: "Email Registered",
                    emailRegistered: true
                });
            }
            else {
                this.setState({
                    confirmation: "Email Failed to Register",
                    emailRegistered: false
                });
            }
            
            
        }
    }

    clicked()
    {
        let email  = this.refs.textBox.value;
        this.addEmailToDB(email);
    }

    render()
    {
        return (
            <div class="email-signup">
                <div>
                <label class="email-label"> Sign Up For Email Notifications</label>
                    <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                        <input
                            ref="textBox"
                            type="text"
                            name="emailField"
                            placeholder="Enter your email here"
                            class="text-box"
                        />
                        <button onClick={ (e) => { e.preventDefault(); this.clicked(); }} class="submit-box"> Submit </button>
                    </div>
                    <text class="email-confirm">{this.state.confirmation}</text>
                </div>
            </div>
        )
    }
}

export default EmailInput

