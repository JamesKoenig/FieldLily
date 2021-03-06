import React from 'react';
import { withRouter } from 'react-router-dom';

import './session.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user); 
  }

  handleDemoUser(e) {
    e.preventDefault();
    const demoUser = {
      email: 'fieldlily@gmail.com',
      password: 'lilylily'
    };

    this.props.login(demoUser); 
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  renderErrors() {
    const errors = this.props.errors
    if (!errors || Object.keys(errors).length == 0) {
      return null
    }
    return(
      <ul className="session-errors">
        {Object.keys(errors).map((error, i) => (
          <li key={`error-${i}`}>
            {errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="login-form session-form">
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <button className="session-button">
              Sign In
            </button>
            <button
              id="demo-login"
              className="session-button"
              onClick={this.handleDemoUser}>
                      Demo Login
            </button>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
