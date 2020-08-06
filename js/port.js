
//mouse move animation
$(function() {

    $(window).on('wheel', function(e) {
    
        var delta = e.originalEvent.deltaY;

        if (delta > 0) $(".skill-list").find("h4").css({"padding-bottom":10+"%",transition: "1s ease-out"}); //skills move up when you scroll down
        else $(".skill-list").find("h4").css({"padding-bottom":0,transition: "1s ease-out"}); //skills come back down when you scroll up
    
        if (delta > 0) $(".skill-list").css({"bottom": 30+"vw","opacity":0,transition: "1s ease-out"}); //skills move up when you scroll down
        else $(".skill-list").css({"bottom": (14+"vw"), "opacity":1, transition: "1s ease-out"}); //skills come back down when you scroll up

        if (delta > 0) $(".jumbotron").find("h2").css({"bottom": 30+"vw","opacity":0,transition: "1s ease-out"}); //hello moves up when you scroll down
        else $(".jumbotron").find("h2").css({"bottom": (26+"vh"), "opacity":1, transition: "1s ease-out"}); //hello come back down when you scroll up

        if (delta > 0) $(".jumbotron").find("h3").css({"bottom": 28+"vw","opacity":0,transition: "1s ease-out"}); //my name is moves up when you scroll down
        else $(".jumbotron").find("h3").css({"bottom": (20+"vh"), "opacity":1, transition: "1s ease-out"}); //my name is come back down when you scroll up
    });
});

$(document).ready(function(){

    if(window.matchMedia("(max-width: 767px)").matches){  //if on mobile
        $(".skill-list").hide();
        $(".avatar").css({"max-width":"50%","margin-left":"25%"});
        // $(".mobile-center").css({"display":"flex","flex-direction":"column","align-items":"center"})
        $(".mobile-center").find("p, h3").css({"text-align":"center"})

    }

    $(".carousel-caption").hide();
    $(".port-nav").on("mouseenter",function(){
        $(this).find("p").fadeIn(200);
    })
    $(".port-nav").on("mouseleave",function(){
        $(this).find("p").hide();
    })

    $("a.footer-link").on("mouseenter",function(){
        $(this).find("path").css({fill:"#FE5E41"});
        $(this).css({"border-bottom":"none"});
    })
    $("a.footer-link").on("mouseleave",function(){
        $(this).find("path").css({fill:"#727272"});
    })

    //confetti test
    var confettiElement = document.getElementById('testconfetti');
    var confettiSettings = { 
        target: confettiElement, 
        animate: true,
        max: 100,
        // size: 1,
        props: [
            "circle", "square",
            // { "type":"svg", "src":"Assets/wiggle.svg", "size":20 },
            // { "type":"svg", "src":"Assets/circle.svg", "size":10 }
        ],
        colors: [[28,124,84],[115,226,167],[255,255,255]],
        rotate: true,
    };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    
})

