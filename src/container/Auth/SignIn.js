import React, { Component } from 'react';

import FormInput from '../../components/UI/FormInput/FormInput';

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

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} className='bg-white'>
					<h5 className='text-grey'>SignIn</h5>
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
					<div className='input-field'>
						<button className='btn bg-info'>LogIn</button>
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
