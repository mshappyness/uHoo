var j = jQuery.noConflict();

j(document).ready(function(){
    j('.modal').modal();
    j('ul.tabs').tabs();
    // j('.tooltipped').tooltip({delay: 50, enterDelay: 350, margin: 35});

    // slider for product details on homepage
    j('#product_slider').carousel({fullWidth: true,indicators: true});

    // slider for testimonial on homepage
    j('#testimonial_slider').carousel({fullWidth: true,indicators: true});

     // move next carousel
   j('.moveNextCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      var slider = getSliderId(j(this));
      
      j('#'+slider).carousel('next');
       // 
       setTimeout(function(){
        moveToSlider(getActiveSliderIndex());
       }, 200);
   });

   // move prev carousel
   j('.movePrevCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      var slider = getSliderId(j(this));

      j('#'+slider).carousel('prev');
       setTimeout(function(){
        moveToSlider(getActiveSliderIndex());
       }, 200);
   });

  // click on slider indicator
  j('#product_slider .indicator-item').click(function(e){
    // console.log(j(this).index());
    moveToSlider(j(this).index());

  });

  j('.play-video').click(function(){
    var url = j(this).attr('video-url');
    alert('play video '+url);
  });

});

function getSliderId(element){
  return j(element).parents('.carousel').attr('id');
}


function getActiveSliderIndex(){
    var indicator = j('.indicator-item.active').index();
    return indicator;
}


// temporary function for slider
function moveToSlider(index){
  j('.green-box .slider .slides li').fadeOut();

  var slide = index+1;
  j('.green-box .slider .slides li.slide-'+slide).fadeIn();
}



