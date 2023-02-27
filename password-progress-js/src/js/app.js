const Username = document.querySelector("#name");
const nameLabel = document.querySelector("#name_label");
const check = document.querySelector("#check");
const Button = document.querySelector("#btn");
const Password = document.querySelector("#password");
const ProgressPassword = document.querySelector(".check_strong_password");

const StrengPassword = {
    error: 33,
    warning: 66,
    success: 100,
  };

  Password&& Password.addEventListener("keyup",()=>{
    if(Password.value.length <= 4){
        ProgressPassword.style.width = StrengPassword.error + "%";
        ProgressPassword.style.background = "red";
    }
    else if (Password.value.length < 8) {
        ProgressPassword.style.width = StrengPassword.warning + "%";
        ProgressPassword.style.background = "gold";
    }
    else if(Password.value.length < 16){
        ProgressPassword.style.width = StrengPassword.success+ "%";
        ProgressPassword.style.background = "green";
    }
  })

  check &&check.addEventListener("click",()=>{
    if(check.checked==true){
        Button.disabled=false;
    }
    else Button.disabled=true;
  })
Button && Button.addEventListener("click",(event)=>{
    event.preventDefault;
    
})
  
 
  