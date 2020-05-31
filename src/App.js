import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PostSummary from './components/Posts/PostSummary';
import PostDetail from './components/Posts/PostDetail';
import Dashboard from './components/Dashboards/Dashboard/Dashboard';

import Layout from './components/Layout/Layout';

import './App.css';

const App = () => (
	<Layout>
		<Switch>
			<Route path='/' exact component={Dashboard} />
			<Route path='/postSummary' component={PostSummary} />
			<Route path='/post/:id' component={PostDetail} />
		</Switch>
	</Layout>
);

export default App;
