  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBsP67QhnC4MTFg8RRwAfBzGrd1x2BKqX4",
    authDomain: "evenementplanner-d4adb.firebaseapp.com",
    projectId: "evenementplanner-d4adb",
    storageBucket: "evenementplanner-d4adb.firebasestorage.app",
    messagingSenderId: "547549174941",
    appId: "1:547549174941:web:0d9a0abc1c35697e468874",
    measurementId: "G-RGPKV2TEE6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var db = app.firestore()