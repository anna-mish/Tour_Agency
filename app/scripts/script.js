import $ from 'jquery';
import Swiper from 'swiper';

$( document ).ready(function() {
  var mainSwiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination', 
      clickable: true 
    },
    // slidesPerView: 2
  });
});
