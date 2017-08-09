import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC-UlQVgcItnJkQv1GcisX1s-WHFmprbho",
    authDomain: "goalcoach-f8c2e.firebaseapp.com",
    databaseURL: "https://goalcoach-f8c2e.firebaseio.com",
    projectId: "goalcoach-f8c2e",
    storageBucket: "",
    messagingSenderId: "950912738098"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
