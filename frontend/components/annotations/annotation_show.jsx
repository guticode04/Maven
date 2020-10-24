import React from 'react';

class AnnotationShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    }
    this.ref = React.createRef();
    this.hideAnnotationShow = this.hideAnnotationShow.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.hideAnnotationShow)
  }

  componentWillUnmount(){
    document.removeEventListener('click', this.hideAnnotationShow);
  }

  // This works only for the first time then we lose track of
  // current. Error says "cannot read property contains of null"
  // because when component unmounts current is set to null

  hideAnnotationShow(e) {
      e.preventDefault();
      this.setState( { show: false });
      if ( !this.ref.current.contains(e.target) ) {
        this.setState( { show: true });
        document.removeEventListener('click', this.hideAnnotationShow);
      }
      document.addEventListener('click', this.hideAnnotationShow)
  }


  render(){
    const { annotation } = this.props;
    return(
      <>
      {
        this.state.show ?
          <div className="annotation-container" ref={this.ref}>
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
          
          : 
          null
      }
      </>
    )
  }
}

export default AnnotationShow;