import React from 'react';

import Avatar from 'material-ui/Avatar';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';

const styles = {
    row: {
        display: 'flex',
        justifyContent: 'center'
    },
    avatar: {
        margin: 10
    },
    bigAvatar: {
        width: 152,
        height: 152
    }
};

function ImageAvatars(props) {
    const classes = props.classes;
    return (
      <div className={classes.row}>
        <Avatar
          alt="Logo Image"
          src="/assets/img/profile-img.jpg"
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
      </div>
    );
}

const MyAvatar = withStyles(styles)(ImageAvatars);

const AboutSection = (props) => {
    return (
        <div>
            <div className="about">
                <div className="hero">
                    <div className="hero-inner">
                        {/* <a href="" className="hero-logo"><img src="http://placehold.it/152x152" alt="Logo Image"/></a> */}
                        <a href="#" ><MyAvatar /></a>

                        <div className="hero-copy">
                        <h1><span>I’m</span> Katarzyna Niedziela</h1>
                        <h6>Musician, Writer, Photographer, Blogger</h6>
                        <div className="media-link">
                            {/* <a href="#"><i className="fa fa-twitter-square"></i></a> */}
                            <a href="https://www.facebook.com/kat.niedziela/?fref=ts"><i className="fa fa-facebook-square"></i></a>
                            {/* <a href="#"><i className="fa fa-linkedin-square"></i></a> */}
                            {/* <a href="#"><i className="fa fa-instagram"></i></a> */}
                            {/* <a href="#"><i className="fa fa-google-plus-square"></i></a> */}
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
                                <span className="active-color">Hello, I am Katarzyna Niedziela, Musician, Writer, Photographer and Blogger</span>
                                <br/><br/>
                                <p>Music is a powerful tool, it can change people's emotions, create a unique atmosphere and express more than the words can say. This is why I love music and why I love performing. I started learning flute when I was fourteen and I played ever since. I have worked with different music genres but, at the moment, I am mostly playing classical and salsa.</p>
                                <span className="border-dashed"></span>
                                {/* <img src="img/signature.png" alt=""/> */}
                            </div>
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            <h4>
                                Flautist for hire

                            </h4>
                            <div className="about-content">
                                I am currently available for hire for playing flute at all kinds of events in the vicinity of Manchester, UK.
                                <br/><br/>
                                A professional pianist is also available to accompany me.
                                <br/>
                                <br/>
                                For booking or more information contact me by email <a href="mailto:niedziela.kat@gmail.com">niedziela.kat@gmail.com</a>
                            </div>
                        </div>
                        {/* <div className="col-md-5 col-md-offset-1">
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
                                    <p>Poland</p>
                                </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                <div className="col-md-4">
                                    <h6>Language</h6>
                                </div>
                                <div className="col-md-8">
                                    <p>English, Polish, French </p>
                                </div>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="row">
                                <div className="col-md-4">
                                    <h6>Gender</h6>
                                </div>
                                <div className="col-md-8">
                                    <p>Female</p>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutSection;
