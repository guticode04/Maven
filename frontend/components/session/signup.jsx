import React from 'react';

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

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value })
    };
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.createNewUser(this.state)
  }

  handleDemoSubmit(e) {
    e.preventDefault;
    this.props.demoLogin()
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sign Up</h2>
        <form>
          <label>Maven Nickname
            <input
              type="text"
              value={this.state.nickname}
              onChange={this.handleInput('nickname')}
            />
          </label>
          <label>Email
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
          <button onClick={this.handleSubmit}>Sign Up!</button>
          <button onClick={this.handleDemoSubmit}>Demo Login!</button>
        </form>
      </div>
    )
  }
}


export default Signup;