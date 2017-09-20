import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import PageError from './PageError';
import HomeContainer from './Home';
import BlogContainer from './Blog';

const routes = () => (
    <Router history={browserHistory}>
			<Route path="/" component={HomeContainer} />
			{/* <Route path="/posts/*" component={BlogContainer} /> */}
			<Route path="*" component={PageError} />
    </Router>
);

export default routes;
