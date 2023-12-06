const homeButton = document.querySelector('#home');
const jukeButton = document.querySelector('#jukebox');
const gameButton = document.querySelector('#game');
  
homeButton.style.cssText='font-weight:700; font-size:12px';

// const mouseOver = (event)=>{
//   removeEventListener('mouseover', mouseOver)
//   event.target.style.cssText='font-weight:700; font-size:12px';
// }

const mouseOut = (event)=>{
  if (event.target.id!==dest){
  event.target.style.cssText='font-weight:350; font-size:10px';
  }
}

const navItems = document.querySelectorAll('.navigation_item');
for (let i=0; i<3; i++) {
  navItems[i].addEventListener('click', (e)=>{
  let dest = e.target.id;
  for (let j=0; j<3; j++) {
    navItems[j].style.cssText = 'font-size:10px; font-weight:350';
    };
  e.target.style.cssText='font-weight:700; font-size:12px';
  const iframe = document.querySelector('iframe');
  const iframeUrl = "./"+dest+".html";
  iframe.src = iframeUrl;
});
}
