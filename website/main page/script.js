const reg_btn = document.getElementById('register-btn');
const login_btn = document.getElementById('login-btn');
const admin_btn = document.getElementById('admin-btn');
const voter_btn = document.getElementById('voter-btn');

const pass2_box = document.getElementById('pass2');
const pass_box = document.getElementById('pass');
const adhaar_box = document.getElementById('adhaar');

reg_btn.addEventListener('click', () => {
  reg_btn.classList.add('active');
  login_btn.classList.remove('active');
  pass2_box.style.display = "flex";
  pass_box.style.display = "flex";
  adhaar_box.style.display = "flex";
});

login_btn.addEventListener('click', () => {
  login_btn.classList.add('active');
  reg_btn.classList.remove('active');

  pass_box.style.display = "none";
  adhaar_box.style.display = "none";
});

admin_btn.addEventListener('click', () => {
  voter_btn.classList.remove('active');
  admin_btn.classList.add('active');
});

voter_btn.addEventListener('click', () => {
  admin_btn.classList.remove('active');
  voter_btn.classList.add('active');
});

document.getElementById('submit-btn').addEventListener('click', () => {
  const username = document.getElementById('username').value.trim();
  const aadhaar = document.getElementById('aadhaar-number').value.trim();
  const password = document.getElementById('password').value.trim();
  const rePassword = document.getElementById('re-password').value.trim();

  const isRegister = reg_btn.classList.contains('active');
  const isLogin = login_btn.classList.contains('active');
  const isAdmin = admin_btn.classList.contains('active');
  const isVoter = voter_btn.classList.contains('active');

  if (!username || (isRegister && (!aadhaar || !password || !rePassword)) || (isLogin && !password)) {
    alert('Please fill all required fields.');
    return;
  }

  if (isRegister) {
    if (password !== rePassword) {
      alert('Passwords do not match.');
      return;
    }
    alert('Registered!');
    return;
  }

  if (isLogin) {
    if (isAdmin) {
      window.location.href = "../admin/main.html";
    } else if (isVoter) {
      window.location.href = "../voter/main.html";
    } else {
      alert("Please select either Admin or Voter.");
    }
  }

  // Store all values for future use
  console.log({ username, aadhaar, password, rePassword });
});
