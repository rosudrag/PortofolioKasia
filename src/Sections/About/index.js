import React from 'react';

const AboutSection = (props) => {
    return (
        <div className="about">
            <div className="hero">
                <div className="hero-inner">
                    <a href="" className="hero-logo"><img src="http://placehold.it/152x152" alt="Logo Image"/></a>
                    <div className="hero-copy">
                    <h1><span>I’m</span> Jordan Doe</h1>
                    <h6>Photographer, Web Designer, Speaker, Writer</h6>
                    <div className="media-link">
                        <a href="#"><i className="fa fa-twitter-square"></i></a>
                        <a href="#"><i className="fa fa-facebook-square"></i></a>
                        <a href="#"><i className="fa fa-linkedin-square"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-google-plus-square"></i></a>
                    </div>
                    <div className="hero-btn">
                        <a className="btn btn-default rex-primary-btn-effect-No" href="#contact" role="button"><span>Hire Me</span></a>
                        <a className="btn btn-default rex-primary-btn-effect" href="#" role="button">Download CV</a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="active-section" id="about">
                <div className="about-section">
                    <div className="row">
                    <div className="col-md-6">
                        <h4>About</h4>
                        <div className="about-content">
                        <span className="active-color">Hello, I am Jordan Doe, Photographer, Web Designer, Speaker and Writer</span>
                        <p>Aenean nonummy hendrerit mauris. Donec sit Phasellus portFusce suscipit varius mium sociis natoque penatibus et
                            magnis dis parturent montes, nascetur ridiculus mus. Nulla dui.Fusce feugiat malesuada odiMorbi nunc odio, gravida
                            at, cursus nec, luctus.</p>
                        <span className="border-dashed"></span>
                        <img src="img/signature.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-md-5 col-md-offset-1">
                        <h4>Basic Information</h4>
                        <ul className="list-group">
                        <li className="list-group-item">
                            <div className="row">
                            <div className="col-md-4">
                                <h6>Address:</h6>
                            </div>
                            <div className="col-md-8">
                                <p>43/R/13 Creative Town, Bangladesh</p>
                            </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                            <div className="col-md-4">
                                <h6>Date of Birth:</h6>
                            </div>
                            <div className="col-md-8">
                                <p>1 January, 1992</p>
                            </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                            <div className="col-md-4">
                                <h6>Place of Birth:</h6>
                            </div>
                            <div className="col-md-8">
                                <p>Dhaka, Bangladesh</p>
                            </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                            <div className="col-md-4">
                                <h6>Language</h6>
                            </div>
                            <div className="col-md-8">
                                <p>Bangla, English, German, French </p>
                            </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="row">
                            <div className="col-md-4">
                                <h6>Gender</h6>
                            </div>
                            <div className="col-md-8">
                                <p>Male</p>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
