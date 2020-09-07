import React from 'react';
import TrackIndexItem from './tracks_index_item';
import Modal from '../modal/modal';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
    }
  }

  closeModal() {
    this.setState({
      isShowing: false,
    });
  }

  openModal() {
    this.setState({
      isShowing: true,
    });
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    
    const { tracks } = this.props;
    
    return(
      <>
        { 
            this.state.isShowing ? 
          <div>
              this.openModal()
          </div> 
          : 
          <div>
              this.closeModal()
          </div> 
        }

        <div className="top-tracks-container">
          <h1 className="top-tracks-header">Tracks</h1>
          <div className="top-tracks-chart">
            <ol className="top-track-list">
              {tracks.map(track => 
              <TrackIndexItem key={track.id} track={track} />) }
            </ol>
          </div>
        </div>
      </>
    );
  }
}

export default TrackIndex;