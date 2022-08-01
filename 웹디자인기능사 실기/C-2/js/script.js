$(document).ready(function(){

  $(".menu .sub").hide();
  $(".menu .main").mouseover(function(){
    $(this).find(".sub").stop().slideDown(300)
  }).mouseout(function(){
    $(this).find(".sub").stop().slideUp(300)
  });

  $(".slide div:gt(0)").hide();
  setInterval(function(){
    $(".slide div:first").fadeOut(1000)
    .next(".slide div").fadeIn(1000)
    .end().appendTo(".slide")
  },3000);

  $("#modal").hide();
  $(".notice li:first a").click(function(){
    $("#modal").show();
  });
  $("#modal button").click(function(){
    $("#modal").hide();
  });

});