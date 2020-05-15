import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const LowerNavBar = ({ loggedIn }) => {

  return(
    <div className="lower-nav">
      <ul className="lower-nav-btns">
        <li><Link to="/">Top Tracks</Link></li>
        <li>
          <a href="https://www.linkedin.com/in/gustavo-gutierrez-7379141a8/">
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://angel.co/u/gustavo-gutierrez-9">
            <i className="fab fa-angellist"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/guticode04">
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href="https://gusgutierrez.com">
            <i className="fas fa-user-tie"></i>
          </a>
        </li>
        {
          loggedIn ? (
            <>
              <li className="btn-separator">|</li>
              <li><Link to="/tracks/new">Add Track</Link></li>
            </>
          ) : null
        }
      </ul>
    </div>
  )

}

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser)
})

export default connect(mapStateToProps)(LowerNavBar)