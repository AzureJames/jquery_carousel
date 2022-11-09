$(document).ready(function() {

    if($(".carousel-container").scrollLeft() == 0){ $(".left-button").addClass("no-display"); }

    $(".carousel button").blur( (e) => {
        let bg = $(e.target).css("background-color"); 
        bg = "lightcyan" ? $(e.target).css("background-color", "lightblue") : $(e.target).css("background-color", "lightcyan");
    } );
    
    let currentLeft;
    let carouselWidth = 600;
    let amtOfImgs = 4;

    $(".left-button").click( (e) => {
        currentLeft = $(".carousel-container").scrollLeft();
        if (currentLeft % carouselWidth === 0) {
            $(".carousel-container").animate({
                scrollLeft: currentLeft - carouselWidth,
            }, 400);
            if($(".carousel-container").scrollLeft() == 0){ $(".left-button").addClass("no-display"); }
            else{$(".left-button").show(); $(".right-button").removeClass("no-display");}
            $(e.target).css("background-color", "lightcyan");
        }
    });
    $(".right-button").click( (e) => {
        currentLeft = $(".carousel-container").scrollLeft();
        if (currentLeft % carouselWidth === 0) {
            $(".carousel-container").animate({
                scrollLeft: currentLeft + carouselWidth,
            }, 400);
            if($(".carousel-container").scrollLeft() == (amtOfImgs-1)*carouselWidth){ $(".right-button").addClass("no-display"); }
            else{$(".right-button").show(); $(".left-button").removeClass("no-display")}
            $(e.target).css("background-color", "lightcyan");
        }
    });


// toggleClass
// scrollLeft carousel


// .text()  get/set 
// .width


// .toggle (display/hide)  
// .fadein .fadeout
// .animate


// .submit
// .mouseover
// .hover .click()  
// $( "p" ).blur();

// some sorta custom function 

})
