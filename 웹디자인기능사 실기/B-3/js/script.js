$(document).ready(function(){

  $(".menu .sub").hide();
  $(".menu .main").mouseover(function(){
    $(".menu .sub").stop().slideDown(300)
  }).mouseout(function(){
    $(".menu .sub").stop().slideUp(300)
  });

  setInterval(function(){
    $(".slide .wrap").animate({marginTop:"-=300px"}, function(){
      $(".slide .wrap li:first").appendTo(".slide .wrap");
      $(".slide .wrap").css("margin-top","0px");
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