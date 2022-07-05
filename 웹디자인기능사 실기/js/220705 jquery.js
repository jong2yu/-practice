$(document).ready(function(){

  // Sub Menu sbm
  $(".sbm .menu .sub").hide();

  $(".sbm .menu .main").mouseover(function(){
    $(".sbm .menu .sub").stop().slideDown(300)
  }).mouseout(function(){
    $(".sbm .menu .sub").stop().slideUp(300)
  });


  // Img Slide Top ist
  setInterval(function(){
    $(".box.ist .slide .wrap").animate({marginTop:"-=360px"}, function(){
      $(".box.ist .slide .wrap img:first").appendTo(".box.ist .slide .wrap");
      $(".box.ist .slide .wrap").css("margin-top","0px");
    }, 3000);
  });

// Img Slide Left isl
// Img Slide Fade isf
// Tab tbm
// Modal mdp

});

