$(document).ready(function(){

  $("header .menu .sub").hide();
  $("header .menu .main").mouseover(function(){
    $("header .menu .sub").stop().slideDown(300)
  }).mouseout(function(){
    $("header .menu .sub").stop().slideUp(300)
  });

  $(".slide a:gt(0)").hide();
  setInterval(function(){
    $(".slide a:first").fadeOut(1000)
    .next(".slide a").fadeIn(1000)
    .end().appendTo(".slide")
  },3000)

  $("#modal").hide();
  $(".notice a:first").click(function(){
    $("#modal").show();
  });
  $("#modal button").click(function(){
    $("#modal").hide();
  });

});