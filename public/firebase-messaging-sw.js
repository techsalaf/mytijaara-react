importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBJSzeiB7BoW7Q55krAeAo1zjhxQAIuVBU",
  authDomain: "kari-ng.firebaseapp.com",
  projectId: "kari-ng",
  storageBucket: "kari-ng.firebasestorage.app",
  messagingSenderId: "418710741971",
  appId: "1:418710741971:web:3fdf23cfcfea838bec0526",
  measurementId: "G-NZ146X1FVS",
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
