import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import { StyledWrapper, StyledSection, StyledContainer } from './Layout.styles';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { auth, createUserProfileDocument } from '../../config/firebaseConfig';
import { setCurrentUser } from '../../redux/user/user.actions';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
	state = {
		showSideDrawer: false,
		// currentUser: null,
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
		const { setCurUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurUser({
						id: snapShot.id,
						...snapShot.data(),
					});
					console.log(this.state);
				});
			}
			setCurUser(userAuth);
		});
	}

	// Close subscription
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<StyledWrapper>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
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

const mapDispatchToProps = (dispatch) => ({
	setCurUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(Layout);
