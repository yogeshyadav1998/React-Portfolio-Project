import React from 'react';
import './navbar.css';
import Logo from '../../logo.png';

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
            <a className="navbar-brand" href="#"><img className="logo" src={Logo} alt="logo"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item active">
                        <a className="navLink" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="navLink" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="navLink" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="navLink" href="#">Contacts</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default navbar;
