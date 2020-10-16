import React from 'react';
import AnnotationShow from '../annotations/annotation_show_container';
import AnnotationForm from '../annotations/annotation_form_container';
import CommentForm from '../comments/comment_form_container';
import CommentIndex from '../comments/comments_index_container';


class TrackShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showAnnoButton: true,
      showAnnoForm: true,
      lyrics: this.props.track ? this.props.track.lyrics : '',
      selectedText: "",
      startIdx: 0,
      endIdx: 0,
      beginSelection: null,
    }
    this.hideAnnoButton = this.hideAnnoButton.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTrack = this.deleteTrack.bind(this);
    this.mouseDownHandler = this.mouseDownHandler.bind(this);
    this.mouseUpHandler = this.mouseUpHandler.bind(this);
    this.toggleAnnoForm = this.toggleAnnoForm.bind(this);
  }

  componentDidMount(){
    // debugger
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

  hideForm(e){
    e.preventDefault();
    this.setState({ show: false })
  }

  showForm(e){
      e.preventDefault();
      this.setState({ show: true });
  }

  hideAnnoButton(e) {
    e.preventDefault();
    this.setState({ showAnnoButton: false })
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

    let selectedText = window.getSelection().toString();
    let startIdx = this.state.lyrics.indexOf(selectedText);
    let endIdx = startIdx + (selectedText.length - 1);

    this.setState({
      startIdx: startIdx,
      endIdx: endIdx,
      selectedText: window.getSelection().toString(),
      // beginSelection: null, //resets for next selection
    })
    
  }

  toggleAnnoForm() {
    this.setState({showAnnoForm: false});
    // return (() => {
    //   this.setState({ showAnnoForm: false})
    // })
  }

  //stuck. need to comeback to this!!!

  // highlightAnnotatedLyrics() {
  //   let { track } = this.props;
  //   let annotations = track.annotations;
  //   annotations.forEach(annotation => {
  //     let start = annotation.start_idx;
  //     let end = annotation.end_idx;
  //     let length = end - start;
  //     let highlightedText = track.lyrics[start, length];

  //   });
  // }

  render(){
    // const { track, annotations } = this.props;
    // debugger
    const { track } = this.props;
    //gives array of all comments for track
    // [ { id: 3, body: "Love this song", user_id: 1, track_id: 1 } ]
    // can only declare this.variable once track has been fetched otherwise
    // error occurs
    // Object.values(this.props.track.comments)[0].body
    // const comments = Object.values(track.comments); 
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
                ) : <p onMouseDown={this.mouseDownHandler} onMouseUp={this.mouseUpHandler}>
                      {track.lyrics}
                    </p>
              }
              <div className="comments-container">
                {
                  this.props.loggedIn ?
                  <CommentForm 
                    trackId={track.id}
                    userId={this.props.currentUser.id}
                  />
                  : null
                }
                {
                  track.comments ?
                  <CommentIndex
                  />
                  : null
                }
              </div>
            </div>

            {/* Track Information and Annotations Column */}
            <div className="about-track-header">
              <span className="about-track">About {track.title}</span>
              {
                this.state.selectedText.length != 0 ? 

                  this.state.showAnnoButton ?

                    <div className="start-annotation-btn-container">
                      <button className="start-annotation-btn" onClick={this.hideAnnoButton}>
                        Start Maven Annotation
                      </button>
                    </div>

                      : 

                    this.state.showAnnoForm ?
                      //What if i pass it a function so that it'll close once the
                      //save button is hit
                      <AnnotationForm
                        showAnnoForm={this.state.showAnnoForm}
                        toggleAnnoForm={this.toggleAnnoForm}
                        startIdx={this.state.startIdx}
                        endIdx={this.state.endIdx}
                        userId={this.props.currentUser.id}
                        trackId={track.id}
                      />
                      
                    :
                      // null
                    <AnnotationShow 
                      // annotations={ track.annotations }
                    />

                :
                
               null
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackShow;