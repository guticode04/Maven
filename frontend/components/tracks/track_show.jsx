import React from 'react';


class TrackShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      lyrics: this.props.track ? this.props.track.lyrics : '',
      startIdx: 0,
      endIdx: 0,
      beginSelection: null,
    }
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTrack = this.deleteTrack.bind(this);
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
  }

  componentDidMount(){
    this.props.fetchTrack(this.props.match.params.trackId)
  }

  componentDidUpdate(oldProps){
    if ( this.props.track !== oldProps.track && this.props.track ) {
      this.setState({ lyrics: this.props.track.lyrics })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTrack({ lyrics: this.state.lyrics, id: this.props.track.id })
    .then(() => this.setState({show: false}))
  }

  handleInput(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  showForm(e){
      e.preventDefault();
      this.setState({ show: true });
  }

  hideForm(e){
    e.preventDefault();
    this.setState({ show: false })
  }

  deleteTrack(e) {
    e.preventDefault();
    
    this.props.deleteTrack(this.props.track.id)
    .then(() => this.props.history.push(`/`))
  }

  mouseDownHandler(e) {
    this.setState({
      beginSelection: e.target,
    })
  }

  mouseUpHandler(e) {
    const { annotations } = this.props;

    if(this.state.beginSelection === null) return;

    let sectionOffSet = parseInt(this.state.beginSelection);
    let sectionEnd = parseInt(e.target);

    let startIdx = window.getSelection().anchorOffset + sectionOffSet;
    let endIdx = window.getSelection().focusOffset + sectionEnd;

    //no overlap on existing annotations
    if (!(start_index) || !(end_index)) {
      this.setState({ beginSelection: null });
      return null;
    };

    //loop through annotations
    for (let index = 0; index < annotations.length; index++) {
      const annotation = annotations[index];
      let annoStartIdx = Math.min(annotations.startIdx, annotations.endIdx);
      let annoEndIdx = Math.min(annotations.startIdx, annotations.endIdx);

      if( (annoStartIdx >= startIdx) && (annoEndIdx >= endIdx) ) {
        this.setState({ 
          beginSelection: null, 
        })
      }
    }
  }

  render(){
    const { track } = this.props;
    if ( !track ) {
      return null;
    }
    return(
      <div>
        <div className="track-header">
          <div className="track-header-info">
            <i className="fas fa-music"></i>
            <div className="track-info">
              <h2 className="artist-name">{track.artist_name}</h2>
              <h3 className="track-title">{track.title}</h3>
            </div>
          </div>
        </div>
        <div className="track-body-container">
          <div className="track-body">
            <div className="lyrics-column">
              <div className="lyrics-btns">
                {
                  this.state.show ? (
                    <>
                      <button className="submit-edit-btn" onClick={this.handleSubmit}>
                        Submit Changes
                      </button>
                      <button className="cancel-edit-btn" onClick={this.hideForm}>
                        Cancel
                      </button>
                    </>
                  ) : ( 
                      <>
                        {this.props.currentUser && (
                          <>
                            <button className="edit-btn" onClick={this.showForm}>
                              Edit Lyrics
                            </button>
                            <button className="delete-btn" onClick={this.deleteTrack}>
                              Delete Track
                            </button>
                          </>
                        )}
                      </>
                      
                  )
                }
              </div>
              { 
                this.state.show ? (

                  <div className="edit-form">
                    <form>
                      <textarea
                        className="lyrics-text"
                        value={this.state.lyrics}
                        onChange={this.handleInput('lyrics')} 
                      />
                    </form>
                  </div>
                ) : <p>{track.lyrics}</p>
              }
            </div>
            <div className="about-track-header">
              <span className="about-track">About {track.title}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackShow;