import * as PostActionTypes from './post.action.types';

export const createPost = (post) => {
	return (dispatch, getState, { getFirestore, getFirebase }) => {
		//  make async call to database
		dispatch({ type: PostActionTypes.CREATE_POST, post });
	};
};
