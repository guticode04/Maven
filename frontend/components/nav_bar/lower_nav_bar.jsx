import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const LowerNavBar = ({ loggedIn }) => {

  return(
    <div className="lower-nav">
      <ul className="lower-nav-btns">
        <li><Link to="/">Top Tracks</Link></li>
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