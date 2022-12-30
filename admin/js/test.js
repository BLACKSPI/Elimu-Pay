var firebaseConfig = {
  apiKey: "AIzaSyA41TSZcwPpgIJMQu4QklY-2s8rJmHNdEw",
  authDomain: "elimu-pay.firebaseapp.com",
  databaseURL: "https://elimu-pay-default-rtdb.firebaseio.com",
  projectId: "elimu-pay",
  storageBucket: "elimu-pay.appspot.com",
  messagingSenderId: "282414316037",
  appId: "1:282414316037:web:fe8ba8144036dc70917a6c",
  measurementId: "G-CC9HDKLT7T"
};
 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database();

function save() {
  var sName = document.getElementById("sName").value
  var mpesa = document.getElementById("mpesa").value
  var kcbAC = document.getElementById("kcbAC") .value
  var equityAC = document.getElementById("equityAC").value
  var coopAC = document.getElementById("coopAC").value

  // var addSchool = document.getElementById("addSchool").value

  db.ref('School/' + sName).set({
    mpesa: mpesa,
    kcb: kcbAC,
    equity: equityAC,
    coop: coopAC,

  })
  alert("data has been stored successfully")
}
