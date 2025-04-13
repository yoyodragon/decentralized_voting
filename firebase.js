const firebaseConfig = {
  apiKey: "AIzaSyBFynKqy9_1bhevdpdAyFhhJChFWHlk3FI",
  authDomain: "decentralized-voting-123.firebaseapp.com",
  projectId: "decentralized-voting-123",
  storageBucket: "decentralized-voting-123.firebasestorage.app",
  messagingSenderId: "622124462253",
  appId: "1:622124462253:web:5bdb161510125193049624"
};

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  function getEmailPass() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    return { email, password };
  }

  function signUp() {
    const { email, password } = getEmailPass();
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        document.getElementById('status').innerText = "Signed up successfully!";
      })
      .catch((error) => {
        document.getElementById('status').innerText = "Error: " + error.message;
      });
  }

  function signIn() {
    const { email, password } = getEmailPass();
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          document.getElementById('status').innerText = "Signed in (email verified)";
        } else {
          document.getElementById('status').innerText = "Signed in, but email not verified.";
        }
      })
      .catch((error) => {
        document.getElementById('status').innerText = "Error: " + error.message;
      });
  }

  function sendVerification() {
    const user = auth.currentUser;
    if (user) {
      user.sendEmailVerification()
        .then(() => {
          document.getElementById('status').innerText = "Verification email sent!";
        })
        .catch((error) => {
          document.getElementById('status').innerText = "Error: " + error.message;
        });
    } else {
      document.getElementById('status').innerText = "No user is signed in.";
    }
  }

  function signOut() {
    auth.signOut().then(() => {
      document.getElementById('status').innerText = "Signed out.";
    });
  }