$(document).ready(function(){
    $('.modal').modal();
    $('.tooltipped').tooltip({enterDelay: 350, margin: 35});
    $('.slider').slider();
    $('.carousel.carousel-slider').carousel({fullWidth: true,indicators: true});
     // move next carousel
   $('.moveNextCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('next');
       $('.slider').slider('next');
   });

   // move prev carousel
   $('.movePrevCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('prev');
       $('.slider').slider('prev');
   });
  });

