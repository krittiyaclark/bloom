import React from 'react';

import Logo from '../../Logo/Logo';
import SignInLinks from '../SignInSignOutLink/SignInLink';
import SignOutLinks from '../SignInSignOutLink/SignOutLink';
import Input from '../../UI/Input/Input';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import {
	ToolbarHeader,
	ToolbarNav,
	ToolbarCenter,
	ToolbarLeft,
	ToolbarRight,
} from './Toolbar.styles';

const toolbar = (props) => (
	<ToolbarHeader>
		<ToolbarNav>
			{/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
			<ToolbarLeft>
				<div>MENU</div>
				<Logo height='80%' />
			</ToolbarLeft>

			<ToolbarCenter>
				<Input />
			</ToolbarCenter>

			<ToolbarRight>
				<SignInLinks />
				<SignOutLinks />
			</ToolbarRight>
		</ToolbarNav>
	</ToolbarHeader>
);

export default toolbar;
