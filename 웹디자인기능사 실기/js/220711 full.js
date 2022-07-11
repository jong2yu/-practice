$(document).ready(function(){

  $(".menu .sub").hide();
  $(".menu .main").mouseover(function(){
    $(".menu .sub").stop().slideDown(300)
  }).mouseout(function(){
    $(".menu .sub").stop().slideUp(300)
  });

  setInterval(function(){
    $(".slide .wrap").animate({marginTop:"-=300px"}, function(){
      $(".slide .wrap li:first").appendTo(".slide .wrap")
      $(".slide .wrap").css("margin-top", "0px")
    });
  },3000);

  // $(".notice .menu a").click(function(){
  //   $("#modal").addClass("active")
  // });
  // $("#modal button").click(function(){
  //   $("#modal").removeClass("active")
  // });

  let modal = $("#modal");
  $(".notice .menu a").click(function(){
    modal.show();
  })
  $("#modal button").click(function(){
    modal.hide();
  })

  // $(".tab .title").click(function() {
  //   var idx = $(this).index();
  //   $(".tab .title").removeClass("active");
  //   $(".tab .title").eq(idx).addClass("active");
  //   $(".tab .wrap .menu").hide();
  //   $(".tab .wrap .menu").eq(idx).show();
  // })

  $(function(){
    $(".tab .title").click(function(){
        $(".tab .menu").parent().addClass("active").siblings().removeClass("active");
      return false;
    });
  });
});
