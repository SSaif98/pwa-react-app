import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBZZ0KjmYdBuLpdoP6dkReeVUiH9yzdawA",
    authDomain: "pwanotification-9eb12.firebaseapp.com",
    projectId: "pwanotification-9eb12",
    storageBucket: "pwanotification-9eb12.appspot.com",
    messagingSenderId: "499299854600",
    appId: "1:499299854600:web:712d6acab379bae8b8e4bd"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  export function initNotification(){
    Notification.requestPermission().then((permission)=> {
        console.log(permission);
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log('TOKEN =>',currentToken)
                } else {
                  console.log('No Instance token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}