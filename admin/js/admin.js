// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA41TSZcwPpgIJMQu4QklY-2s8rJmHNdEw",
  authDomain: "elimu-pay.firebaseapp.com",
  projectId: "elimu-pay",
  storageBucket: "elimu-pay.appspot.com",
  messagingSenderId: "282414316037",
  appId: "1:282414316037:web:fe8ba8144036dc70917a6c",
  measurementId: "G-CC9HDKLT7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, ref, set, child, update, remove }
  from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";

const db = getDatabase();

// get references

var sName = document.getElementById("sName");
var mpesa = document.getElementById("mpesa");
var kcbAC = document.getElementById("kcbAC");
var equityAC = document.getElementById("equityAC");
var coopAC = document.getElementById("coopAC");

var addSchool = document.getElementById("addSchool");

function InsertData() {
  set(ref(db, "School/" + sName.value),
    {
      "School Name": sName.value,
      "Mpesa": mpesa.value,
      "KCB": kcbAC.value,
      "Equity": equityAC.value,
      "Coop": coopAC.value

    }
  )
    .then(() => {
      alert("data has been stored successfully")
    })
    .catch((error) => {
      alert("Unsuccessfull error" + error);
    });
    }

function now() {
      alert("hello")
    }
// assign events to buttons
addSchool.addEventListener("click", InsertData);

