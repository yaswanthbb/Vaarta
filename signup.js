import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBGYtobB410Q04qHm7bGSrQBsFdgbvooyY",
  authDomain: "vaarta-88786.firebaseapp.com",
  databaseURL: "https://vaarta-88786-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vaarta-88786",
  storageBucket: "vaarta-88786.appspot.com",
  messagingSenderId: "415232456807",
  appId: "1:415232456807:web:3627768effc74feed73cc2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let signup = async function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var profile_photo = document.getElementById("profile_photo").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  if (password !== confirm_password) {
    alert("Passwords do not match");
    return;
  }

  try {
    // Store user data in Firestore
    const userId = `${email.split("@")[0]}-${Date.now()}`;
    await setDoc(doc(db, "users", userId), {
      name: name,
      email: email,
      password: password,
      image: profile_photo,
    });

    alert("Signup successful");
  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    alert(errorCode + " " + errorMessage);
    console.error("Error:", error);
  }
};

document.querySelector("form").addEventListener("submit", signup);