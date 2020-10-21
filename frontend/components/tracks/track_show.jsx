import React from 'react';
import AnnotationShow from '../annotations/annotation_show_container';
import AnnotationForm from '../annotations/annotation_form_container';
import CommentForm from '../comments/comment_form_container';
import CommentIndex from '../comments/comments_index_container';
import TrackLyrics from './track_lyrics';

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
    this.props.fetchTrack(this.props.match.params.trackId);
    this.props.fetchAnnotations();
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
    const { track, annotations } = this.props;
    let trackAnnotations = annotations.filter(annotation => annotation.track_id === track.id);

    let offsetForSelection = parseInt(this.state.beginSelection.dataset.offset);

    let endSelection = parseInt(e.target.dataset.offset);

    let startIdx = window.getSelection().anchorOffset + offsetForSelection;
    let endIdx = window.getSelection().focusOffset + endSelection;

    if( !(startIdx) || !(endIdx) ) {
      this.setState({
        beginSelection: null
      });
      return null;
    }

    for ( let i = 0; i < trackAnnotations.length; i++ ) {
      let annotationStartIdx = Math.min(trackAnnotations[i].start_idx, trackAnnotations[i].end_idx);
      let annotationEndIdx = Math.max(trackAnnotations[i].start_idx, trackAnnotations[i].end_idx);
      //for new annotation overlap outside/inside existing annotation
      if( (annotationStartIdx >= startIdx) && (annotationEndIdx <= endIdx) ) {
        this.setState( { beginSelection: null } );
        return null;
      }
    }

    this.setState({
      startIdx: startIdx,
      endIdx: endIdx,
      selectedText: window.getSelection().toString(),
      beginSelection: null, //resets for next selection
    })
    
  }

  toggleAnnoForm() {
    this.setState({showAnnoForm: false});
  }

  render(){
    const { track, annotations } = this.props;
    let trackAnnotations = annotations.filter(annotation => (annotation.track_id === track.id));
    // debugger
    
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
                ) 
                  : 
                <TrackLyrics
                  track={track}
                  trackAnnotations={trackAnnotations}
                  mouseUpHandler={this.mouseUpHandler}
                  mouseDownHandler={this.mouseDownHandler}
                  selectedText={this.state.selectedText}
                />
                // <p onMouseDown={this.mouseDownHandler} onMouseUp={this.mouseUpHandler}>
                //       {track.lyrics}
                // </p>

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
                <CommentIndex
                  trackId={track.id}
                />
              </div>
            </div>

            {/* Track Information and Annotations Column */}
            <div className="about-track-header">
              <span className="about-track">About {track.title}</span>
              { 
                this.props.loggedIn ? (

                  // {
                    this.state.selectedText.length != 0 ? 
  
                      this.state.showAnnoButton ?
  
                        <div className="start-annotation-btn-container">
                          <button className="start-annotation-btn" onClick={this.hideAnnoButton}>
                            Start Maven Annotation
                          </button>
                        </div>
  
                          : 
  
                        this.state.showAnnoForm ?
                        
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
                          annotations={ trackAnnotations }
                        />
  
                    :
                    
                  null
                  // }
                )
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