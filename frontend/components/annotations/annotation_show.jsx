import React from 'react';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props);
  }


  render(){
    return(
      <>
      <div className="annotation-container">
        <div className="annotation-divider"></div>
        <div className="annotation-triangle-container">
          <div className="triangle-top"></div>
          <div className="triangle-tip"></div>
          <div className="triangle-bottom"></div>
        </div>
      </div>
      </>
    )
  }
}

export default AnnotationShow;