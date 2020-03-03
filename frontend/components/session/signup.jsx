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


  render() {
    return (
      <div className="session-form">
        <h2>Sign Up</h2>
        <button onClick={this.props.demoLogin}>Demo Login!</button>
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
        </form>
      </div>
    )
  }
}


export default Signup;