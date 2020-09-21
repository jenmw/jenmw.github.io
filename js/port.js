$(document).ready(function(){

    $("figcaption").hide(); //hide all captions on start

    //-----Show main pic captions on hover-------------------------
    $(".project-pic,figcaption").on("mouseenter", function(){
        $(this).parent().find(".caption-right").addClass("animated fadeInLeft").show()
    })
    $(".project-pic,figcaption").on("mouseleave", function(){
        $(this).parent().find(".caption-right").removeClass("animated fadeInLeft").hide()
    })
    $(".project-pic,figcaption").on("mouseenter", function(){
        $(this).parent().find(".caption-left").addClass("animated fadeInRight").show()
    })
    $(".project-pic,figcaption").on("mouseleave", function(){
        $(this).parent().find(".caption-left").removeClass("animated fadeInRight").hide()
    })
    // $("figcaption").on("mouseenter", function(){
    //     $(this).removeClass("animated").show()
    // })
    // $("figcaption").on("mouseleave", function(){
    //     $(this).hide()
    // })
    //end--------------------------------------------------------------

    //----Jump to section-------------------------------------------
    $("h4").on("click",function(){
        var scrollPoint = this.innerHTML.replaceAll(" ","").toLowerCase();
        // console.log(this.innerHTML.replaceAll(" ","").toLowerCase());
        $('html, body').animate({
            scrollTop: $("#"+scrollPoint).offset().top
        }, 1000);
    })
    
    //end-----------------------------------------------------------

    //-----Footer SVG hyperlink colour on hover---------------------
    $("a.footer-link").on("mouseenter",function(){
        $(this).find("path").css({fill:"#bf1938"}); //turn it pink
        $(this).css({"border-bottom":"none"});
    })
    $("a.footer-link").on("mouseleave",function(){
        $(this).find("path").css({fill:"#727272"});
    })
    //end--------------------------------------------------------------
})