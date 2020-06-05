import React from 'react';
import { NavLink } from 'react-router-dom';

import {
	NavigationItemsUL,
	NavigationItemLI,
} from './SignInSignOutLink.styles';

const SignOutLinks = (props) => (
	<NavigationItemsUL>
		<NavigationItemLI>
			<NavLink to='/signinsignup'>Sign In</NavLink>
		</NavigationItemLI>
		{/* <NavigationItemLI>
			<NavLink to='/signin'>Login</NavLink>
		</NavigationItemLI> */}
	</NavigationItemsUL>
);

export default SignOutLinks;
