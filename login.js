import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  // Your Firebase configuration details
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function login(e) {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  try {
    // Check if the user exists in Firestore
    const userSnapshot = await getDocs(collection(db, "users"));
    const user = userSnapshot.docs.find((doc) => doc.data().email === email);

    if (user) {
      // Verify the password
      if (user.data().password === password) {
        alert("Login successful");
        // Perform additional actions, such as redirecting the user
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("User not found");
    }
  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    alert(errorMessage);
    console.error("Error:", errorCode + " " + errorMessage);
  }
}

document.querySelector("form").addEventListener("submit", login);