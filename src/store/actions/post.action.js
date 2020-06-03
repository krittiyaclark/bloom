import * as PostActionTypes from './post.action.types';

export const createPost = (post) => {
	return (dispatch, getState, { getFirestore, getFirebase }) => {
		//  make async call to database
		const firestore = getFirestore();
		// Send to firestore
		firestore
			.collection('posts')
			.add({
				...post,
				authorFirstName: 'Pai',
				authorLastName: 'Clark',
				authorID: 12345,
				createAt: new Date(),
			})
			.then(() => {
				dispatch({ type: PostActionTypes.CREATE_POST, post });
			})
			.catch((error) => {
				dispatch({ type: PostActionTypes.CREATE_POST_ERROR, error });
			});
	};
};
