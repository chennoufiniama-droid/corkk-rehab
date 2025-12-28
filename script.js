// ------------------------------
// 1️⃣ Import Firebase SDKs
// ------------------------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// ------------------------------
// 2️⃣ Your Firebase configuration
// ------------------------------
const firebaseConfig = {
  apiKey: "AIzaSyB_8lRamFlxAmW-3EHxPChJ2ecKXuYGtvs",
  authDomain: "corkrehab-9ebd4.firebaseapp.com",
  projectId: "corkrehab-9ebd4",
  storageBucket: "corkrehab-9ebd4.firebasestorage.app",
  messagingSenderId: "115532329958",
  appId: "1:115532329958:web:ae479e7cff785356039c27",
  measurementId: "G-HQFC8TPR7Y"
};

// ------------------------------
// 3️⃣ Initialize Firebase
// ------------------------------
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ✅ Make sure auth is connected to THIS app

// ------------------------------
// 4️⃣ Functions for your buttons
// ------------------------------
window.signup = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("✅ Account created!"))
    .catch(e => alert("❌ " + e.message));
};

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("✅ Logged in!"))
    .catch(e => alert("❌ " + e.message));
};
