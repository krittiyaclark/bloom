import React from 'react';

// import Logo from '../../Logo/Logo';
import SignInLinks from '../SignInSignOutLink/SignInLink';
import SignOutLinks from '../SignInSignOutLink/SignOutLink';

// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import { ToolbarHeader, ToolbarNav } from './Toolbar.styles';

const toolbar = (props) => (
	<ToolbarHeader>
		{/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
		<div>MENU</div>
		<div>LOGO</div>

		<ToolbarNav>
			<SignInLinks />
			<SignOutLinks />
		</ToolbarNav>
	</ToolbarHeader>
);

export default toolbar;
