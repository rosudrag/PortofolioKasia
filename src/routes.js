import React from 'react';
import { Route } from 'react-router';
import { PageContainer as PhenomicPageContainer } from 'phenomic';

import AppContainer from './AppContainer';
import Page from './layouts/Page';
import PageError from './layouts/PageError';
import Homepage from './layouts/Homepage';
import TaggedBlogPage from './layouts/TaggedBlogPage';
import Post from './layouts/Post';

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
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
  </div>

);

export default (
  <div>
    <Route component={ AppContainer }>
      <Route path="*" component={ PageContainer } />
    </Route>
  </div>
);
