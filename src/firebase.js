import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  isSupported,
} from "firebase/messaging";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBJSzeiB7BoW7Q55krAeAo1zjhxQAIuVBU",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "kari-ng.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "kari-ng",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "kari-ng.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "418710741971",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:418710741971:web:3fdf23cfcfea838bec0526",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-NZ146X1FVS",
};

// Only initialize Firebase if config is provided
const firebaseApp = firebaseConfig.apiKey && !getApps().length
  ? initializeApp(firebaseConfig)
  : !getApps().length ? null : getApp();

export const auth = firebaseApp ? getAuth(firebaseApp) : null;

// Correctly export a promise that resolves to messaging instance (or null)
export const getMessagingObject = async () => {
  try {
    if (!firebaseApp) return null;
    const isSupportedBrowser = await isSupported();
    if (isSupportedBrowser) {
      return getMessaging(firebaseApp);
    }
    return null;
  } catch (err) {
    console.error("Messaging not supported:", err);
    return null;
  }
};

// fetchToken function
export const fetchToken = async (setTokenFound, setFcmToken) => {
  try {
    const messaging = await getMessagingObject();
    if (!messaging) return;

    const currentToken = await getToken(messaging, {
      vapidKey:
        "",
    });

    if (currentToken) {
      setTokenFound(true);
      setFcmToken(currentToken);
    } else {
      setTokenFound(false);
      setFcmToken();
    }
  } catch (err) {
    console.error("Token fetch error:", err);
  }
};

// onMessageListener function
export const onMessageListener = async () =>
  new Promise(async (resolve, reject) => {
    try {
      const messaging = await getMessagingObject();
      if (!messaging) return;

      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    } catch (err) {
      reject(err);
    }
  });
