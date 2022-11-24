const menuBtn = document.querySelector(".js-menu-mobile");
const menuContainer = document.querySelector('#menu-mobile');
const closeBtn = document.querySelector(".js-close-menu");
const menuContent = document.querySelector(".menu-content");
function closeMenu(){
    menuContainer.classList.remove('open');
}
closeBtn.addEventListener('click',function(){
    closeMenu();
})

menuBtn.addEventListener('click',function(){
    menuContainer.classList.add('open');
})
menuContainer.addEventListener('click',function(){
    closeMenu();
})
menuContent.addEventListener('click',function(e){
    e.stopPropagation();
})