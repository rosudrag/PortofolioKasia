import React from 'react';

const WorkSection = (props) => {
    return (
        <div className="active-section" id="work">
        <div className="portfolio-section box-border rex-works-showcase">
          <div className="row rex-portfolio-showcase">
            <h4 className="title">Work</h4>
            <div className="row">
              <div className="portfolio-menu">
                <div className="col-md-12 portfolio-filter rex-filter-btns">
                  <div className="btn btn-default filter" data-filter="all">All</div>
                  <div className="btn btn-default filter" data-filter="identity">Branding</div>
                  <div className="btn btn-default filter" data-filter="photography">Photography</div>
                  <div className="btn btn-default filter" data-filter="ui">Illutration</div>
                </div>
              </div>
            </div>

            <figure className="row rex-featured-portfolio" role="tabpanel" id="portfolio-intro">
              <div className="rex-featured">
                <div className="col-md-12">
                  <div className="display-flax featured-box">
                    <div className="col-md-6">
                      <img className="img-responsive" src="http://placehold.it/502x276" alt=""/>
                    </div>
                    <div className="col-md-6">
                      <div className="rex-featured-description">
                        <h6>Recent Project</h6>
                        <span>Branding, Photography</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora itaque cum quaerat facere est commodi delectus
                          dicta impedit ipsum vero quod quo eligendi, blanditiis quia alias tenetur neque nesciunt, totam?</p>
                        <p>On the other hand, we denounce with righteous indignation and dislike men wh are so beguiled and demoralized
                          by the charms of pleasure of the moment, so blinded by desire.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </figure>

            <div className="row rex-portfolios" role="tabpanel" id="rex-portfolios">

              <figure className="identity col-lg-4 col-sm-6 rex-portfolio-item">
                <div className="work-img">
                  <img src="http://placehold.it/315x242" alt="" className="img-thumbnail"/>
                </div>
                <figcaption className="rex-featured-description">
                  <div className="rex-portfolios-title">
                    <h6>Recent Project</h6>
                    <span>Branding, Photography</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora itaque cum quaerat facere est commodi delectus
                    dicta impedit ipsum vero quod quo eligendi, blanditiis quia alias tenetur neque nesciunt, totam?</p>
                </figcaption>
              </figure>

              <figure className="photography col-lg-4 col-sm-6 rex-portfolio-item">
                <div className="work-img">
                  <img src="http://placehold.it/315x242" alt="" className="img-thumbnail"/>
                </div>
                <figcaption className="rex-featured-description">
                  <div className="rex-portfolios-title">
                    <h6>Recent Project</h6>
                    <span>Branding, Photography</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora itaque cum quaerat facere est commodi delectus
                    dicta impedit ipsum vero quod quo eligendi, blanditiis quia alias tenetur neque nesciunt, totam?</p>
                </figcaption>
              </figure>

              <figure className="ui identity col-lg-4 col-sm-6 rex-portfolio-item">
                <div className="work-img">
                  <img src="http://placehold.it/315x242" alt="" className="img-thumbnail"/>
                </div>
                <figcaption className="rex-featured-description">
                  <div className="rex-portfolios-title">
                    <h6>Recent Project</h6>
                    <span>Branding, Photography</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora itaque cum quaerat facere est commodi delectus
                    dicta impedit ipsum vero quod quo eligendi, blanditiis quia alias tenetur neque nesciunt, totam?</p>
                </figcaption>
              </figure>


              <figure className="ui photography col-lg-4 col-sm-6 rex-portfolio-item">
                <div className="work-img">
                  <img src="http://placehold.it/315x242" alt="" className="img-thumbnail"/>
                </div>
                <figcaption className="rex-featured-description">
                  <div className="rex-portfolios-title">
                    <h6>Recent Project</h6>
                    <span>Branding, Photography</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora itaque cum quaerat facere est commodi delectus
                    dicta impedit ipsum vero quod quo eligendi, blanditiis quia alias tenetur neque nesciunt, totam?</p>
                </figcaption>
              </figure>

              <figure className="ui photography identity col-lg-4 col-sm-6 rex-portfolio-item">
                <div className="work-img">
                  <img src="http://placehold.it/315x242" alt="" className="img-thumbnail"/>
                </div>
                <figcaption className="rex-featured-description">
                  <div className="rex-portfolios-title">
                    <h6>Recent Project</h6>
                    <span>Branding, Photography</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora itaque cum quaerat facere est commodi delectus
                    dicta impedit ipsum vero quod quo eligendi, blanditiis quia alias tenetur neque nesciunt, totam?</p>
                </figcaption>
              </figure>

              <figure className="identity ui photography col-lg-4 col-sm-6 rex-portfolio-item">
                <div className="work-img">
                  <img src="http://placehold.it/315x242" alt="" className="img-thumbnail"/>
                </div>
                <figcaption className="rex-featured-description">
                  <div className="rex-portfolios-title">
                    <h6>Recent Project</h6>
                    <span>Branding, Photography</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora itaque cum quaerat facere est commodi delectus
                    dicta impedit ipsum vero quod quo eligendi, blanditiis quia alias tenetur neque nesciunt, totam?</p>
                </figcaption>
              </figure>


            </div>
          </div>
        </div>
      </div>
    );
};

export default WorkSection;
