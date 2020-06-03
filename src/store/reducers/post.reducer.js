import * as PostActionTypes from '../actions/post.action.types';

const INITIAL_STATE = {
	postsProjectList: [
		{ id: '1', title: 'help me with project', content: 'some content' },
		{ id: '2', title: 'buy some bananas', content: 'some content' },
		{ id: '3', title: 'learn React', content: 'some content' },
	],
};

const postReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PostActionTypes.CREATE_POST:
			console.log('CREATE_POST', action.post);
			return state;
		case PostActionTypes.CREATE_POST_ERROR:
			console.log('CREATE_POST_ERROR', action.error);
			return state;
		default:
			return state;
	}
};

export default postReducer;
