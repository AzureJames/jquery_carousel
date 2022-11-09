$(document).ready(function() {

    if($(".carousel-container").scrollLeft() == 0){ $(".left-button").addClass("no-display"); }

    $(".carousel button").blur( (e) => {
        let bg = $(e.target).css("background-color"); 
        bg = "lightcyan" ? $(e.target).css("background-color", "lightblue") : $(e.target).css("background-color", "lightcyan");
    } );
    
    let currentLeft;
    let carouselWidth = 600;
    let amtOfImgs = 4;

        function scrollToLeft() {
            currentLeft = $(".carousel-container").scrollLeft();
            if (currentLeft % carouselWidth === 0) {
                $(".carousel-container").animate({
                    scrollLeft: currentLeft - carouselWidth,
                }, 400);
                if($(".carousel-container").scrollLeft() == 0){ $(".left-button").addClass("no-display"); }
                else{$(".left-button").show(); $(".right-button").removeClass("no-display");}
                $(".left-button").css("background-color", "lightcyan");
            }
        }

        function scrollToRight() {
            currentLeft = $(".carousel-container").scrollLeft();
            if (currentLeft % carouselWidth === 0) {
                $(".carousel-container").animate({
                    scrollLeft: currentLeft + carouselWidth,
                }, 400);
                if($(".carousel-container").scrollLeft() == (amtOfImgs-1)*carouselWidth){ $(".right-button").addClass("no-display"); }
                else{$(".right-button").show(); $(".left-button").removeClass("no-display")}
                $(".right-button").css("background-color", "lightcyan");
            }
        }


    $(".left-button").on("click", scrollToLeft);
    $(".right-button").on("click", scrollToRight);
    $(document).keydown(function(e) {
        if(e.keyCode == 37){
            scrollToLeft();
        }
        if(e.keyCode == 39){
            scrollToRight();
        }
    });
})
