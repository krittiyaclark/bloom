import React, { Component } from 'react';

import FormInput from '../../../components/UI/FormInput/FormInput';
import Button from '../../../components/UI/Button/Button';

import { auth, signInWithGoogle } from '../../../config/firebaseConfig';

import './SignIn.css';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		return (
			<div className='sign-in'>
				<form onSubmit={this.handleSubmit} className='bg-white'>
					<h2 className='text-grey'>I already have an account</h2>
					<p className='title'>Sign in with your email and password</p>
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
							type='password'
							id='password'
							handleChange={this.handleChange}
							value={this.state.password}
							label='password'
						/>
					</div>
					<div className='input-field buttons'>
						<Button type='submit'>SignIn</Button>
						<Button
							className='btn bg-info'
							type='submit'
							onClick={signInWithGoogle}>
							{' '}
							SignIn With Google{' '}
						</Button>

						<div className='text-danger center'>
							{this.authError ? <p>{this.authError}</p> : null}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
