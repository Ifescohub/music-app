import {newRelease} from "./data.js";
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';




const navToggle = document.querySelector(".mobile-nav-toggle");
const menuList = document.querySelector("nav");

//Formatting Menu bar 
navToggle.addEventListener("click", ()=>{
    menuList.toggleAttribute("data-opened");
    navToggle.toggleAttribute("data-opened");
})

// menuList.addEventListener("click", ()=>{
//     menu.classList.remove("active");
//     menuBar.classList.remove("active")
// })

  const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    keyboard: {
      enabled: true,
    }
  });



//    function arr () {

//     'use strict';
  
//     // breakpoint where swiper will be destroyed
//     // and switches to a dual-column layout
//     const breakpoint = window.matchMedia( '(min-width: 37em)' );
  
//     // keep track of swiper instances to destroy later
//     let mySwiper;
  
  
//     const breakpointChecker = function() {
  
//       // if larger viewport and multi-row layout needed
//       if ( breakpoint.matches === true ) {
  
//         // clean up old instances and inline styles when available
//       if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
  
//       // or/and do nothing
//       return;
  
//         // else if a small viewport and single column layout needed
//         } else if ( breakpoint.matches === false ) {
  
//           // fire small viewport version of swiper
//           return enableSwiper();
  
//         }
  
//     };
    

  
//     const enableSwiper = function() {
  
//       mySwiper = new Swiper ('.swiper-container', {
  
//         loop: true,
        
//         slidesPerView: 'auto',
  
//         centeredSlides: true,
  
//         a11y: true,
//         keyboardControl: true,
//         grabCursor: true,
  
//         // pagination
//         pagination: '.swiper-pagination',
//         paginationClickable: true,
  
//       });
  
//     };
  
//     // keep an eye on viewport size changes
//     breakpoint.addListener(breakpointChecker);
  
//     // kickstart
//     breakpointChecker();
  
  
  
//   }

// arr();












//   const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     slidesPerView: "auto",
//     spaceBetween: 10,
//     slidesPerGroup: 1,
//     loopFillGroupWithBlank: true,
    
//     breakpoints: {
//       660: {
//         spaceBetween: 30,
//       }
//     }
//   });







function renderNewRelease(){
    let release = "";
    
    newRelease.map(item =>{
        release += `
        <div class="swiper-slide">
            <img src="${item.image}" alt="Album Image">
            <p class="fs-200">${item.title}</p>
            <p class="fs-200 text-grey">${item.artist}</p>
        </div>
        `
    })

    document.querySelectorAll(".wrapper-2").forEach((wrapper)=>{
        wrapper.innerHTML = release;
    })
    
}

renderNewRelease();





    