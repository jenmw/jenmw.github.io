$(document).ready(function(){

    $(".dropbtn").on("click",function(){
        document.getElementById("myDropdown").classList.toggle("show");
    })
    
      
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

    $(".dropdown-item").on("click",function(){
      $(".filter-all").hide();
      $(".filter-"+(this.innerHTML.trim().replaceAll(" ","").replaceAll("/","").toLowerCase())).show();
      $(".dropbtn").html("Filter: "+ this.innerHTML);
    })

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