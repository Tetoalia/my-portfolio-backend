const adminHambuger = document.querySelector(".fa-bars");
const latDiv = document.querySelector(".lat-div")
const lonDiv = document.querySelector(".lon-div")

latDiv.textContent=JSON.parse(localStorage.getItem("location")).latitude
lonDiv.textContent = JSON.parse(localStorage.getItem("location")).longitude;


adminHambuger.addEventListener("click", function () {
  const adminMenu = document.querySelector(".sidebar-holder");
  if (adminMenu.style.display === "block") {
    adminMenu.style.display = "none";
    adminMenu.style.transition = "0.4s ease-in-out";
  } else {
    adminMenu.style.display = "block";
    adminMenu.style.transition = "0.4s eas-in-out";
    adminMenu.style.position = "fixed";
    adminMenu.style.top = "75px";
  }
});

let btn = document.getElementById("logout-btn")
let user = localStorage.getItem('users')
if (user) {
  btn.innerText = 'Logout'
}