let input=document.getElementById("frm");
// console.log(value);
let btn=document.querySelector('.btn');
let email=document.getElementById("email1");
let password=document.getElementById("password1");
btn.addEventListener('click',function(e){
    email.value="";
    password.value="";
        localStorage.setItem("emails",email.value);
    localStorage.setItem('password',password.value);
})  