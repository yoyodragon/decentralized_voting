



const reg_btn = document.getElementById('register-btn');
const login_btn = document.getElementById('login-btn');
const signin = document.getElementById('signin');
const signup = document.getElementById('signup');
const verify = document.getElementById('verify');

const email = document.getElementById('email');
const pass_box = document.getElementById('pass');
const adhaar_box = document.getElementById('adhaar');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('signin').addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
 
  const password = document.getElementById('pass').value.trim();


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
