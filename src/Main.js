import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import PageError from './PageError';
import HomeContainer from './Home';
import PageContainer from './Page';

const routes = () => (
    <Router history={browserHistory}>
			<Route path="/" component={HomeContainer} />
			<Route path="/blog/*" component={HomeContainer} />
			<Route path="*" component={PageError} />
    </Router>
);

export default routes;
