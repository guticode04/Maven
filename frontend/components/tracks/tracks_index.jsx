import React from 'react';
import TrackIndexItem from './tracks_index_item';
import Modal from '../modal/modal';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowing: sessionStorage.getItem('modalStatus')
    }
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({
      isShowing: false,
    });
  }
  

  componentDidMount() {
    this.props.fetchTracks();
    sessionStorage.setItem('modalStatus', true)
  }

  componentDidUpdate() {
    if(this.state.isShowing) {
      sessionStorage.setItem('modalStatus', false)
    }
  }

  render() {
    
    const { tracks } = this.props;
    const modalStatus = sessionStorage.getItem('modalStatus');
    
    return(
      <>
        { 
        // has the modal been seen during this session
          this.state.isShowing ? (
          // modalStatus ? (
          <div className="modal-overlay">
              <Modal close={this.closeModal} />
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