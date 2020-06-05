import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/UI/FormInput/FormInput';
import FormTextArea from '../../components/UI/FormTextArea/FormTextArea';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';

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
			<Card>
				<form onSubmit={this.handleSubmit} className='bg-white'>
					<h2 className='text-grey'>Create New Post</h2>
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
						<Button type='submit'>Create Post</Button>
						<div className='text-danger center'>
							{this.authError ? <p>{this.authError}</p> : null}
						</div>
					</div>
				</form>
			</Card>
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
