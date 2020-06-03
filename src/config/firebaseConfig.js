import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyDrVTdj8hGrzWhe2kR5YQmMjY6aJsVAMa4',
	authDomain: 'bloom-e0422.firebaseapp.com',
	databaseURL: 'https://bloom-e0422.firebaseio.com',
	projectId: 'bloom-e0422',
	storageBucket: 'bloom-e0422.appspot.com',
	messagingSenderId: '693369765172',
	appId: '1:693369765172:web:997e5ad30d93c26614f961',
	measurementId: 'G-19D1K3NJWJ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//  Initialize Firestore
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
