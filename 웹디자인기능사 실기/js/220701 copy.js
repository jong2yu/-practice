$(document).ready(function(){

  $('.sub').hide();

  $('.main').mouseover(function(){
    $('.sub').stop().slideDown(300);
  }).mouseout(function(){
    $('.sub').stop().slideUp(300);
  });


  setInterval(slide, 3000);

  let slide_up = 1;

  function slide() {
    $(".slide a").animate({
      top: -306 * slide_up
    })

    if (slide_up == 2) {
      slide_up = 0;
    } else {
      slide_up++;
    }
  }






});

