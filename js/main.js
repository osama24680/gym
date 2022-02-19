let navbar=document.querySelector("#navbar")
let bodyScroll=document.querySelector("html , body")
window.addEventListener("scroll",function(){
    if(bodyScroll.scrollTop >=100){
        navbar.style.opacity=".8"
    }
    else{
        navbar.style.opacity="1"
    }
})



let logo=document.querySelector(".logo")
let myNavbar=document.getElementById("navList")

logo.addEventListener("click", () =>{
    myNavbar.classList.toggle("active")
})
window.onscroll = () =>{
    myNavbar.classList.remove("active")
}