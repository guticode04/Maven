import React from 'react';
import TrackIndexItem from './tracks_index_item'; 

class TrackIndex extends React.Component {

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    
    const { tracks } = this.props;
    
    return(
      <div>
        <ul>
          {tracks.map(track => 
          <TrackIndexItem key={track.id} track={track} />) }
        </ul>
      </div>
    );
  }
}

export default TrackIndex;