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
    }else{
      pc()
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
    function pc(){
    //gsap 시작
    const ani5 = gsap.timeline();
    ani5.to("section .sectionright",{ yPercent : -100})
         
    ScrollTrigger.create({
        animation: ani5,
        trigger: "section",//고정시킬 클래스
        start: "top 75px",//스크롤트래그(section) 스크롤위치
        end: "2000px bottom",
        scrub: true,
        pin: true, 
        anticipatePin: 1,
        // markers: true
    });
    //gsap 끝
    };
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