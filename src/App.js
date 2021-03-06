import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PostSummary from './components/Posts/PostSummary';
import PostDetail from './components/Posts/PostDetail';
import Dashboard from './components/Dashboards/Dashboard/Dashboard';
// import SignIn from './container/Auth/SignIn';
// import SignUp from './container/Auth/SignUp';
import SignInAndSignUpPage from './components/SignInAndSignUpPage/SignInAndSignUpPage';
import CreatePost from './container/CreatePost/CreatePost';

import Layout from './container/Layout/Layout';

import './App.css';

const App = () => (
	<Layout>
		<Switch>
			<Route exact path='/' component={Dashboard} />
			<Route path='/post/:id' component={PostDetail} />
			<Route path='/createpost' component={CreatePost} />
			<Route path='/postSummary' component={PostSummary} />
			<Route path='/signinsignup' component={SignInAndSignUpPage} />
		</Switch>
	</Layout>
);

export default App;
