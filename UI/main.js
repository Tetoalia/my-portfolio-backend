const navlinks = document.querySelector('.navlinks'); 
const burger = document.querySelector('.burger');
  // console.log("burhsaibfvioa",navlinks);
  // const navSlide = () => {
 
  //toggle nav
  burger.addEventListener('click', () => {
    console.log("wowqpo3ki5g",navlinks.classList)
    navlinks.classList.toggle('open');
  }); 
  if (navlinks)
  navlinks.addEventListener('click', () => {
navlinks.classList.toggle('open');
});


// navSlide();


// js for readmore
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}