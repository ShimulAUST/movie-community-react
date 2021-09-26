import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
const Header = () => {
    const budget = 5000;
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" srcset="" />
            <nav>
                <a href="/movies">Movie List</a>
                <a href="/list">Review Movie List</a>
                <a href="/best-movies">Best Movies</a>
                <p>Movie Community Budget :${budget}</p>
            </nav>

        </div>
    );
};

export default Header;