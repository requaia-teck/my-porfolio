let navBtn = document.querySelector('.btn');
let closebtn= document.querySelector('.btn1')
let logolink = document.querySelector('.logo-link')
navBtn.addEventListener('click', function () {
    logolink.classList.add('show-links')
    closebtn.classList.add('show-btn')
});

closebtn.addEventListener('click', function(){
    logolink.classList.remove('show-links')
    closebtn.classList.remove('show-btn')
});

console.log(window.innerWidth);


