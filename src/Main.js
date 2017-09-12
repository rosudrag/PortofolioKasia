import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import PageError from './PageError';
import HomeContainer from './Home';

const routes = () => (
    <Router history={browserHistory}>
			<Route path="/" component={HomeContainer} />
			<Route path="/after/:after" component={HomeContainer} />
			<Route path="*" component={PageError} />
    </Router>
);

export default routes;
