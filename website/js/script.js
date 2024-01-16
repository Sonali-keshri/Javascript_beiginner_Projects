let navBar= document.querySelector('.navbar');
let rightBar= document.querySelector('.right-bar');
let menuBar= document.querySelector('.menu-bar');
let burger= document.querySelector('.burger');

burger.addEventListener('click', ()=>{
    rightBar.classList.toggle('visibility-resp');
    menuBar.classList.toggle('visibility-resp');
    navBar.classList.toggle('height-resp');
})