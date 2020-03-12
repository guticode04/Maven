import React from 'react';
import TrackIndexItem from './tracks_index_item'; 

class TrackIndex extends React.Component {

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    
    const { tracks } = this.props;
    
    return(
      <div className="top-tracks-container">
        <h1 className="top-tracks-header">Tracks</h1>
        <div className="top-tracks-chart">
          <ol className="top-track-list">
            {tracks.map(track => 
            <TrackIndexItem key={track.id} track={track} />) }
          </ol>
        </div>
      </div>
    );
  }
}

export default TrackIndex;