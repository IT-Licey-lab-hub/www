const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const cotainer = document.querySelector(".cotainer");

signInBtn.addEventListener("click",() =>{
    cotainer.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click",() =>{
    cotainer.classList.add("right-panel-active");
});

firstForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
