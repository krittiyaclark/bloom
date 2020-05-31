import React from 'react';
import { NavLink } from 'react-router-dom';

import {
	NavigationItemsUL,
	NavigationItemLI,
} from './SignInSignOutLink.styles';

const SignOutLinks = (props) => (
	<NavigationItemsUL>
		<NavigationItemLI>
			<NavLink to='/' active>
				Signup
			</NavLink>
		</NavigationItemLI>
		<NavigationItemLI>
			<NavLink to='/'>Login</NavLink>
		</NavigationItemLI>
	</NavigationItemsUL>
);

export default SignOutLinks;
