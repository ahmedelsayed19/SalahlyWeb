// Import Firebase scripts for service worker
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBXVvS_Ia-XPXCKisGp-dSpAefSTGW26SY",
  authDomain: "sal7ly-563f3.firebaseapp.com",
  projectId: "sal7ly-563f3",
  storageBucket: "sal7ly-563f3.firebasestorage.app",
  messagingSenderId: "825112447505",
  appId: "1:825112447505:web:7b1a8d01a1b6f71d7dbfb0",
  measurementId: "G-Z62Z5XJ0ST"
};

// Initialize Firebase in service worker
firebase.initializeApp(firebaseConfig);

// Get messaging instance
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.png',
    badge: '/favicon.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
