
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

        function productSlider(target){
            var slider = target;
            slider.owlCarousel({
                items:5,
                margin:10,
                nav:false,
                touchDrag:true,
                dots:false,
                // navSpeed:1000,
                responsiveClass:true,
                // responsiveRefreshRate:1000,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    600:{
                        items:3,
                        nav:false
                    },
                    1000:{
                        items:5,
                        nav:true,
                        loop:false
                    }
                }
            });

            $('.slider-nav .next').on('click',function(){
                $(slider).trigger('next.owl.carousel');
            });
            $('.slider-nav .prev').on('click',function(){
                $(slider).trigger('prev.owl.carousel');
            })
        }

        productSlider($(".product-slider .slides"));

    });



})(jQuery);
