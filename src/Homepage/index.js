import React from 'react';
import AboutSection from '../Sections/About';
import ContactForm from '../Sections/ContactForm';
import BlogSection from '../Sections/Blog';
import WorkSection from '../Sections/Work';
import SkillsSection from '../Sections/Skills';
import EducationSection from '../Sections/Education';
import Page from '../Page';

let HomeBody = (props) => {
    return (
    <div>
      <section className="main">
        <div className="container">
            <div className="row">
              <MainSection {...props}/>
            </div>
        </div>
      </section>
    </div>
    );
};

const MainSection = (props) => {
    return (
    <div className="col-md-12">
        <AboutSection />
        <br/>
        <br/>
        {/* <SkillsSection/> */}
        {/* <br/> */}
        {/* <br/> */}
        {/* <EducationSection/> */}
        {/* <br/> */}
        {/* <br/> */}
        {/* <WorkSection/> */}
        {/* <br/> */}
        {/* <br/> */}
        {/* <BlogSection posts={postNodes}/> */}
        {/* <br/>
        <br/> */}
        {/* <ContactForm/> */}
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


