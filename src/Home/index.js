import * as React from 'react';
import Head from 'react-helmet';

import BaseLayout from '../layouts/Base';

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
	<BaseLayout>
		<HomeMeta/>
		{content}
	</BaseLayout>
    );
};

const HomeContainer = createContainer(Home);

export default HomeContainer;
