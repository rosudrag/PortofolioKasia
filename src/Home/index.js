import * as React from 'react';
import Head from 'react-helmet';

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


const HomeContent = (props) => {
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

const Home = (props) => {
    const { isLoading } = props;
    const notReady = isLoading || props.pages.node === null;
    const content = notReady ? 'Loading...' : <HomeContent {...props}/>;
    return (
	<Page>
		<DefaultHomeMeta/>
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
