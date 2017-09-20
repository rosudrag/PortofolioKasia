import React from 'react';

const ContactForm = (props) => {
    return (
        <div className="active-section" id="contact">
            <section className="section-block">
                <h4 className="title">Contact Information</h4>
                <div className="row">
                <div className="col-md-12">
                    <div className="map">
                    <img src="img/map.jpg" alt=""/>
                    </div>
                    <div className="address col-md-4">
                    <ul className="list-group">
                        <li className="list-group-item">
                        <h6>Address</h6>
                        <p>R/13 Creative Town, Bangladesh</p>
                        </li>
                        <li className="list-group-item">
                        <h6>Phone</h6>
                        <a href="tel:+00123456789">+00 (123) 456 789 ,</a>
                        <a href="tel:+88444456789">+88 (444) 456 789</a>
                        </li>
                        <li className="list-group-item">
                        <h6>Email</h6>
                        <a href="mailto:name@yourdomain.com">name@yourdomain.com</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
                <br/>
                <br/>
                <div>
                <h4 className="title">Feel Free To Contact Me</h4>
                <form className="contact-forms">
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control" placeholder="Phone"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <textarea className="form-control" rows="6" placeholder="Message"></textarea>
                    </div>
                    </div>
                </form>
                <div className="contact-btn">
                    <a className="btn btn-default rex-primary-btn-effect-No dark-color" href="javascript:void(0)" role="button"><span>Cancel</span></a>
                    <a className="btn btn-default rex-primary-btn-effect" href="javascript:void(0)" role="button">Send</a>
                </div>
                </div>
            </section>
        </div>
    );
};

export default ContactForm;
