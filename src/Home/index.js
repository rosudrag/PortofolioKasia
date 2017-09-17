import * as React from 'react';
import Head from 'react-helmet';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Page from '../layouts/Page';

import {
  createContainer,
  query,
  BodyRenderer
} from '@phenomic/preset-react-app/lib/client';

const DefaultHomeMeta = () => {
    return (
    <Head>
      <title>Loading</title>
      <meta name="description" content="Katarzyna Niedziela Portfolio" />
    </Head>
    );
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 8 * 6,
        backgroundImage: 'url(\'/assets/panel1.jpg\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        marginRight: 0,
        marginLeft: 0
    },
    paper: {
        padding: 24,
        textAlign: 'center',
        color: theme.palette.text.primary,
        opacity: 0.8
    },
    body: {
        paddingTop: 8 * 24,
        marginTop: 8 * 15,
        marginBottom: 8 * 6,
        color: 'white',
        fontSize: 24
    }
});


let HomeContent = (props) => {
    const { classes } = props;
    const nodes = props.pages.node.list;
    const homeNode = nodes.find(n => n.id === 'pages\\index');
    const body = homeNode.body;
    return (
        <Grid item xs={12} justify='center' className={classes.row}>
            <Head>
                <title>{homeNode.title}</title>
                <meta name="description" content={homeNode.title} />
            </Head>
            <Grid container xs={12} className={classes.root} justify='center'>
                <Grid item xs={11} md={8} className={classes.body}>
                    <BodyRenderer>{body}</BodyRenderer>
                </Grid>
            </Grid>
        </Grid>
    );
};

HomeContent = withStyles(styles)(HomeContent);

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


const BlogSection = (props) => {
    return (
        <div className="active-section" id="blog">
        <section className="section-block">
          <h4 className="title">Blog Post</h4>
          <div className="row">
            <div className="col-md-12">
              <div id="rex-blog-slider">
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail rex-blog-section">
                    <img src="http://placehold.it/312x184" alt="..."/>
                    <div className="rex-caption">
                      <a href="single-blog.html">
                        <h6>Standard blog post with image </h6>
                      </a>
                      <p>Lorem ipsum dolor sit amet, consectetur nos trud exercitation ullamco.</p>
                      <a href="javascript:void(0)" className="">Read more</a>
                    </div>
                    <div className="post-meta">
                      <a href="javascript:void(0)"><i className="fa fa-share-alt"></i></a>
                      <a href="javascript:void(0)"><i className="fa fa-comment"></i>20</a>
                      <a href="javascript:void(0)"><i className="fa fa-heart"></i>65</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail rex-blog-section">
                    <img src="http://placehold.it/312x184" alt="..."/>
                    <div className="rex-caption">
                      <a href="single-blog.html">
                        <h6>Standard blog post with image </h6>
                      </a>
                      <p>Lorem ipsum dolor sit amet, consectetur nos trud exercitation ullamco.</p>
                      <a href="javascript:void(0)" className="">Read more</a>
                    </div>
                    <div className="post-meta">
                      <a href="javascript:void(0)"><i className="fa fa-share-alt"></i></a>
                      <a href="javascript:void(0)"><i className="fa fa-comment"></i>20</a>
                      <a href="javascript:void(0)"><i className="fa fa-heart"></i>65</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="thumbnail rex-blog-section">
                    <img src="http://placehold.it/312x184" alt="..."/>
                    <div className="rex-caption">
                      <a href="single-blog.html">
                        <h6>Standard blog post with image </h6>
                      </a>
                      <p>Lorem ipsum dolor sit amet, consectetur nos trud exercitation ullamco.</p>
                      <a href="javascript:void(0)" className="">Read more</a>
                    </div>
                    <div className="post-meta">
                      <a href="javascript:void(0)"><i className="fa fa-share-alt"></i></a>
                      <a href="javascript:void(0)"><i className="fa fa-comment"></i>20</a>
                      <a href="javascript:void(0)"><i className="fa fa-heart"></i>65</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

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

const MainSection = (props) => {
    return (
        <div className="col-md-12">
            <AboutSection/>
            <br/>
            <br/>
            <SkillsSection/>
            <br/>
            <br/>
            <EducationSection/>
            <br/>
            <br/>
            <WorkSection/>
            <br/>
            <br/>
            <BlogSection/>
            <br/>
            <br/>
            <ContactForm/>
        </div>
    );
};

const HomeWrapper = (props) => {
    const { children } = props;
    return (
        <section className="main">
        <div className="container">
            <div className="row">
                {children}
            </div>
        </div>
    </section>
    );
};

const Home = (props) => {
    const { isLoading } = props;
    const notReady = isLoading || props.pages.node === null;
    const content = notReady ? 'Loading...' : <HomeContent {...props}/>;
    return (
	<Page>
		<DefaultHomeMeta/>
        <HomeWrapper>
		    <MainSection/>
        </HomeWrapper>
	</Page>
    );
};

const HomeContainer = createContainer(Home, props => {
    return {
        pages: query({ path: 'pages' })
    };
});


export default HomeContainer;
