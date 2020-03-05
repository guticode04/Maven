import React from 'react';
import { Link } from 'react-router-dom';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.login(this.state)
  }

  renderErrors() {
    return (
      <div className="errors-explained">
        <ul>
          {
            this.props.errors.map((error,i) => (
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
      <div className="session-form">
        <div className="form-container">
          <div className="form-header">
            <h1 className="form-type">Sign In</h1>
            <button 
              className="demo-btn"
              onClick={this.props.demoLogin}
            >Demo Sing In</button>
          </div>
          <form>
            {this.renderErrors()}
              <label>Maven Email
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleInput('email')}
                />
              </label>
              <label>Password
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInput('password')}
                />
              </label>
            <button 
              className="block-btn"
              onClick={this.handleSubmit}
            >Login!</button>
          </form>
          <div className="session-form-footer">
            Don't have an account? <Link className="signup-link" to="/signup">
              Sign up here</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;