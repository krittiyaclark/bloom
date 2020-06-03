const INITIAL_STATE = {
	postsProjectList: [
		{ id: '1', title: 'help me with project', content: 'some content' },
		{ id: '2', title: 'buy some bananas', content: 'some content' },
		{ id: '3', title: 'learn React', content: 'some content' },
	],
};

const postReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CREATE_POST':
			console.log('CREATE_POST', action.post);
	}
	return state;
};

export default postReducer;
