//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyAxsZ1YBFWU2g-yveC5GSaa-nROd4FDEpc",
      authDomain: "kwitter-f1209.firebaseapp.com",
      databaseURL: "https://kwitter-f1209-default-rtdb.firebaseio.com",
      projectId: "kwitter-f1209",
      storageBucket: "kwitter-f1209.appspot.com",
      messagingSenderId: "149171032821",
      appId: "1:149171032821:web:44b0b4a015597cbb88ebbc",
      measurementId: "G-VZHL9VG9WE"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + messsge + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" vlaue="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+" </span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function updateLike(message_id)
{
      console.log("clicked on like button - " +message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(update_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}