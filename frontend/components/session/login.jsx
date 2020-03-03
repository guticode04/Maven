import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleDemoSubmit(e) {
    e.preventDefault;
    this.props.demoLogin()
  }

  render() {
    return (
      <div className="session-form">
        <h2>Login</h2>
        <form>
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
          <button onClick={this.handleSubmit}>Login!</button>
          <button onClick={this.handleDemoSubmit}>Demo Login!</button>
        </form>
      </div>
    )
  }
}

export default Login;