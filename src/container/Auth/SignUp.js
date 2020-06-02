import React, { Component } from 'react';

import FormInput from '../../components/UI/FormInput/FormInput';

class SignUp extends Component {
	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
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
							type='password'
							id='password'
							handleChange={this.handleChange}
							value={this.state.password}
							label='password'
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
						<button className='btn bg-info'>SignUp</button>
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
