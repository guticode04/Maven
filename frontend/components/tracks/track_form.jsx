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
      // console.log(createdTrack)
      // const trackId = Object.values(createdTrack)[0].id;
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
        <form>
          <label>
            Artist Name:
            <input 
              type="text"
              value={this.state.name}
              onChange={this.handleInput('name')}
            />
          </label>
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
              cols="30"
              row="10"
              value={this.state.lyrics}
              onChange={this.handleInput('lyrics')}
            />
          </label>
            <button
              className="block-btn"
              onClick={this.handleSubmit}
            >Add Track</button>
        </form>
        </div>
      </div>
    )
  }
}

export default TrackForm;