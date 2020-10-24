import React from 'react';
import TrackIndexItem from './tracks_index_item';
import Modal from '../modal/modal';

class TrackIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // sessionStorage.getItem('modalStatus') returns a string!
      // so in this case the string is "false"
      isShowing: true,
    }
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({
      isShowing: false,
    });
    // sessionStorage.setItem('modalStatus', "")
  }
  

  componentDidMount() {
    this.props.fetchTracks();
    // if( Boolean(sessionStorage.getItem('modalStatus')) === false ) {
    //   sessionStorage.setItem('modalStatus', "true");
    // }
  }

  render() {
    
    const { tracks } = this.props;
    // const modalStatus = sessionStorage.getItem('modalStatus');
    
    return(
      <>
        { 
          this.state.isShowing ? 
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