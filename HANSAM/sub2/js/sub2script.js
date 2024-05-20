$(document).ready(function(){


    //자동 새로고침 시작
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
    //자동새로고침 끝



    //화면 크기에 따라 변화 시작
    if(winWidth < 834){
        mobile()
    }else if(winWidth < 1280){
        tablet()
    }
    //화면 크기에 따라 변화 끝



    //모바일시작
    function mobile(){
      $(".menuBtn").on("click",function(){
          $(".nav").stop().animate({"right":0})
      })
      $(".close").on("click",function(){
          $(".nav").stop().animate({"right":"-100%"})
      })
    }//모바일 끝




    //태블릿 시작
    function tablet(){
        $(".menuBtn").on("click",function(){
          $(".nav").stop().animate({"top":0})
      })
      $(".close").on("click",function(){
          $(".nav").stop().animate({"top":"-100%"})
      })
    }//태블릿 끝



    //pc시작
    // function pc(){

    // };
    //pc끝


    //푸터 언어설정 시작
      $(".f_lang").on("click",function(){
        $(this).toggleClass('on')
      })
      $(".l_pop a").on("click",function(e){
        e.preventDefault();
        
        let txt = $(this).text();
        $(".seiect").text(txt);
      })
    //푸터 언어설정 끝
})