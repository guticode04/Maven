import React from 'react';
import { Link } from 'react-router-dom';
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.createNewUser(this.state)
  }

  renderErrors() {
    return(
      <div className="errors-explained">
        <ul>
          {
            this.props.errors.map((error, i) => (
              <li key={i}>
                {error}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }


  render() {
    return (
      <div className="whole-session-form">
        <div className="form-container">
          <div className="form-header">
            <h1 className="form-type">Sign Up</h1>
            <button 
              className="demo-btn"
              onClick={this.props.demoLogin}
            >Demo Sign In</button>
          </div>
          <form className="session-form">
            {this.renderErrors()}
            <label>Maven Nickname
              <input
                className="session-form-input"
                type="text"
                value={this.state.nickname}
                onChange={this.handleInput('nickname')}
              />
            </label>
            <label>Email
              <input
                className="session-form-input"
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
            </label>
            <label>Password
              <input
                className="session-form-input"
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>
            <button 
              className="block-btn"
              onClick={this.handleSubmit}
            >Create Account</button>
          </form>
          <div className="session-form-footer">
            Already have an account? <Link className="login-link" to="/login">
            Sign in here</Link>
          </div>
        </div>
      </div>
    )
  }
}


export default Signup;