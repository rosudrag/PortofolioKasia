import React from 'react';

import LatestPosts from '../../components/LatestPosts';
import Charges from '../../components/Portfolio/ChargeTable';
import Page from '../Page';

const Homepage = (props) => {
    return (
    <Page { ...props }>
      <Charges/>
      <LatestPosts />
    </Page>
    );
};

export default Homepage;
