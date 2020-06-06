import * as PostActionTypes from './post.actions.types';

export const createPost = (post) => {
	return (dispatch, getState, { getFirestore, getFirebase }) => {
		//  make async call to database
		dispatch({ type: PostActionTypes.CREATE_POST, post });
	};
};
