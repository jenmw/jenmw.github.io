$(document).ready(function(){

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
        $(this).find("path").css({fill:"#F35353"}); //turn it pink
        $(this).css({"border-bottom":"none"});
    })
    $("a.footer-link").on("mouseleave",function(){
        $(this).find("path").css({fill:"#727272"});
    })
    //end--------------------------------------------------------------
})