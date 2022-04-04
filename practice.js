
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAUDvoml28J_weStkAWFSAyDUHIqTiW3Qc",
    authDomain: "class-test-5405c.firebaseapp.com",
    databaseURL: "https://class-test-5405c-default-rtdb.firebaseio.com",
    projectId: "class-test-5405c",
    storageBucket: "class-test-5405c.appspot.com",
    messagingSenderId: "130935027279",
    appId: "1:130935027279:web:e6e55161361310bfc5dc3a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() 
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }