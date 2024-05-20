$(document).ready(function(){

  let winWidth = $(window).width();
  var cachedWidth = $(window).width();
  $(window).resize(function(){
    var newWidth = $(window).width();
    if(newWidth !== cachedWidth){
      var delay = 300;
      var re_timer = null;
      $(window).on('resize', function(){
        clearTimeout(re_timer);
        re_timer = setTimeout(function(){
          document.location.reload();
        }, 
          delay);
      });
      cachedWidth = newWidth;
    }
  });

    if(winWidth < 834){
      mobile()
    }else if(winWidth < 1280){
      tablet()
    }else{
      pc()
    }



    // common()

    //모바일시작
    function mobile(){
      $(".menuBtn").on("click",function(){
          $(".nav").stop().animate({"right":0})
      })
      $(".close").on("click",function(){
          $(".nav").stop().animate({"right":"-100%"})
      })
      var swiper = new Swiper(".news .mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      }); 
    }//모바일 끝

    //태블릿 시작
    function tablet(){
        $(".menuBtn").on("click",function(){
          $(".nav").stop().animate({"top":0})
      })
      $(".close").on("click",function(){
          $(".nav").stop().animate({"top":"-100%"})
      })
      var swiper = new Swiper(".news .mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 2,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        
      });
    }//태블릿 끝

    //pc시작
    function pc(){
      var swiper = new Swiper(".news .mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });      
    }//pc끝

    //메인이미지 하나만 나오게하는
    var swiper = new Swiper("main .mySwiper", {
      slidesPerView: 1,
    }); 

    //푸터 언어설정 시작
    $(".f_lang").on("click",function(){
      $(this).toggleClass('on')
    })
    $(".l_pop a").on("click",function(e){
      e.preventDefault();
      
      let txt = $(this).text();
      $(".seiect").text(txt);
    });
    //푸터 언어설정 끝
    
})//document끝