const firebaseConfig = {
  apiKey: "AIzaSyB2Aujw686O4Kqz5DCZ-9zpRIgT0VCGnKs",
  authDomain: "signup-59ad2.firebaseapp.com",
  projectId: "signup-59ad2",
  databaseURL: "https://signup-59ad2-default-rtdb.firebaseio.com/",
  storageBucket: "signup-59ad2.appspot.com",
  messagingSenderId: "263363187349",
  appId: "1:263363187349:web:d84d3d314ef80b49a0419c",
};

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child("userdetails");
detailsRef.on("child_added", function (snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

function send() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  detailsRef.push().set({
    email: email,
    password: password,
  });
}
