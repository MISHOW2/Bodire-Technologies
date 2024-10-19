let openMenu =document.querySelector('.fa-solid');
let menu = document.querySelector('.navigation');

let closeMenu = document.querySelector('.closeMenu')

openMenu.addEventListener("click", ()=>{
 
    menu.style.display = "block";
    openMenu.style.display ="none"
   closeMenu.style.display ="block"
 
}
)

closeMenu.addEventListener("click", ()=>{
  menu.style.display = "none";
  openMenu.style.display ="block"
  closeMenu.style.display ="none"
}
)