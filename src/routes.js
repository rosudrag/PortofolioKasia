import React from 'react';
import { Route } from 'react-router';
import { PageContainer as PhenomicPageContainer } from 'phenomic';

import AppContainer from './AppContainer';
import Page from './layouts/Page';
import PageError from './layouts/PageError';
import Homepage from './layouts/Homepage';
import TaggedBlogPage from './layouts/TaggedBlogPage';
import Post from './layouts/Post';
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
            Post,
            TaggedBlogPage
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
