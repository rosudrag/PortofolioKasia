import * as React from 'react';
import Head from 'react-helmet';
import AboutSection from '../Sections/About';
import ContactForm from '../Sections/ContactForm';
import BlogSection from '../Sections/Blog';
import WorkSection from '../Sections/Work';
import SkillsSection from '../Sections/Skills';
import EducationSection from '../Sections/Education';

import Page from '../layouts/Page';

import {
  createContainer,
  query,
  BodyRenderer
} from '@phenomic/preset-react-app/lib/client';

let HomeContent = (props) => {
    const nodes = props.pages.node.list;
    const homeNode = nodes.find(n => n.id === 'pages\\index');
    const body = homeNode.body;
    return (
      <div>
        <Head>
            <title>{homeNode.title}</title>
            <meta name="description" content={homeNode.title} />
        </Head>
        <BodyRenderer>{body}</BodyRenderer>
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

const Home = (props) => {
    const { isLoading } = props;
    const notReady = isLoading || props.pages.node === null;
    const content = notReady ? 'Loading...' : <HomeContent {...props}/>;
    return (
	<Page>
    <Head>
      <title>Loading</title>
      <meta name="description" content="Katarzyna Niedziela Portfolio" />
    </Head>
    <section className="main">
      <div className="container">
          <div className="row">
            <MainSection/>
          </div>
      </div>
    </section>
    {content}
	</Page>
    );
};

const HomeContainer = createContainer(Home, props => {
    return {
        pages: query({ path: 'pages' })
    };
});


export default HomeContainer;
