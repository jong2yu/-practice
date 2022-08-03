$(document).ready(function(){

  $(".menu .sub").hide();
  $(".menu .main").mouseover(function(){
    $(this).find(".sub").stop().slideDown(300)
  }).mouseout(function(){
    $(this).find(".sub").stop().slideUp(300)
  });
  
  setInterval(function(){
    $(".slide .wrap").animate({marginLeft:"-=100%"}, function(){
      $(".slide .wrap li:first").appendTo(".slide .wrap")
      $(".slide .wrap").css("margin-left","0px")
    });
  },3000);

  $("#modal").hide();
  $(".notice li:first a").click(function(){
    $("#modal").show();
  });
  $("#modal button").click(function(){
    $("#modal").hide();
  });

});