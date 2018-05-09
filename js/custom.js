$(document).ready(function(){
    $('.modal').modal();
    // $('.tooltipped').tooltip({delay: 50, enterDelay: 350, margin: 35});

    $('.carousel.carousel-slider').carousel({fullWidth: true,indicators: true});

     // move next carousel
   $('.moveNextCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('next');
       // 
       setTimeout(function(){
        moveToSlider(getActiveSliderIndex());
       }, 200);
   });

   // move prev carousel
   $('.movePrevCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('prev');
       setTimeout(function(){
        moveToSlider(getActiveSliderIndex());
       }, 200);
   });

  // click on slider indicator
  $('.indicator-item').click(function(e){
    // console.log($(this).index());
    moveToSlider($(this).index());

  });

  $('.play-video').click(function(){
    var url = $(this).attr('video-url');
    alert('play video '+url);
  });

});


function getActiveSliderIndex(){
    var indicator = $('.indicator-item.active').index();
    return indicator;
}


// temporary function for slider
function moveToSlider(index){
  $('.green-box .slider .slides li').fadeOut();

  var slide = index+1;
  $('.green-box .slider .slides li.slide-'+slide).fadeIn();
}



