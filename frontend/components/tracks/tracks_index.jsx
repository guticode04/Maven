import React from 'react';
import TrackIndexItem from './tracks_index_item';
import Modal from '../modal/modal';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowing: true,
    }
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({
      isShowing: false,
    });
  }

  openModal(e) {
    e.preventDefault();
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
          this.state.isShowing ? (
          <div>
              <Modal open={this.openModal} close={this.closeModal} />
          </div> 
          ) : null }

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