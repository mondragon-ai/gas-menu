import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function NavBar({ logo, toggleFilter }) {
    return (
        <nav id="NAV" className='container'>
            <FontAwesomeIcon onClick={() => toggleFilter("container filter-open")} icon={faFilter} style={{ marginLeft: "7vw", fontSize: "2vh", listStyle: '#F59722' }} />

            <NavLink to="/" ><img className='App-logo' src={logo} /></NavLink>

            <NavLink to="/scan" >
                <div className="mobile-menu-container">
                    <div className="top-bar"></div>
                    <div className="bottom-bar"></div>
                </div>
            </NavLink>
        </nav>
    );
}

export default NavBar;
