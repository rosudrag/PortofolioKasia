import React from 'react';
import { Route } from 'react-router';
import { PageContainer as PhenomicPageContainer } from 'phenomic';

import AppContainer from './AppContainer';
import Page from './Page';
import PageError from './PageError';
import Homepage from './Homepage';
import Post from './Post';
import Scripts from './scripts';
import logPageView from './log-google-analytics';


const PageContainer = (props) => (
  <div>
      <PhenomicPageContainer
        { ...props }
        layouts={{
            Page,
            PageError,
            Homepage,
            Post
        }}
      />
      <Scripts/>
  </div>
);

export default (
  <div>
    <Route component={ AppContainer }>
      <Route path="*" component={ PageContainer } onEnter={logPageView}/>
    </Route>
  </div>
);
