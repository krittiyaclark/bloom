import React from 'react';
import { connect } from 'react-redux';

import ImagesLogo from '../../Logo/Logo';
import SignInLinks from '../SignInSignOutLink/SignInLink';
import SignOutLinks from '../SignInSignOutLink/SignOutLink';
import Input from '../../UI/Input/Input';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import {
	ToolbarHeader,
	ToolbarNav,
	ToolbarCenter,
	ToolbarLeft,
	ToolbarRight,
} from './Toolbar.styles';

const Toolbar = (props) => {
	console.log(props);

	const links = props.curUser ? <SignInLinks /> : <SignOutLinks />;
	return (
		<ToolbarHeader>
			<ToolbarNav>
				<ToolbarLeft>
					{/* <div>MENU</div> */}
					<DrawerToggle clicked={props.drawerToggleClicked} />
					<div>Logo</div>

					{/* <Logo height='80%' /> */}
				</ToolbarLeft>

				<ToolbarCenter>
					<Input />
				</ToolbarCenter>

				<ToolbarRight>{links}</ToolbarRight>
			</ToolbarNav>
		</ToolbarHeader>
	);
};

const mapStateToProps = (state) => ({
	curUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Toolbar);
