import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2NgjgwjBogA5Capz7d5_PPsT3tkj9oTk",
  authDomain: "portfoliodimasforum.firebaseapp.com",
  projectId: "portfoliodimasforum",
  storageBucket: "portfoliodimasforum.appspot.com",
  messagingSenderId: "365108246554",
  appId: "1:365108246554:web:16f36847aaf7d0610eb9a3",
  measurementId: "G-NWM4FNMMK4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
