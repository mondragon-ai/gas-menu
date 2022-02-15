import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function NavBar({ logo }) {
    return (
        <nav id="NAV" className='container'>
            <div className="mobile-menu-container">
                <div className="top-bar"></div>
                <div className="bottom-bar"></div>
            </div>
            <NavLink to="/" ><img className='App-logo' src={logo} /></NavLink>
            <FontAwesomeIcon icon={faFilter} style={{ marginRight: "7vw", fontSize: "1.7vh", listStyle: '#F59722' }} />
        </nav>
    );
}

export default NavBar;
