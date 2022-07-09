$(document).ready(function(){

  $(".notice a").click(function(){
    $("#modal").addClass("active");
  });
  $("#modal button").click(function(){
    $("#modal").removeClass("active");
  });

  $(".tabmenu h4").click(function() {
    var idx = $(this).index();
    $(".tabmenu h4").removeClass("active");
    $(".tabmenu h4").eq(idx).addClass("active");
    $(".tabmenu > li").hide();
    $(".tabmenu > li").eq(idx).show();
  })

});