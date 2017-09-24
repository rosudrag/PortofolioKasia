import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import PageError from './PageError';
import HomeContainer from './Home';
import BlogContainer from './Blog';
import PostOne from './StaticBlog/PostOne';

const routes = () => (
    <Router history={browserHistory}>
			<Route path="/" component={HomeContainer} />
			<Route path="/blog/*" component={BlogContainer} />
			<Route path="/blog2/one" component={PostOne}/>
			<Route path="*" component={PageError} />
    </Router>
);

export default routes;
