import React from 'react';

import Logo from '../../Logo/Logo';
import SignInLinks from '../SignInSignOutLink/SignInLink';
import SignOutLinks from '../SignInSignOutLink/SignOutLink';
import Input from '../../UI/Input/Input';
import Backdrop from '../../UI/Backdrop/Backdrop';

import './SideDrawer.css';

const sideDrawer = (props) => {
	let attachedClasses = ['SideDrawer', 'Close'];
	if (props.open) {
		attachedClasses = ['SideDrawer', 'Open'];
	}
	return (
		<>
			<Backdrop show={props.open} clicked={props.closed} />

			<div className={attachedClasses.join(' ')}>
				<div>
					<Logo height='11%' />
				</div>
				<nav>
					<SignInLinks />
					<SignOutLinks />
					<Input />
				</nav>
			</div>
		</>
	);
};

export default sideDrawer;
