const overlay = document.querySelector('.overlay');
const menubar = document.querySelector('.menubar');
const nav1 = document.querySelector('.nav1');
const nav2 = document.querySelector('.nav2');
const nav3 = document.querySelector('.nav3');
const nav4 = document.querySelector('.nav4');
const nav5 = document.querySelector('.nav5');
const navItems = [nav1,nav2,nav3,nav4,nav5];


// Control the nav animation
const navAnimation = (direction1 , direction2)=>{
  navItems.forEach((item , i)=>{
    item.classList.replace(`slide-${direction1}${i+1}`,`slide-${direction2}${i+1}`)
  })
}

// Hamburger Menu
function menuBar(element){
  element.classList.toggle('change');
}

const toggleNav = ()=>{
  overlay.classList.toggle('overlay-active');
  if(overlay.classList.contains('overlay-active')){
    overlay.classList.replace('overlay-slide-left' , 'overlay-slide-right');
    // animation
    navAnimation('out' , 'in');

  }else{
    overlay.classList.replace('overlay-slide-right' , 'overlay-slide-left');
    // animation
    navAnimation('in' , 'out');
  }
}

menubar.addEventListener('click' , toggleNav);
