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

window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
  'size': 'invisible',
  'callback': function(response) {
    // reCAPTCHA solved - proceed with phone auth
  }
}, auth);

recaptchaVerifier.render();

function sendOTP() {
  const phoneNumber = document.getElementById("phone").value;
  const appVerifier = window.recaptchaVerifier;

  auth.signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(confirmationResult => {
      window.confirmationResult = confirmationResult;
      alert("OTP sent!");
    })
    .catch(error => {
      console.error("Error sending OTP:", error);
      alert("Error sending OTP: " + error.message);
    });
}

function verifyOTP() {
  const otp = document.getElementById("otp").value;

  if (!window.confirmationResult) {
    alert("No OTP request found. Please send OTP first.");
    return;
  }

  window.confirmationResult.confirm(otp)
    .then(result => {
      window.location.href = "../voter/main.html";
      console.log("User:", result.user);
    })
    .catch(error => {
      console.error("OTP verification failed:", error);
      alert("Invalid OTP: " + error.message);
    });
}

