import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Route, Switch, Redirect } from "react-router-dom";

import { SignIn, SignUp, ForgotPassword, Dashboard } from './pages';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: "",
        password: ""
    }
  }
  render() {
    return (
      <div className="App">
          <Switch>
            <Route path="/signin" component={SignIn} handleChange={this.handleChange}/>
            <Route path="/signup" component={SignUp} handleChange={this.handleChange}/>
            <Route path="/forgotpassword" component={ForgotPassword}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route render={ props => <Redirect to={{ pathname: '/signin', state: { from: props.location } }} /> } />
          </Switch>
      </div>
    );
  }

}

export default App;
