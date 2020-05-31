import React, { Component } from 'react';
import Notifications from './Notification';
import PostList from '../Posts/PostList';

class Dashboard extends Component {
	render() {
		return (
			<div className='dashboard container'>
				<div className='row'>
					<div className='col col-12 col-md-6'>
						<PostList />
					</div>
					<div className='col col-12 col-md-5 offset-md-1'>
						<Notifications />
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
