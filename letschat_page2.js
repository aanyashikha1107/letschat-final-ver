
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyABwTD4T7NPzh5hy-WPrfe1Wmph6lcVyH4",
  authDomain: "letschat2-6ce9f.firebaseapp.com",
  databaseURL: "https://letschat2-6ce9f-default-rtdb.firebaseio.com",
  projectId: "letschat2-6ce9f",
  storageBucket: "letschat2-6ce9f.appspot.com",
  messagingSenderId: "527322077916",
  appId: "1:527322077916:web:d111e7d7eaaeeaed4a7219"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom() {
          room_name = document.getElementById("room_name").value ;
          firebase.database().ref("/").child(room_name).update({
                purpose : "Add room name"
          });
          localStorage.setItem("room_name" , room_name);
          window.location = "letschat_room.html";
    }

function getData() {
      
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name = " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "letschat_room.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}