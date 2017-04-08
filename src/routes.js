import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Stories from './components/stories';
import HomePage from './components/homePage';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={HomePage} />
		<Route path="/stories" component={Stories} />
	</Route>
);
