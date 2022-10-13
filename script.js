import {newRelease} from "./data.js";
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';




const navToggle = document.querySelector(".mobile-nav-toggle");
const menuList = document.querySelector("nav");

//Formatting Menu bar 
navToggle.addEventListener("click", ()=>{
    menuList.toggleAttribute("data-opened");
    navToggle.toggleAttribute("data-opened");
})

menu.addEventListener("click", ()=>{
    menu.classList.remove("active");
    menuBar.classList.remove("active")
})

  const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    keyboard: {
      enabled: true,
    },
  //   breakpoints: {
  //     835: {
  //       slidesPerView: 4
  //     },
  //     1300: {
  //       slidesPerView: 4
  //     }
  // }
  });









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

    document.querySelectorAll(".swiper-wrapper").forEach((wrapper)=>{
        wrapper.innerHTML = release;
    })
    
}

renderNewRelease();





    // const swiper = new Swiper('.mySwiper', {
    //   slidesPerView: 3,
    //   slidesPerColumn: 2,
    //   spaceBetween: 30,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    // });


{/* // let swiper = new Swiper(".swiper", {
//         slidesPerView: 3,
//         spaceBetween: 30,
//         freeMode: true,
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//       }); */}


// FORMATTING SLIDER 
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   slidesPerView: 5,
//   spaceBetween: 30,
//   slidesPerGroup: 5,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   }
// //   breakpoints: {
// //     600: {
// //       slidesPerView: 2,
// //     },
// //     960: {
// //       slidesPerView: 3
// //     },
// //     1300: {
// //       slidesPerView: 4
// //     }
// //   }
// });