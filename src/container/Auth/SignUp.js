import React, { Component } from 'react';

import FormInput from '../../components/UI/FormInput/FormInput';

import { auth, createUserProfileDocument } from '../../config/firebaseConfig';

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
			<div>
				<form onSubmit={this.handleSubmit} className='bg-white'>
					<h5 className='text-grey'>Sign Up</h5>
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
						<button className='btn bg-info' type='submit'>
							SignUp
						</button>
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
