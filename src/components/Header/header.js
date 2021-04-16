import React from 'react';
import './header.css';
import MyPhoto from '../../my-photo.jpg';
import Typed from 'react-typed';

const header = () => {
    return (
        <div className="header container">
            <h1 className="welcome-head">Welcome to my portfolio</h1>
            <div className="my-intro">
                <img className="my-photo" src={MyPhoto}></img>
                <div className="info">
                    <h1 className="my-name">Yogesh Yadav</h1>
                    <Typed className="typed-text" typeSpeed={40} backSpeed={60} loop strings={["Web Developer", "Programmer","Blockchain Developer"]}/>
                </div>
            </div>
            <div className="mouse_scroll">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div>
                    <span className="m_scroll_arrows unu"></span>
                    <span className="m_scroll_arrows doi"></span>
                    <span className="m_scroll_arrows trei"></span>
                </div>
            </div>
        </div>
    )
}

export default header;
