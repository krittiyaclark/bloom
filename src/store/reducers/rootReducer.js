import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import authReducer from './auth.reducer';
import postReducer from './post.reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	post: postReducer,
	firestore: firestoreReducer,
});

export default rootReducer;
