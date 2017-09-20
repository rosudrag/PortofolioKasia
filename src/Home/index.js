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
  query
} from '@phenomic/preset-react-app/lib/client';

let HomeContent = (props) => {
    const nodes = props.pages.node.list;
    const homeNode = nodes.find(n => n.id === 'pages\\index');
    return (
      <div>
        <Head>
            <title>{homeNode.title}</title>
            <meta name="description" content={homeNode.title} />
        </Head>
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

const getSectionNode = (props, nodeName) => {
    const nodes = props.sections.node.list;
    const node = nodes.find(n => n.id === 'homeSections\\' + nodeName);
    return node;
};

const MainSection = (props) => {
    const aboutNode = getSectionNode(props, 'about');
    const postNodes = props.posts.node.list;
    return (
      <div className="col-md-12">
          <AboutSection node={aboutNode} />
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
          {/* <BlogSection posts={postNodes}/>
          <br/>
          <br/> */}
          {/* <ContactForm/> */}
      </div>
    );
};

const Home = (props) => {
    const { isLoading } = props;
    const ready = !isLoading && props.pages.node !== null && props.posts.node !== null && props.sections.node !== null;
    const content = notReady ? 'Loading...' : <HomeContent {...props}/>;
    return (
      <Page>
        <Head>
          <title>Loading</title>
          <meta name="description" content="Katarzyna Niedziela Portfolio" />
        </Head>
        {content}
      </Page>
    );
};

const HomeContainer = createContainer(Home, props => {
    return {
        pages: query({ path: 'pages' }),
        sections: query({ path: 'homeSections' }),
        posts: query({ path: 'posts' })
    };
});


export default HomeContainer;
