import * as React from 'react';
import Head from 'react-helmet';

import Layout from '../Layout';

import {
  createContainer,
  query,
  BodyRenderer
} from '@phenomic/preset-react-app/lib/client';

const HomeMeta = () => {
	return (
    <Head>
      <title>Katarzyna Niedziela Portfolio</title>
      <meta name="description" content="Katarzyna Niedziela Portfolio" />
    </Head>
	);
};


const HomeContent = () => {
	return (
    <div>
      content
    </div>
	);
};

const Home = (props) => {
	const { isLoading } = props;
	const content = isLoading ? 'Loading...' : <HomeContent />;
	return (
	<Layout>
		<HomeMeta/>
		{content}
	</Layout>
	);
};

const HomeContainer = createContainer(Home);

export default HomeContainer;