
(function($){
    $(window).load(function() {
        $(".product-photo-thumbs")
            .flexslider({
                animation: "fade",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 66,
                itemMargin: 5,
                asNavFor: '.product-photo'

            });
        $(".product-photo")
            .flexslider({
                animation: "fade",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: ".product-photo-thumbs"
            });

    });
})(jQuery);
