import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/UI/FormInput/FormInput';
import FormTextArea from '../../components/UI/FormTextArea/FormTextArea';
import { createPost } from '../../store/actions/post.action';

class CreatePost extends Component {
	state = {
		title: '',
		content: '',
	};

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		this.props.createPost(this.state);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} className='bg-white'>
					<h5 className='text-grey'>Create New Post</h5>
					<div className='input-field'>
						<FormInput
							type='text'
							id='title'
							handleChange={this.handleChange}
							value={this.state.title}
							label='Title'
						/>
					</div>
					<div className='input-field'>
						<FormTextArea
							type='text'
							id='content'
							handleChange={this.handleChange}
							value={this.state.content}
							label='Content'
						/>
					</div>
					<div className='input-field'>
						<button className='btn bg-info'>Create Post</button>
						<div className='text-danger center'>
							{this.authError ? <p>{this.authError}</p> : null}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createPost: (post) => {
			dispatch(createPost(post));
		},
	};
};

export default connect(null, mapDispatchToProps)(CreatePost);
