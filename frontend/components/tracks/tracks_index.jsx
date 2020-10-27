import React from 'react';
import TrackIndexItem from './tracks_index_item';
import Modal from '../modal/modal';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasBeenSeen: sessionStorage.getItem('hasBeenSeen') || sessionStorage.setItem('hasBeenSeen', 'no'),
    }
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({
      hasBeenSeen: sessionStorage.setItem('hasBeenSeen', 'yes'),
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
          this.state.hasBeenSeen === 'no' ? 
            <div className="modal-overlay">
                <Modal close={this.closeModal} />
            </div> 
            :
          null 
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