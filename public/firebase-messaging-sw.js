importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBZZ0KjmYdBuLpdoP6dkReeVUiH9yzdawA",
    authDomain: "pwanotification-9eb12.firebaseapp.com",
    projectId: "pwanotification-9eb12",
    storageBucket: "pwanotification-9eb12.appspot.com",
    messagingSenderId: "499299854600",
    appId: "1:499299854600:web:712d6acab379bae8b8e4bd"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();