import React from 'react';

import ImagesLogo from '../../Logo/Logo';
import SignInLinks from '../SignInSignOutLink/SignInLink';
import SignOutLinks from '../SignInSignOutLink/SignOutLink';
import Input from '../../UI/Input/Input';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
// import { auth } from '../../../config/firebaseConfig';

import {
	ToolbarHeader,
	ToolbarNav,
	ToolbarCenter,
	ToolbarLeft,
	ToolbarRight,
} from './Toolbar.styles';

const Toolbar = (props) => {
	console.log(props);

	const links = props.currentUser ? <SignInLinks /> : <SignOutLinks />;
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

export default Toolbar;
