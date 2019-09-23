import $ from 'jquery';
import Swiper from 'swiper';

$( document ).ready(function() {
  var mainSwiper = new Swiper('#main-slider', {
    loop: true,
    pagination: {
      el: '#main-pagination', 
      clickable: true 
    }, 
  });

  var tabsSwiper = new Swiper('#tabs-slider', {
    // slidesPerView: 3,
    breakpoints: {
      // when window width is >=  
      767: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      // when window width is >=  
      1140: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >=  
      1600: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    } ,
    centeredSlides: true,
    // spaceBetween: 60,
    loop: true, 
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    
  
  });
  // $('.swiper-button-next, .swiper-button-prev').empty();
  
});


const onPageLoaded = () => { 
  function initTabs(mainContainer, tabsContainer) {
      const CONTENT_ITEM = `${mainContainer} >  div`;
      const CONTENT_ITEM_FIRST = `${mainContainer} >  div:first`;
      const LIST_LINK = `${tabsContainer} a`;
      const LIST_ITEM = `${tabsContainer} li`;
      const LIST_ITEM_FIRST = `${tabsContainer} li:first`;

      $(CONTENT_ITEM).hide();// Скрываем содержание
      $(LIST_ITEM_FIRST).addClass('current'); // Активируем первую закладку
      $(CONTENT_ITEM_FIRST).fadeIn(); // Выводим содержание

      $(LIST_LINK).on('click', function(e) {
          e.preventDefault();
          $(CONTENT_ITEM).hide(); //Скрыть все сожержание
          $(LIST_ITEM).removeClass('current'); //Сброс ID
          $(this).parent().addClass('current'); // Активируем закладку
          $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
      });

      $(LIST_ITEM_FIRST).click();
  };

  initTabs('#content','#tabs');
  // initTabs('#user-content','#user-tabs');


};


$(document).ready(onPageLoaded);