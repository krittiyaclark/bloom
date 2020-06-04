import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { firestoreConnect } from 'react-redux-firebase';
// import { compose } from 'redux';

import Notifications from '../Notification/Notifications';
import PostList from '../../Posts/PostList';

import {
	StyledDashboardContainer,
	StyledDashboardSection,
	StyledDashboardAside,
} from './Dashboard.styles';

class Dashboard extends Component {
	render() {
		console.log(this.props);
		const { posts } = this.props;
		return (
			<StyledDashboardContainer>
				<StyledDashboardSection>
					<h3>Today</h3>
					<PostList postLists={posts} />
				</StyledDashboardSection>

				<StyledDashboardAside>
					<h3>Notifications</h3>
					<Notifications />
				</StyledDashboardAside>
			</StyledDashboardContainer>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log(state);
	return {
		posts: state.post.postsProjectList,
	};
};

export default connect(mapStateToProps)(Dashboard);
