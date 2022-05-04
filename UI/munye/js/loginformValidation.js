const regxmail = /^[\w]{2,}@(gmail|yahoo|hotmail)\.(com|fr|rw|info|org)$/g ;
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    const signInform = document.querySelector(".sign-in-container")
    const signInbtn = document.querySelector(".login-btn")
    const signUpform = document.querySelector(".sign-up-container")


    signInform.style.display = "none"
    signUpButton.addEventListener('click', () => {
       signInform.style.display = 'none';
             signUpform.style.display = 'block' 
    });

     signInButton.addEventListener('click', () => {
               signInform.style.display = 'block';
             signUpform.style.display = 'none'

    });

const error3 = document.getElementById("error11")
const error4 = document.getElementById("error12")
const signinEmail = document.getElementById("email")
const signinPassword = document.getElementById("password")
// const user = localStorage.getItem('users');
// const localUsers = JSON.parse(user);

signInbtn.addEventListener('click', (e) => {
  e.preventDefault();
  if(!signinEmail.value){
    error3.innerHTML = "Please add your email" 
    return false
  }else{
    error3.innerHTML = ''
  } 
  let mail = signinEmail.value.trim()
  if(mail.length < 5){
    error3.innerHTML = "Email is too short"
    return false;
  }else {
    error3.innerHTML = ''
  }
  
  // const localUser = localUsers.find(u => u.email === mail);
  // console.log(localUser);
  // if(localUser === undefined){
  //   error3.innerHTML = "Email not found!"
  //   return false
  // }
  // else {
  //   error3.innerHTML = ''
  // } 
  if(signinPassword.value.length < 6){
    error4.innerHTML = "Please add the password"
    return false
  }else {
    error4.innerHTML = ''
    
  } 
  window.location.href="/admin.html"
  // if(signinPassword.value !== localUser.password){
  //   error4.innerHTML = "Invalid  Password"
  //   return false
  // }else{
  //   error4.innerHTML = ''
  //   location.href = "./munye/js/admin.html";

  // }
})

// fetch('https://striker-server.herokuapp.com/api/v1/user/login', {

//     method: 'POST',
//     mode: 'no cors',
//     headers: {
//       'content-Type': 'application/json',
//       'Access-Control-Cross-Origin': '*',
//     },
//     body: JSON.stringify({
//       email: signinEmail.value.trim(),
//       password: signinPassword.value.trim(),
//     })
//   })
//     .then(res => {
//       email === null;
//       password === null;
//       return res.json();
//     })
//     .then(data => {
//        if (!signinEmail.value) {
//          error3.innerHTML = "Please add your email";
//          return false;
//        } else {
//          error3.innerHTML = "";
//        }
//        let mail = signinEmail.value.trim();
//        if (mail.length < 5) {
//          error3.innerHTML = "Email is too short";
//          return false;
//        } else {
//          error3.innerHTML = "";
//        }
//        const localUser = localUsers.find((u) => u.email === mail);
//        console.log(localUser);
//        if (localUser === undefined) {
//          error3.innerHTML = "Email not found!";
//          return false;
//        } else {
//          error3.innerHTML = "";
//        }
//        if (signinPassword.value.length < 6) {
//          error4.innerHTML = "Please add the password";
//          return false;
//        } else {
//          error4.innerHTML = "";
//        }
//        if (signinPassword.value !== localUser.password) {
//          error4.innerHTML = "Invalid  Password";
//          return false;
//        } else {
//          error4.innerHTML = "";
//          location.href = "./munye/js/admin.html";
//        }
//     })

    
// })

/////////////////////////////////////////// SIGN UP ///////////////////
// const names = document.querySelector("#name2")
// const error = document.querySelector(".error-message")
// const error1 = document.querySelector(".error-email")
// const error2 = document.querySelector(".error-password")
// const email = document.querySelector("#email2")
// const password = document.querySelector("#password2")


// signUpform.addEventListener('submit', (e) => {
//   e.preventDefault()  

//   if(names.value.length == 0) {
//     error.innerHTML = "Fill your name please"
//     return false
//   }
//   else if (names.value.length < 3 ){
//     error.innerHTML = "Name must be not less than 3 characters"
//   }
//   else {
//     error.innerHTML = ""
//   }

//   const result = regxmail.test(email.value.trim());
  
//   if(email.value.length <= 2) {
//     error1.textContent = "Fill your email please"
//   }
//   else if (!result){
//     console.log("ZZZZZZZZ", result);
//     error1.textContent = "Invalid Email"
//   } 
//   else {
//     error1.textContent = ""
//   }

//   if (password.value.length < 6) {
//     error2.innerText = "Fill your password please";
//   }
//   else {
//     error2.innerHTML = ""

//     // const us = localStorage.getItem('users');
//     const prevUsers = us ? JSON.parse(us): [];
//     if (prevUsers.map(u => u.email).includes(email.value)) 
//       error1.textContent = 'email already exists';
//     else {
//       const users = JSON.stringify([ ...prevUsers, { id: Date.now(), email: email.value, password: password.value }])
//       localStorage.setItem('users', users);
//       signUpform.style.display = 'none';
//       signInform.style.display = 'block';
//     }
    
//   }

// async function registerUser(){
//   response = await fetch(
//     "https://striker-server.herokuapp.com/api/v1/user/register"
//   );
//   loginn = await response.json();
//   console.log(loginn.user);
//   register = await response.json();
//   console.log(register.us);
// }

// })
