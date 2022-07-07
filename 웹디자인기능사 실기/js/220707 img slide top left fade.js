$(document).ready(function(){

  setInterval(function(){
    $(".slide.top .wrap").animate({marginTop:"-=360px"}, function(){
      $(".slide.top .wrap li:first").appendTo(".slide.top .wrap");
      $(".slide.top .wrap").css("margin-top","0px");
    });
  }, 3000);

  setInterval(function(){
    $(".slide.left .wrap").animate({marginLeft:"-=640px"}, function(){
      $(".slide.left .wrap li:first").appendTo(".slide.left .wrap");
      $(".slide.left .wrap").css("margin-left", "0px");
    });
  }, 3000);

  $(".slide.fade div:gt(0)").hide();
  setInterval(function(){
    $(".slide.fade div:first-child").fadeOut(1000)
    .next(".slide.fade div").fadeIn(1000)
    .end().appendTo(".slide.fade");
  }, 3000);

});