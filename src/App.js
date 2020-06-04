import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PostSummary from './components/Posts/PostSummary';
import PostDetail from './components/Posts/PostDetail';
import Dashboard from './components/Dashboards/Dashboard/Dashboard';
import SignIn from './container/Auth/SignIn';
import SignUp from './container/Auth/SignUp';
import CreatePost from './container/CreatePost/CreatePost';

import Layout from './components/Layout/Layout';

import './App.css';

const App = () => (
	<Layout>
		<Switch>
			<Route exact path='/' component={Dashboard} />
			<Route path='/post/:id' component={PostDetail} />
			<Route path='/signin' component={SignIn} />
			<Route path='/signup' component={SignUp} />
			<Route path='/createpost' component={CreatePost} />
			<Route path='/postSummary' component={PostSummary} />
		</Switch>
	</Layout>
);

export default App;
