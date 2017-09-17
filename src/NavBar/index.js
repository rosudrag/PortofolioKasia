import React from 'react';
import './styles.css';

let Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="row" role="banner">
                    <div className="col-md-6">
                        <div className="logo">
                            <img className='personalLogo' src="img/logo.png" alt="Logo" />
                        </div>
                    </div>
                    <div className="col-md-6 header-contact-address">
                        <a href="mailto:name@yourdomain.com">kat@fillme.com</a><br/>
                        <a href="tel:+00123456789">+00 (123) 456 789</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

const Navigation = (props) => {
    return (
        <div className="main-menu">
            <div id="rex-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 menu-section">
                            <div className="menu-button one-page">Menu</div>
                            <nav>
                                <ul id="navigation-menu" data-breakpoint="992" className="flexnav one-page">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#skills">Skills</a></li>
                                    <li><a href="#education">Education</a></li>
                                    <li><a href="#work">Work</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavBar = (props) => {
    return (
        <div>
            <Header/>
            <Navigation/>
        </div>
    );
};

export default NavBar;
