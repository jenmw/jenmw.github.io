$(document).ready(function(){

    $("a.footer-link").on("mouseenter",function(){
        $(this).find("path").css({fill:"#f08560"});
        $(this).css({"border-bottom":"none"});
    })
    $("a.footer-link").on("mouseleave",function(){
        $(this).find("path").css({fill:"#727272"});
    })

    //update port page header dynamically?
    var mainImages = [
        { 
            name : "eBay Mobile Redesign", 
            url : "../Assets/eBay/Mockup.png",
            description: "I’m very passionate about buying used clothes so I use the eBay app every day. I quite often come across frustrating experiences as a user myself, so I decided I could create a project around redesigning the app myself. This redesign task aims to gather data to identify pain points and create user stories to inform a new design that will solve those pain points and modernise the app with current UI and UX trends."
        },
        { 
            name : "Mathdominion Landing Page", 
            url : "../Assets/Mathdom/Mock-up-laptop-wide.png",
            description: "‘Mathdominion’ is a children’s game in the fantasy genre that reinforces mathematical operations with quick-fire questions. This project is inspired by a similar game that I collaborated on within an in-house design team, however in the interest of keeping the in-house project separate to my portfolio I have changed all names, rewritten copy, omitted logos, restructured layouts and recreated all assets in my own style."
        },
        { 
            name : "Logo for RHS Gold Medal Winning florist", 
            url : "../Assets/Enchanted/Mockup.png",
            description: "Hired to create a logo for an RHS Gold Medal winning wedding specialist in Pershore. It was a challenge to learn enough about floristry to capture the essence of the client, and I was really pleased with the result."
        }
    ]

    var thisPage = $("#port-page-head").data("id");
    var thisHeader = mainImages[thisPage].url;
    var thisProject = mainImages[thisPage].name;
    var thisDescription = mainImages[thisPage].description;

    $("#port-page-head").css({"background-image": "url(" + thisHeader + ")"});
    $("#port-page-title").find("h1").html(thisProject);
    $("#port-page-title").find("p").html(thisDescription);
    
})

