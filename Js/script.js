//toggle reset button 
function toggleResetBtn(){
  const resetBtn = document.querySelector('.reset');
  resetBtn.classList.toggle('active');
  return;
}


// switch left , Middle and right of banner
function switchBanner(name){
  const banner = document.querySelector('#banner');
  if(!banner.classList.contains(name)){
    banner.className = 'banner';
    banner.classList.add(name);
  }
  //when switch banner, reset button should be active
  toggleResetBtn();
return ;

}

// Reset button 

function resetBanner(){
  const banner = document.querySelector('#banner');
  banner.className = 'banner';
  toggleResetBtn();

  return;
}

// toggle .header-scrolled class to #header when page is scrolled

const selectHeader = document.querySelector('#header');
const backtotop = document.querySelector('.back-to-top');
if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled');
      backtotop.classList.add('active');
    } else {
      selectHeader.classList.remove('header-scrolled');
      backtotop.classList.remove('active');
    }
  };
  window.addEventListener('load', headerScrolled);
  window.addEventListener('scroll', headerScrolled);
}

// Scroll back to top of the page 

function scrollToTop(){
  window.scrollTo(0,0);
}

// toggle menu on mobile view

function toggleMenu(){
  const menu = document.querySelector('.menu');
  const navMobile = document.querySelector('.nav-mobile');
  menu.classList.toggle('active');
  navMobile.classList.toggle('active');
}