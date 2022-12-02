

// loginBtn.addEventListener('click',openForm(loginForm));
// registerBtn.addEventListener('click',openForm(registerForm));


// =================================================== //
// ---------------- Variables creating --------------- //
// =================================================== //
let userAccounts;
let loginId;
function account(username,email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
loginId = localStorage.getItem("loginId") ? JSON.parse(localStorage.getItem("loginId")) : [];
// =================================================== //
// ------------------- First load -------------------- //
// =================================================== //

window.addEventListener('DOMContentLoaded', () => {
loginCheck(loginId);
})

// =================================================== //
// ------------------ open/close form ---------------- //
// =================================================== //


const loginBtns = document.querySelectorAll('.js-login');
const registerBtns = document.querySelectorAll('.js-register');
const closeBtns = document.querySelectorAll('.js-close');
const Containers = document.querySelectorAll('.js-form-container');
const forms = document.querySelectorAll(".form");
const loginForm=document.querySelector(".js-login-form");
const registerForm = document.querySelector(".js-register-form");

function closeForm(){
    for(const form of forms){
        form.classList.remove('open');
    }
}

function openForm(form){
    closeMenu();
    form.classList.add('open');
}
// buyBtn.addEventListener("click",function() {
    // openForm(buyForm);
// })


for(const loginBtn of loginBtns){
loginBtn.addEventListener("click", function() {
    openForm(loginForm);
})}
for(const registerBtn of registerBtns){
registerBtn.addEventListener("click", function() {
    openForm(registerForm)
})}

for(const closeBtn of closeBtns){
    closeBtn.addEventListener('click',closeForm)    
}

for(const form of forms){
    form.addEventListener("click",function(){
        form.classList.remove("open");
    })
}
for(const Container of Containers){
    Container.addEventListener('click',function(event){
        event.stopPropagation();
    })
}

// =================================================== //
// ------------------- validate form ----------------- //
// =================================================== //


const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const email = document.querySelector("#email");
const confirmPassword = document.querySelector("#re-password");
const loginUsername = document.querySelector("#login-username");
const loginPassword = document.querySelector("#login-password");

userName.addEventListener("blur", function (){
    usernameValid();
})
password.addEventListener("blur",function(){
    passwordValid();
})
loginUsername.addEventListener("blur",function(){
    loginUsernameValid();
})
loginPassword.addEventListener("blur",function(){
    loginPasswordValid();
})
confirmPassword.addEventListener("blur",function(){
    confirmPasswordValid();
})
email.addEventListener("blur",function(){
    emailValid();
})
function usernameValid(){
    let value = userName.value;
    let message = value ? true:false;
    const error = document.querySelector(".username-message");
    if(!message){
        error.innerText = "Vui lòng không để trống";
        userName.style.border = "1px solid red";
        return false;
    }
    else {
        error.innerText = "";
        userName.style.border = "1px solid #ccc";
        return true;
    }
}


function emailValid(){
    let value = email.value;
    let message = value ? true:false;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let message2 = regex.test(value) ? true:false;
    const error = document.querySelector(".email-message");
    if(!message){
        error.innerText = "Vui lòng không để trống";
        email.style.border = "1px solid red";
        return false;
    }
    else if(!message2){
        error.innerText = "Vui lòng nhập đúng định dạng";
        email.style.border = "1px solid red";
        return false;
    }
    else {
        error.innerText = "";
        email.style.border = "1px solid #ccc";
        return true;
    }
}



function passwordValid() {
    let value = password.value;
    let message = value ? true:false;
    const error = document.querySelector(".password-message");
    if(!message){
        error.innerText = "Vui lòng không để trống";
        password.style.border = "1px solid red";
        return false;
    }
    else {
        error.innerText = "";
        password.style.border = "1px solid #ccc";
        return true;
    }   
}
function confirmPasswordValid() {
    let value = confirmPassword.value;
    let message = value ? true:false;
    let message2 = value === password.value ? true:false;
    const error = document.querySelector(".re-password-message");
    if(!message){
        error.innerText = "Vui lòng không để trống";
        confirmPassword.style.border = "1px solid red";
        return false;
    }
    else if(!message2){
        error.innerText = "Nhập lại không khớp";
        confirmPassword.style.border = "1px solid red";
        return false;
    }
    else {
        error.innerText = "";
        confirmPassword.style.border = "1px solid #ccc";
        return true;
    }   
}
function loginUsernameValid(){
    let value = loginUsername.value;
    let message = value ? true:false;
    const error = document.querySelector(".login-username-message");
    if(!message){
        error.innerText = "Vui lòng không để trống";
        loginUsername.style.border = "1px solid red";
        return false;
    }
    else {
        error.innerText = "";
        loginUsername.style.border = "1px solid #ccc";
        return true;
    }
}

function loginPasswordValid() {
    let value = loginPassword.value;
    let message = value ? true:false;
    const error = document.querySelector(".login-pass-message");
    if(!message){
        error.innerText = "Vui lòng không để trống";
        loginPassword.style.border = "1px solid red";
        return false;
    }
    else {
        error.innerText = "";
        loginPassword.style.border = "1px solid #ccc";
        return true;
    }   
}



// =================================================== //
// ------------- login/register section -------------- //
// =================================================== //

const loginOption = document.querySelector("#login-form");
const signupOtion = document.querySelector("#signup-form");
const loginSuccesses = document.querySelectorAll(".login-bar-success");
const loginProcesses = document.querySelectorAll(".login-process");
const loginUsers = document.querySelectorAll(".login-user");
const logoutOptions = document.querySelectorAll(".logout-btn");

signupOtion.addEventListener("submit",function(e){
    e.preventDefault();
    let usernameCheck = usernameValid();
    let emailCheck = emailValid();
    let passwordCheck = passwordValid();
    let confirmPasswordCheck = confirmPasswordValid();
    if(usernameCheck && emailCheck && passwordCheck && confirmPasswordCheck){
        userAccounts =localStorage.getItem("userAccounts") ? JSON.parse(localStorage.getItem("userAccounts")):[];
        let check = userAccounts.some(function(item){
           return item.username === userName.value || item.email === email.value;
        })
        if(check){
            alert("username hoặc email đã tồn tại");
        }
        else {
            alert("Đăng kí thành công");
            let acc = new account(userName.value,email.value,password.value);
            userAccounts.push(acc);
            localStorage.setItem("userAccounts", JSON.stringify(userAccounts));
            closeForm();
        }
    }
})

loginOption.addEventListener("submit",function(e){
    e.preventDefault();
    let loginUsernameCheck = loginUsernameValid();
    let loginPasswordCheck = loginPasswordValid();
    if(loginUsernameCheck && loginPasswordCheck){
            userAccounts = JSON.parse(localStorage.getItem("userAccounts"));
            let admin = (loginUsername.value === "admin" && loginPassword.value === "admin")
            if(admin){
                localStorage.setItem("products", JSON.stringify(products));
                localStorage.setItem("categories", JSON.stringify(categories));
                window.location.href = "./admin.html";
            } 
            else {
            let check = userAccounts.some(function(item){
                return item.username === loginUsername.value && item.password === loginPassword.value;
            })
            if(!check){
                alert("username hoặc password không đúng!");
            }
            else{
                alert("Đăng nhập thành công");
                loginId=loginUsername.value;
                localStorage.setItem("loginId",JSON.stringify(loginId));
                loginSuccessful(loginId);
                closeForm();
            }}
    }
})
for(const logoutOption of logoutOptions){
    logoutOption.addEventListener("click",function(){
        logoutSuccessful();
        loginId = -1;
        localStorage.setItem("loginId",JSON.stringify(loginId));
    })
}


function loginSuccessful(username){
    for(const loginSuccess of loginSuccesses){
        loginSuccess.classList.remove("hide");
    }
    for(const loginProcess of loginProcesses){
        loginProcess.classList.add("hide");
        }
    for(const loginUser of loginUsers){
        loginUser.innerHTML = `<a><i class="fa-solid fa-user"></i>${username}</a>`;
    }
}
function logoutSuccessful(){
    for(const loginSuccess of loginSuccesses){
        loginSuccess.classList.add("hide");
    }
    for(const loginProcess of loginProcesses){
        loginProcess.classList.remove("hide");
        }

}
function loginCheck(status){
    if(status === -1){
        logoutSuccessful();
    }else {
        loginSuccessful(status);
    }
}




