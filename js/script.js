$(document).ready(function(){

    // $('a').on('click', function(event) {
    //     event.preventDefault(); // 클릭 이벤트의 기본 동작을 중지합니다.
    // });

    document.querySelector('.down').addEventListener('click', function() {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

/*manu*/
    $('.open').on('click',function(){
        $('.menu').stop().animate({'left':'0'},500);
    });
    
    $('.close').on('click',function(){
        $('.menu').stop().animate({'left':'-100vw'},500)
    });
/*menu끝*/

/*Projects*/
    $('.hansam').on('click', function() {
        $('.hsPage').stop().show();
        $('.nkPage, .icPage, .hnPage').hide();
    });
    
    $('.nike').on('click', function() {
        $('.nkPage').stop().show().css('display', 'flex');
        $('.hsPage, .icPage, .hnPage').hide();
    });
    
    $('.icon3D').on('click', function() {
        $('.icPage').stop().show().css('display', 'flex');
        $('.hsPage, .nkPage, .hnPage').hide();
    });

    $('.icPage>.imgesBox>img').on('click',function(){
        $('.bigImg').css('display','block')
    })
    $('.bigImg').on('click',function(){
        $('.bigImg').css('display','none')
    })
    
    $('.hana').on('click', function() {
        $('.hnPage').stop().show().css('display', 'flex');
        $('.hsPage, .nkPage, .icPage').hide();
    });

    $('.contents li').click(function() {
        // 이전에 선택된 요소에서 'selected' 클래스 제거
        $('.contents .selected').removeClass('selected');
        // 클릭된 요소에 'selected' 클래스 추가
        $(this).addClass('selected');
    });
/*Projects끝*/

/* End */

    $('.top').click(function(){
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });

/* End끝 */

$(".gnb>li").on("click",function(){
    var i = $(this).index();
    //브라우저에 높이값을 구해서 해당하는 박스의 위치찾기
    let ht =$(window).height();

    let nowTop = i*ht;

    $("html, body").stop().animate({"scrollTop" : nowTop},1000)
})
$('.gnb>li').on('click',function(){
    $('.menu').stop().animate({'left':'-100vw'},1000)
});

$("section").on("mousewheel", function(event, delta){
    if(delta > 0){
        let prev = $(this).prev().offset().top
        $("html, body").stop().animate({"scrollTop" : prev},500)
    }else if(delta < 0){
        let next = $(this).next().offset().top
        $("html, body").stop().animate({"scrollTop" : next},500)
    }
})



// 타이핑 효과 함수
function typeWriter(element, text, speed) {
    let i = 0;
    const typingInterval = setInterval(function() {
        // 글자 하나씩 추가
        $(element).text(text.substring(0, i));
        i++;
        // 모든 글자를 다 타이핑한 경우, 인터벌 종료
        if (i > text.length) {
            clearInterval(typingInterval);
        }
    }, speed); // speed 값을 조정하여 타이핑 속도를 변경할 수 있습니다.
}

// 페이지 로드 후 실행
$(".typing-text").each(function(index) {
    const text = $(this).text(); // 요소의 텍스트 내용 가져오기
    const typingSpeed = Math.max(50, 100 - text.length); // 글자 수에 따라 속도 조절 (최소 50ms 이상)
    $(this).empty(); // 요소 내용 비우기
    setTimeout(() => {
        typeWriter(this, text, typingSpeed); // 타이핑 효과 적용 (글자 수에 따라 속도 자동 조절)
    }, index * 1000); // 각 요소마다 2초씩 차이를 두고 시작
});



});
