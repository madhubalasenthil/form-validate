
const form =document.getElementById("form");
const useraName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");


// check Email


function checkEmail(email){
    if(!email.value.trim().isEmail(string)){
        errorInput(email,`${getName(email)} is not a Valid Email Address`);
    }
}

function checkRequired(inputs){
    inputs.forEach((input) => {
        if(input.value.trim()===""){
            errorInput(input,`${getName(input)} is Requeired`);
        }
        else{
            successInput(input);
        }
        
    });
}


function getName(input){
    return input.getAttribute("data-name");
}

// checkLength of input

function checkLength(input,min,max){
    const data = input.value.trim().length;
    if(data<min){
        errorInput(input,`${getName(input)} must be atlest greaterthan ${min} characters`);
    }
    else if (data>max){
        errorInput(input,`${getName(input)} must be atlest lessthan ${max} characters`);
    }
    else {
        successInput(input);
    }
}

// confirm password

function checkConfirmPassword(password,cpassword){
    if(password.value !=  cpassword.value){
        errorInput(cpassword,`${getName(cpassword)} does not match`);
    }
}

// show error message

function errorInput(input,message){
    const formGroup = input.parentElement;
    formGroup.className ="form-group error";
    const p = formGroup.querySelector("p");
    p.innerHTML = message;

}

// show success message

function successInput(input){
    const formGroup = input.parentElement;
    formGroup.className ="form-group success";
    const p = formGroup.querySelector("p");
    p.innerHTML = "";

}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    checkRequired([useraName,email,password,cpassword]);
    checkLength(useraName,5,15);
    checkLength(password,5,10);
    checkConfirmPassword(password,cpassword);
    checkEmail(email);

});