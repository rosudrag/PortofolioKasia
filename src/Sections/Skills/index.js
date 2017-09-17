import React from 'react';

const SkillsSection = (props) => {
    return (
        <div id="skills" className="active-section">
        <div className="section-block skill-section">
          <div className="row">
            <div className="col-md-6">
              <div className="skill-content">
                <h4 className="title">Skills</h4>

                <h6>WordPress</h6>
                <div className="skillbar clearfix " data-percent="40%">
                  <div className="skillbar-bar"></div>
                  <div className="skill-bar-percent">40%</div>
                </div>
                {/* <!-- End Skill Bar --> */}

                <h6>Adobe Illustrator</h6>
                <div className="skillbar clearfix " data-percent="70%">
                  <div className="skillbar-bar"></div>
                  <div className="skill-bar-percent">80%</div>
                </div>
                {/* <!-- End Skill Bar --> */}

                <h6>Adobe Photoshop</h6>
                <div className="skillbar clearfix " data-percent="80%">
                  <div className="skillbar-bar"></div>
                  <div className="skill-bar-percent">90%</div>
                </div>
                {/* <!-- End Skill Bar --> */}

                <h6>Photography</h6>
                <div className="skillbar clearfix " data-percent="50%">
                  <div className="skillbar-bar"></div>
                  <div className="skill-bar-percent">50%</div>
                </div>
                {/* <!-- End Skill Bar --> */}

                <h6>Media</h6>
                <div className="skillbar clearfix " data-percent="70%">
                  <div className="skillbar-bar"></div>
                  <div className="skill-bar-percent">70%</div>
                </div>
                {/* <!-- End Skill Bar --> */}
              </div>
            </div>
            <div className="col-md-6">
              <img className="img-responsive" src="http://placehold.it/554x499" alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SkillsSection;
