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
          <div className="track-info">
            <p>{track.artist_name}</p>
            <p>{track.title}</p>
          </div>
        </div>
        <div className="track-body">
          <p>{track.lyrics}</p>
        </div>
      </div>
    )
  }
}

export default TrackShow;