import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import {
	StyledWrapper,
	StyledSection,
	StyledContainer,
} from '../Layout/Layout.styles';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { auth, createUserProfileDocument } from '../../config/firebaseConfig';

import Footer from '../Footer/Footer';

class Layout extends Component {
	state = {
		showSideDrawer: false,
		currentUser: null,
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data(),
						},
					});
					console.log(this.state);
				});
			}
			this.setState({ currentUser: userAuth });
		});
	}

	// Close subscription
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<StyledWrapper>
				<Toolbar
					drawerToggleClicked={this.sideDrawerToggleHandler}
					currentUser={this.state.currentUser}
				/>
				<SideDrawer
					closed={this.sideDrawerClosedHandler}
					open={this.state.showSideDrawer}
				/>
				<StyledContainer>
					<StyledSection>{this.props.children}</StyledSection>
				</StyledContainer>
				<Footer />
			</StyledWrapper>
		);
	}
}

export default Layout;
