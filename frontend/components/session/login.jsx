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


  render() {
    return (
      <div className="session-form">
        <div className="form-header">
          <h2>Login</h2>
          <button onClick={this.props.demoLogin}>Demo Login!</button>
        </div>
        <div className="form-container">
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
          </form>
        </div>
      </div>
    )
  }
}

export default Login;