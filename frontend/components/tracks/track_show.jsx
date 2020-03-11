import React from 'react';


class TrackShow extends React.Component {

  componentDidMount(){
    this.props.fetchTrack(this.props.match.params.trackId)
  }
  render(){
    const { track } = this.props;
    // debugger
    if ( !track ) {
      return null;
    }
    return(
      <div>
        <div className="track-header">
          <i className="fas fa-music"></i>
          <div className="track-info">
            <h2 className="artist-name">{track.artist_name}</h2>
            <h3 className="track-title">{track.title}</h3>
          </div>
        </div>
        <div className="track-body">
          <div className="lyrics-column">
            <p>{track.lyrics}</p>
          </div>
          <div className="about-track">
            <span>About {track.title}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackShow;