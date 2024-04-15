import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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
// const db = getDatabase();
const auth = getAuth(app);


function login(e){
    e.preventDefault()

    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    var user ={
        email:email,
        password:password,
    }

    signInWithEmailAndPassword(auth,user.email,user.password)
    .then((success)=>{
        alert("Login Success")
    })
    .catch((error)=>{
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage);
        console.error("Error:", errorCode + " " + errorMessage);
    })

}

document.querySelector("form").addEventListener("submit", login);