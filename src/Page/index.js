import * as React from 'react';
import Head from 'react-helmet';

import PageLayout from '../layouts/Page';

import {
  createContainer,
  query,
  BodyRenderer
} from '@phenomic/preset-react-app/lib/client';

const Page = (props) => {
    const { isLoading } = props;
    console.log(props);
    const content = isLoading ? 'Loading...' : 'page content';
    return (
	<PageLayout>
		{content}
	</PageLayout>
    );
};

const PageContainer = createContainer(Page, props => ({
    page: query({ path: 'pages', id: 'pages' + props.params.splat })
}));

export default PageContainer;
