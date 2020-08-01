import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAkg7BLHzbVdikJM_1DyN_oHnbbrl_Dbq0",
        authDomain: "todo-app-adrian-f732c.firebaseapp.com",
        databaseURL: "https://todo-app-adrian-f732c.firebaseio.com",
        projectId: "todo-app-adrian-f732c",
        storageBucket: "todo-app-adrian-f732c.appspot.com",
        messagingSenderId: "766624394385",
        appId: "1:766624394385:web:6869002f377ddd852fe330",
        measurementId: "G-F4F2Z22QRX"
})

const db = firebaseApp.firestore();

export default db;