import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import {
	StyledWrapper,
	StyledSection,
	StyledContainer,
} from '../Layout/Layout.styles';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import Footer from '../Footer/Footer';

class Layout extends Component {
	state = {
		showSideDrawer: false,
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return { showSideDrawer: !prevState.showSideDrawer };
		});
	};

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

export default Layout;
