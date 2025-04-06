

const reg_btn = document.getElementById('register-btn');
const login1 = document.getElementById("login-btn");
const admin = document.getElementById("admin-btn");
const voter = document.getElementById("voter-btn");

const pass2_box = document.getElementById("pass2");
const pass_box = document.getElementById("pass");
const adhaar = document.getElementById("adhaar");
const uid = document.getElementById("uid");

const button = document.getElementById('toggleButton');

reg_btn.addEventListener('click', () => {
   
    reg_btn.classList.toggle('active');
    login1.classList.remove('active');
    pass2_box.style.display = "flex";
    adhaar.style.display = "flex";
});
login1.addEventListener('click', () => {
    
    login1.classList.toggle('active');
    reg_btn.classList.remove('active');
    pass2_box.style.display = "none";
    adhaar.style.display = "none";
});
admin.addEventListener('click', () => {
    voter.classList.remove('active');
    admin.classList.toggle('active');
});
voter.addEventListener('click', () => {
    admin.classList.remove('active');
    voter.classList.toggle('active');
});

reg_btn.addEvenetLister('hover', () =>{
    voter.style.backgroundColor = "aquamarine";
});
login1.addEvenetLister('hover', () =>{
    voter.style.backgroundColor = "aquamarine";
});
admin.addEvenetLister('hover', () =>{
    voter.style.backgroundColor = "aquamarine";
});
voter.addEvenetLister('hover', () =>{
    voter.style.backgroundColor = "aquamarine";
});

submit = document.getElementById("submit");

submit.addEvenetLister("click", () =>{
    window.location.href = "D:\\ved\\College\\decentralized_voting\\website\\voter\\main.html";
});

