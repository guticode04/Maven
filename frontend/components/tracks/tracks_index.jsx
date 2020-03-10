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
        <h3 className="top-tracks-header">Top Tracks</h3>
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