window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset>fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}

const navbar = document.querySelector('#navbar');
const navmenu = document.querySelector('#navmenu');

navbar.addEventListener('click',function(){
    navbar.classList.toggle('navbar-active');
    navmenu.classList.toggle('hidden');
})