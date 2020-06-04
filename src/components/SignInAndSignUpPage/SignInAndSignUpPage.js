import React from 'react';

import SignIn from '../../container/Auth/SignIn';
import SignUp from '../../container/Auth/SignUp';

import './SignInAndSignUpPage.css';

const SignInAndSignUpPage = () => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
);

export default SignInAndSignUpPage;
