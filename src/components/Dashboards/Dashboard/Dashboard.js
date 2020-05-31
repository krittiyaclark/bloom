import React, { Component } from 'react';

import Notifications from '../Notification/Notifications';
import PostList from '../../Posts/PostList';

import {
	StyledDashboardContainer,
	StyledDashboardSection,
	StyledDashboardAside,
} from './Dashboard.styles';

class Dashboard extends Component {
	render() {
		return (
			<StyledDashboardContainer>
				<StyledDashboardSection>
					<h3>Today</h3>
					<PostList />
				</StyledDashboardSection>

				<StyledDashboardAside>
					<h3>Notifications</h3>
					<Notifications />
				</StyledDashboardAside>
			</StyledDashboardContainer>
		);
	}
}

export default Dashboard;
