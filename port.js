
$(function() {

    $(window).on('wheel', function(e) {
    
        var delta = e.originalEvent.deltaY;
    
        if (delta > 0) $(".skill-list").css({"bottom": 35+"vw","opacity":0, transition: "1s ease-out"}); //skills move up when you scroll down
        else $(".skill-list").css({"bottom": (18+"vw"), "opacity":1, transition: "1s ease-out",}); //skills come back down when you scroll up
    });
    });


// $(function() {

//     $(window).on('wheel', function(e) {
    
//         var delta = e.originalEvent.deltaY;
    
//         if (delta > 0) console.log("meow");
//         // else $('body').text('up');
//     });
//     });