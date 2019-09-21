import $ from './libs/jquery'; 
import Swiper from 'swiper';

$( document ).ready(function() { 
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
});

// $('.swiper-object .swiper-container').each(function(index, value) {
 
//   var mySwiper = new Swiper(value, {
//     autoplay: {
//       delay: 5000,
//     },
//     navigation: {
//       nextEl: value.nextElementSibling.nextElementSibling,
//       prevEl: value.nextElementSibling,
//     },
//     pagination: {
//       el: value.nextElementSibling.nextElementSibling.nextElementSibling,
//       clickable: true,
//     },
//     slidesPerView: 'auto',
//   });

// });

