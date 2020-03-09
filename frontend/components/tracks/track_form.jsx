import React from 'react';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      title: '',
      lyrics: '',
    })
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createTrack(track);
  }

  handleInput(field){
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  render(){

    return(
      <div className="new-track-form">
        <div className="new-track-form-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input 
              type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
            />
          </label>
          <label>
            Lyrics:
            <textarea 
              value={this.state.lyrics}
              onChange={this.handleInput('lyrics')}
            />
          </label>
        </form>
        </div>
      </div>
    )
  }
}

export default TrackForm;