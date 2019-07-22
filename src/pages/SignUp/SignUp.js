import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './SignUp.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            code: "",
            validationErrors: {}
        }
    }
    validate = (state) => {
        //simple regex check for one '@', a period after the @ and two or three letters after the period
        let eMailCheck = /^[^@\.]*@[^@]*\.[a-z]{2,3}$/gm
        let validationErrors = {}
        if (this.state.username === "") {
            validationErrors[1] = "Please enter a username"
        } else if (this.state.username.length < 3){
            validationErrors[1] = "Usernames must be at least three characters long"
        }
        if (this.state.password === "") {
            validationErrors[2] = "Please enter a password"
        } else if (this.state.password.length < 6 || !this.state.password.match(RegExp('\w*[A-Z]\w*'))){
            validationErrors[2] = "Passwords must be at least 6 characters and include at least 1 uppercase letter"
        }
        if (!this.state.email.match(eMailCheck)){
            validationErrors[3] = 'Please enter a valid email'
        }
        if (this.state.code.length !== 5){
            validationErrors[4] = "Please enter your referal code (if you don't have one, enter any 5 didgit alpha numeric number)"
        }
        this.setState({validationErrors}, () => {
            if (Object.keys(validationErrors).length === 0){
                this.submit()
            }
        })

    }
    handleChange = (e) => {
        let updateState = {}
        updateState[e.target.id.toLowerCase()] = e.target.value
        this.setState(updateState)
    }
    submit = () => {
        console.log(this.state, "=========the submit buttton=============")
    }
    render(){
        return <div className="signin-container">
                    <div >
                        <form>
                            <div className="form-group">
                                <input type="text" onChange={this.handleChange} className="form-control" id="userName" placeholder="Username"></input>
                                {this.state.validationErrors[1] ? <h6 className="text-danger">{this.state.validationErrors[1]}</h6> : null}
                            </div>
                            <div className="form-group">
                                <input type="password" onChange={this.handleChange} class="form-control" id="password" placeholder="Password"></input>
                                {this.state.validationErrors[2] ? <h6 className="text-danger">{this.state.validationErrors[2]}</h6> : null}
                            </div>
                            <div className="form-group">
                                <input type="email" onChange={this.handleChange} class="form-control" id="email" placeholder="Email"></input>
                                {this.state.validationErrors[3] ? <h6 className="text-danger">{this.state.validationErrors[3]}</h6> : null}
                            </div>
                            <div className="form-group">
                                {/* changed id in this input from referalCode to code to match parm for signup request */}
                                <input type="text" onChange={this.handleChange} class="form-control" id="code" placeholder="Referral code"></input>
                                {this.state.validationErrors[4] ? <h6 className="text-danger">{this.state.validationErrors[4]}</h6> : null}
                            </div>
                            <div >
                                <button type="button" onClick={this.validate} name="signIn" class=" btn btn-info signup-btn">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div class="signup-options-container">
                        <NavLink to="/signIn" className="signup-link" >Sign In</NavLink>
                        <NavLink to="/forgotpassword" className="forgot-password-link">Forgot</NavLink>

                    </div>
                </div>
    }
}

export default SignUp;
