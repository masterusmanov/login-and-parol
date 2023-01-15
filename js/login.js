let email = document.querySelector('.email');
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
    
    if(email.value == ''){
        alert("You did not enter a email!");
    }else if(password.value == ''){
        alert("You did not enter a password!")
    }
       
    let login_user = {
        email: email.value,
        password: password.value
    };

    let str = JSON.parse(localStorage.getItem('register_user1'));
        
   
    if(login_user.email == str.email){
        location.href = '../containes/main_page.html';
    }else{
        alert("E-mail is incorrect")
    }

}