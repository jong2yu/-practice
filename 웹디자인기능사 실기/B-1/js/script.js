$(document).ready(function(){

  $("header .menu .sub").hide();
  $("header .menu .main").mouseover(function(){
    $("header .menu .sub").stop().slideDown(300)
  }).mouseout(function(){
    $("header .menu .sub").stop().slideUp(300)
  });

  setInterval(function(){
    $(".slide .wrap").animate({marginLeft:"-=100%"}, function(){
      $(".slide .wrap li:first").appendTo(".slide .wrap")
      $(".slide .wrap").css("margin-left","0px")
    });
  },3000);

  $(".tab .title").click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active")
  });
  
  $("#modal").hide();
  $(".notice a:first").click(function(){
    $("#modal").show();
  });
  $("#modal button").click(function(){
    $("#modal").hide();
  });

});
