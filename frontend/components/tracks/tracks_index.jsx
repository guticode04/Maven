import React from 'react';

class TrackIndex extends React.Component {

  componentDidMount() {
    this.props.fetchTracks();
  }

  render() {
    // // debugger
    // const { tracks } = this.props;
    // console.log(tracks);
  
     const tracks = this.props.tracks.map(track => {
        return(
          <li key={track.id}>
            { track.title }
          </li>
        )
      })
    return(
      <div>
        <ul>
          { tracks }
        </ul>
      </div>
    );
  }
}

export default TrackIndex;