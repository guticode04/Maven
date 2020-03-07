import React from 'react';

class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { track } = this.props;
    return(
      <li>
        <span>{ track.title }</span>
      </li>
    )
  }
}

export default TrackIndexItem;