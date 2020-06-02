import React from 'react';
import { NavLink } from 'react-router-dom';

import {
	NavigationItemsUL,
	NavigationItemLI,
} from './SignInSignOutLink.styles';

const SignInLinks = (props) => (
	<NavigationItemsUL>
		<NavigationItemLI>
			<NavLink to='/createpost'>Create Post</NavLink>
		</NavigationItemLI>
		<NavigationItemLI>
			<NavLink to='/'>Sign Out</NavLink>
		</NavigationItemLI>
		<NavigationItemLI>
			<NavLink to='/'>USR ICON</NavLink>
		</NavigationItemLI>
	</NavigationItemsUL>
);

export default SignInLinks;
