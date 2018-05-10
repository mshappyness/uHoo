$(document).ready(function(){
    $('.modal').modal();
    $('ul.tabs').tabs();
    // $('.tooltipped').tooltip({delay: 50, enterDelay: 350, margin: 35});

    // slider for product details on homepage
    $('#product_slider').carousel({fullWidth: true,indicators: true});

    // slider for testimonial on homepage
    $('#testimonial_slider').carousel({fullWidth: true,indicators: true});

     // move next carousel
   $('.moveNextCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      var slider = getSliderId($(this));
      
      $('#'+slider).carousel('next');
       // 
       setTimeout(function(){
        moveToSlider(getActiveSliderIndex());
       }, 200);
   });

   // move prev carousel
   $('.movePrevCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      var slider = getSliderId($(this));

      $('#'+slider).carousel('prev');
       setTimeout(function(){
        moveToSlider(getActiveSliderIndex());
       }, 200);
   });

  // click on slider indicator
  $('#product_slider .indicator-item').click(function(e){
    // console.log($(this).index());
    moveToSlider($(this).index());

  });

  $('.play-video').click(function(){
    var url = $(this).attr('video-url');
    alert('play video '+url);
  });

});

function getSliderId(element){
  return $(element).parents('.carousel').attr('id');
}


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



