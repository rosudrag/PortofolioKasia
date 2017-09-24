import React from 'react';
import AboutSection from '../Sections/About';
import BlogSection from '../Sections/Blog';
import Page from '../Page';

let HomeBody = (props) => {
    return (
    <div>
      <section className="main">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <AboutSection />
                    <br/>
                    <br/>
                    <BlogSection />
                    <br/>
                    <br/>
                </div>
            </div>
        </div>
      </section>
    </div>
    );
};

const Homepage = (props) => {
    return (
    <Page { ...props }>
        <HomeBody { ...props }/>
    </Page>
    );
};

export default Homepage;


