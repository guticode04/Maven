import React from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends React.Component {
  render() {
    return(
      <div className="render-404">
          <h1 className="message-404">Whoops! Page Not Found</h1>
          <p className="home-message">
            Sorry! Couldn't find the page you were looking for. You can 
            <Link to="/" className="home-link"> go back to homepage here</Link>.
          </p>
      </div>
    )
  }
}

export default ErrorPage;