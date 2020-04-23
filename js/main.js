

//for menu fixed when scrolling
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 130){
        $(".menu-head").addClass("menu-fixed");
    }else{
        $(".menu-head").removeClass("menu-fixed");
    }
});



$(document).ready(function(){
    $('.venobox').venobox(); 
});



