$(document).ready(function(){

  $(".menu .sub").hide();
  $(".menu .main").mouseover(function(){
    $(".menu .sub").stop().slideDown(300)
  }).mouseout(function(){
    $(".menu .sub").stop().slideUp(300)
  });

  $(".slide a:gt(0)").hide();
  setInterval(function(){
    $(".slide a:first").fadeOut(1000)
    .next(".slide a").fadeIn(1000)
    .end().appendTo(".slide")
  },3000);

  $(".tab .title").click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active")
  });

  $("#modal").hide();
  $(".notice a").click(function(){
    $("#modal").show()
  });
  $("#modal button").click(function(){
    $("#modal").hide()
  });

});