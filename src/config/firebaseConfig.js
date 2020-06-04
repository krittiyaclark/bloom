import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
	apiKey: 'AIzaSyDrVTdj8hGrzWhe2kR5YQmMjY6aJsVAMa4',
	authDomain: 'bloom-e0422.firebaseapp.com',
	databaseURL: 'https://bloom-e0422.firebaseio.com',
	projectId: 'bloom-e0422',
	storageBucket: 'bloom-e0422.appspot.com',
	messagingSenderId: '693369765172',
	appId: '1:693369765172:web:997e5ad30d93c26614f961',
	measurementId: 'G-19D1K3NJWJ',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
