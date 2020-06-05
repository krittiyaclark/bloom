import React, { Component } from 'react';

import FormInput from '../../../components/UI/FormInput/FormInput';
import Button from '../../../components/UI/Button/Button';

import {
	auth,
	createUserProfileDocument,
} from '../../../config/firebaseConfig';

import './SignUp.css';

class SignUp extends Component {
	state = {
		email: '',
		firstName: '',
		lastName: '',
		password: '',
		confirmPassword: '',
	};

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		console.log(this.state);

		const {
			email,
			firstName,
			lastName,
			password,
			confirmPassword,
		} = this.state;

		if (password !== confirmPassword) {
			alert("password don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			await createUserProfileDocument(user, { firstName, lastName });

			// Clear the form
			this.setState({
				email: '',
				firstName: '',
				lastName: '',
				password: '',
				confirmPassword: '',
			});
		} catch (error) {
			console.error();
		}
	};

	render() {
		return (
			<div className='sign-up'>
				<form onSubmit={this.handleSubmit} className='bg-white'>
					<h2 className='text-grey'>I do not have a account</h2>
					<p className='title'>Sign up with your email and password</p>
					<div className='input-field'>
						<FormInput
							type='email'
							id='email'
							handleChange={this.handleChange}
							value={this.state.email}
							label='email'
						/>
					</div>
					<div className='input-field'>
						<FormInput
							type='text'
							id='firstName'
							handleChange={this.handleChange}
							value={this.state.firstName}
							label='firstName'
						/>
					</div>
					<div className='input-field'>
						<FormInput
							type='text'
							id='lastName'
							handleChange={this.handleChange}
							value={this.state.lastName}
							label='lastName'
						/>
					</div>
					<div className='input-field'>
						<FormInput
							type='password'
							id='password'
							handleChange={this.handleChange}
							value={this.state.password}
							label='password'
						/>
					</div>
					<div className='input-field'>
						<FormInput
							type='password'
							id='confirmPassword'
							handleChange={this.handleChange}
							value={this.state.confirmPassword}
							label='confirm password'
						/>
					</div>
					<div className='input-field'>
						<Button type='submit'>SignUp</Button>
						<div className='text-danger center'>
							{this.authError ? <p>{this.authError}</p> : null}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
