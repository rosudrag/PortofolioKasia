import React from 'react';

const EducationSection = (props) => {
    return (
        <div id="education" className="active-section">
        <div className="section-block education">
          <h4 className="title">Education</h4>
          <div className="row">
            <div id="rex-education-slider">
              <div className="listing-content">
                <div className="col-md-2 list-img">
                  <img src="http://placehold.it/145x135" alt=""/>
                </div>
                <div className="col-md-10 list-description">
                  <h6>University of Computer Science</h6>
                  <span>Faculty of Computer Science, Information System, 2011 - present</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur
                    est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste!</p>
                </div>
              </div>
              <div className="listing-content">
                <div className="col-md-2 list-img">
                  <img src="http://placehold.it/145x135" alt=""/>
                </div>
                <div className="col-md-10 list-description">
                  <h6>University of Fine Arts</h6>
                  <span>Faculty of Fine Arts, 2008-2010</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur
                    est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste!</p>
                </div>
              </div>
              <div className="listing-content">
                <div className="col-md-2 list-img">
                  <img src="http://placehold.it/145x135" alt=""/>
                </div>
                <div className="col-md-10 list-description">
                  <h6>School of Graphic Design</h6>
                  <span>Envato School of Design , 2002 - 2008</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur
                    est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EducationSection;
