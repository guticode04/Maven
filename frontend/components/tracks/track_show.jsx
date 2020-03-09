import React from 'react';


class TrackShow extends React.Component {

  componentDidMount(){
    this.props.fetchTrack(this.props.match.params.trackId)
  }
  render(){
    const { track } = this.props;
    return(
      <div>
        <p>{track.title}</p>
      </div>
    )
  }
}

export default TrackShow;