$(document).ready(function(){

    $(".red").on("click",function(){
        $("#red").css('display','flex')
        $("#gray, #yellow").css('display','none')
    })
    $(".gray").on("click",function(){
        $("#gray").css('display','flex')
        $("#red, #yellow").css('display','none')
    })
    $(".yellow").on("click",function(){
        $("#yellow").css('display','flex')
        $("#gray, #red").css('display','none')
    })

    
    document.querySelectorAll('ul').forEach(function(ulElement) {
        var allLiElements = ulElement.querySelectorAll('li');
        
        if (allLiElements.length > 0) {
            
            if (window.innerWidth > 800) {
                allLiElements[0].style.color = "black";
            }
        }

        allLiElements.forEach(function(liElement) {
            liElement.addEventListener("click", function() {
                
                if (window.innerWidth > 800) {
                    this.style.color = "black";
                    allLiElements.forEach(function(otherLiElement) {
                        if (otherLiElement !== liElement) {
                            otherLiElement.style.color = "lightgray";
                        }
                    });
                }
            });
        });
    });
});
