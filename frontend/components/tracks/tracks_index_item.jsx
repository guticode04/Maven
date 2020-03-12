import React from 'react';
import { Link } from 'react-router-dom';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { track } = this.props;
    return(
      <Link to={`/tracks/${track.id}`}>
        <li className="track-list-item">
            <div className="albumart-title">
              <i className="fas fa-music" id="icon"></i>
              <div className="title">{ track.title }</div>
            </div>
            <div>
              <div className="artist">{ track.artist_name }</div>
            </div>
        </li>
      </Link>
    )
  }
}

export default TrackIndexItem;