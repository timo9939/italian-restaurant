

const formOpenBtn=document.querySelector("#form_open"),
formCloseBtn=document.querySelector("#closeFormBtn"),
pwProtectOn=document.querySelector(".fa-eye-slash"),
pwProtectOff=document.querySelector(".fa-eye"),
home=document.querySelector(".home"),
signUpOpenBtn=document.getElementById("SignUp"),
signUpForm=document.querySelector(".form.signUp_form"),
logInForm=document.querySelector(".form.login_form");

// Showing the login page by pressing the login button at the nav bar
function addShow(){
home.classList.add("show")
}
// Close the login Form by clicking the cross symbol
function closeForm(){
    home.classList.remove('show')
}

//Disable the password protection by clicking the eye symbol
function displayPw(){
    console.log("pw protect disabled")
    let getPwInput=document.querySelector(".inputPassword")
    if(getPwInput.type==="password"){
    getPwInput.type="text"
}   
else{
    getPwInput.type="password"
}
 pwProtectOn.style.opacity=0

    pwProtectOff.style.opacity=1
    pwProtectOn.style.pointerEvents='none'
    pwProtectOff.style.pointerEvents='auto'

}

//Enable the password protection by clicking the eye symbol
function hidePw(){
    console.log("pw protect able")
    let getPwInput=document.querySelector(".inputPassword")
    if(getPwInput.type==="password"){
    getPwInput.type="text"
}   
else{
    getPwInput.type="password"
}

    pwProtectOff.style.opacity=0
    pwProtectOn.style.opacity=1
    pwProtectOff.style.pointerEvents='none'
    pwProtectOn.style.pointerEvents='auto'
}

// Display the signup Form page by clicking the "Don't have an account? Sign up"
function displaySignUpForm(){
 
    logInForm.style.display='none'
    signUpForm.classList.add("show")
   console.log("show signup form")
}

formOpenBtn.addEventListener('click',addShow);
formCloseBtn.addEventListener('click',closeForm);

pwProtectOn.addEventListener('click',displayPw)
pwProtectOff.addEventListener('click',hidePw)

signUpOpenBtn.addEventListener('click',displaySignUpForm)