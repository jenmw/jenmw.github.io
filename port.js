
$(function() {

    $(window).on('wheel', function(e) {
    
        var delta = e.originalEvent.deltaY;

        if (delta > 0) $(".skill-list").children().css({"padding-bottom":2+"vw",transition: "1s ease-out"}); //skills move up when you scroll down
        else $(".skill-list").children().css({"padding-bottom":0,transition: "1s ease-out"}); //skills come back down when you scroll up
    
        if (delta > 0) $(".skill-list").css({"bottom": 35+"vw","opacity":0,transition: "1s ease-out"}); //skills move up when you scroll down
        else $(".skill-list").css({"bottom": (18+"vw"), "opacity":1, transition: "1s ease-out"}); //skills come back down when you scroll up
    });
});

$(document).ready(function(){

    $(".carousel-caption").hide();
    $(".port-nav").on("mouseenter",function(){
        $(this).find("p").fadeIn(200);
    })
    $(".port-nav").on("mouseleave",function(){
        $(this).find("p").hide();
    })

    $("a.footer-link").on("mouseenter",function(){
        $(this).find("path").css({fill:"#f08560"});
        $(this).css({"border-bottom":"none"});
    })
    $("a.footer-link").on("mouseleave",function(){
        $(this).find("path").css({fill:"#1f2f46"});
    })

})

