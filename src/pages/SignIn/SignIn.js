import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchToken } from '../../actions/signInActions';
import { NavLink } from 'react-router-dom';

import './SignIn.scss';
import { ETIME } from 'constants';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    }
  }
  handleChange = (e) => {
    let updateState = {}
    updateState[e.target.id.toLowerCase()] = e.target.value
    this.setState(updateState)
  }
  submit = () => {
    console.log(JSON.stringify(this.state))
    fetch('http://178.128.233.31/frontend/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(res => console.log("hello", res))

  }
  render(){
    return (
      <div className="signin-container">
        <div >
            <form>
                <div className="form-group">
                    <input type="text" onChange={this.handleChange} className="form-control" id="userName" placeholder="Username"></input>
                </div>
                <div className="form-group">
                    <input type="password" onChange={this.handleChange} className="form-control" id="password" placeholder="Password"></input>
                </div>
                <div>
                    <button type="button" onClick={this.submit} name="signIn" className="btn btn-info signin-btn">Login</button>
                </div>
            </form>
        </div>
        <div className="signup-options-container">
            <NavLink to="/signup" className="signup-link">Sign Up</NavLink>
            <NavLink to="/forgotpassword" className="forgot-password-link">Forgot</NavLink>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    UserStore: state.UserStore
  }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(
            {
                fetchToken,
            },
            dispatch
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn)
