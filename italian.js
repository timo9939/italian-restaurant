

const formOpenBtn=document.querySelector("#form_open"),
formCloseBtn=document.querySelector("#closeFormBtn"),
pwProtectOn=document.querySelector(".fa-eye-slash"),
pwProtectOff=document.querySelector(".fa-eye"),
home=document.querySelector(".home");

function addShow(){
home.classList.add("show")
}

function closeForm(){
    home.classList.remove('show')
}

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

formOpenBtn.addEventListener('click',addShow);
formCloseBtn.addEventListener('click',closeForm);

pwProtectOn.addEventListener('click',displayPw)
pwProtectOff.addEventListener('click',hidePw)