if(localStorage.getItem('user_list') == null){
    let user_list=[];
    localStorage.setItem('user_list', JSON.stringify(user_list));
}

let user_list = JSON.parse(localStorage.getItem('user_list'));

let text = document.querySelector('.text');
let email = document.querySelector('.email');
let email2 = document.querySelector('.email2');
let password = document.querySelector('.password');
let checkbox = document.querySelector('.checkbox');

const checkEmail = (check) =>{
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(check);
}

function showValue(){
    if(password.type === "password"){
        password.type = 'text';
    }else{
        password.type = 'password';
    }
}
let checkLogin = () =>{
    
    if(text.value == ''){
        alert("Ismingizni kiriting!");
    }else if(email.value == ''){
        alert("E-mailni kiriting!");
    }else if(email2.value == ''){
        alert("Ikkinchi E-mailni kiriting!");
    }else if(password.value == ''){
        alert("Parolni kiritmadingiz!")
    }
    
    let res = checkEmail(email.value);
    if(!res){
        alert("You entered the wrong email!")
    }
    
    let foyda = {
        text: text.value,
        email: email.value,
        password: password.value
    }
    localStorage.setItem('register_user1', JSON.stringify(foyda));
    
    if(email.value == email2.value){
        location.href = './login.html';
        
        let shifr = window.btoa(email.value);
        
        let register_user = {
            text: text.value,
            email: shifr,
            password: password.value,
        };
        user_list.push(register_user)
        localStorage.setItem('user_list', JSON.stringify(user_list));
    }else{
        alert("You entered the second email incorrectly!")
    }

}
