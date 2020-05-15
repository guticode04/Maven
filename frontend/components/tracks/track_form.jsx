import React from 'react';

class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      name: '',
      title: '',
      lyrics: '',
    })
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const trackForm = this;
    this.props.createTrack(this.state).then((createdTrack) => {
      trackForm.props.history.push(`/tracks/${createdTrack.track.id}`)
    })
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
          <h2 className="new-track-header">Add Track</h2>
        <form className="track-form-details">
          <label>
            Artist Name:
            <input className="new-track-input"
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
            />
          </label>
          <label>
            Title:
            <input className="new-track-input"
              type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
            />
          </label>
          <label>
            Lyrics:
            <textarea 
              className="add-lyrics"
              value={this.state.lyrics}
              onChange={this.handleInput('lyrics')}
              />
          </label>
            <button
              className="add-track-btn"
              onClick={this.handleSubmit}
            >Add Track</button>
        </form>
        </div>
      </div>
    )
  }
}

export default TrackForm;