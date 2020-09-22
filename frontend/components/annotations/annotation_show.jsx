import React from 'react';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAnnotation(this.props.annotation.id);
  }

  render(){
    const { annotation } = this.props;
    debugger;
    return(
      <>
      <div className="annotation-container">
        <div className="annotation-divider"></div>
        <div className="annotation-triangle-container">
          <div className="triangle-top"></div>
          <div className="triangle-tip"></div>
          <div className="triangle-bottom"></div>
        </div>
        <div className="annotation-info">
          <h1 className="annotation-header">Maven Annotation</h1>
          <p className="annotation-body">{annotation.body}</p>
        </div>
      </div>
      </>
    )
  }
}

export default AnnotationShow;