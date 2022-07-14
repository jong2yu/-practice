$(document).ready(function(){

  $(".menu .sub").hide();
  $(".menu .main").mouseover(function(){
    $(".menu .sub").stop().slideDown(300)
  }).mouseout(function(){
    $(".menu .sub").stop().slideUp(300)
  });

  $(".slide div:gt(0)").hide();
  setInterval(function(){
    $(".slide div:first").fadeOut(1000)
    .next(".slide div").fadeIn(1000)
    .end().appendTo(".slide");
  },3000);

  $(".tab .title").click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active");
  });

});