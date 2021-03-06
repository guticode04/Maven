import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const LowerNavBar = ({ loggedIn }) => {

  return(
    <div className="lower-nav">
      <ul className="lower-nav-btns">
        {
          loggedIn ? (
            <>
              <li><Link to="/tracks/new">Add Track</Link></li>
              <li className="btn-separator">|</li>
            </>
          ) : null
        }
        <li>
          <Link to="/">Top Tracks</Link>
        </li>

        <li className="btn-separator">|</li>

        <li>
          <a 
            href="https://www.linkedin.com/in/gustavo-gutierrez-7379141a8/"
            className="icon-links"
          >
            <i className="fab fa-linkedin" />
          </a>
        </li>

        <li>
          <a 
            href="https://angel.co/u/gustavo-gutierrez-9"
            className="icon-links"
          >
            <i className="fab fa-angellist"></i>
          </a>
        </li>

        <li>
          <a 
            href="https://github.com/guticode04"
            className="icon-links"
          >
            <i className="fab fa-github" />
          </a>
        </li>

        <li>
          <a 
            href="https://gusgutierrez.com"
            className="icon-links"
          >
            <i className="fas fa-user-tie"></i>
          </a>
        </li>
      </ul>
    </div>
  )

}

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser)
})

export default connect(mapStateToProps)(LowerNavBar)