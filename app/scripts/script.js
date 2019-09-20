import './libs/jquery'; 
import './libs/swiper/swiper'; 

$( document ).ready(function() { 
  var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
    },
  });
});
