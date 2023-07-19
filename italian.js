const formOpenBtn=document.querySelector("#form_open"),
formCloseBtn=document.querySelector("#closeFormBtn"),
home=document.querySelector(".home");

function addShow(){
home.classList.add("show")
}

function closeForm(){
    home.classList.remove('show')
}

formOpenBtn.addEventListener('click',addShow);
formCloseBtn.addEventListener('click',closeForm);

