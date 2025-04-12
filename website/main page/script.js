const reg_btn = document.getElementById('register-btn');
const login_btn = document.getElementById('login-btn');


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






document.getElementById('submit-btn').addEventListener('click', () => {
  const username = document.getElementById('username').value.trim();
 
  const password = document.getElementById('password').value.trim();


  const isRegister = reg_btn.classList.contains('active');
  const isLogin = login_btn.classList.contains('active');


  if (!username ||  (isLogin && !password)) {
    alert('Please fill all required fields.');
    return;
  }

  

  if (isLogin) {
    
      //window.location.href = "../voter/main.html";

  }

  // Store all values for future use
  console.log({ username, password });
});
