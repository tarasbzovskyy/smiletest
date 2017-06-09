(function($){
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

    function collapser(collapse,count,show) {
        var button = collapse.siblings('.collapse-block'),
            collapseBlock = button.parent().find(collapse),
            hide = show,
            visiblePart = 0,
            totalHeight = 0;

        hide = true;
        collapseBlock.css('overflow','hidden');

        if (show == true) {
            collapseBlock.addClass('collapsed');
        } else if (show == 'undefined' || show == 0) {
            hide = true;
        } else {
            hide = false;
        }

        var lookingFor = collapseBlock.find('> *');

        for (var i = 0; i < lookingFor.length; i ++) {
            var elementHeight = parseFloat(lookingFor.css('height'));
            totalHeight = totalHeight + elementHeight;
            if (i < count) {
                visiblePart = elementHeight*count;
            }
        }
        if (hide === true) {
            collapseBlock.css('height', visiblePart + 'px');
        } else {
            button.addClass('rotate')
        }

        button.on('click', function(){
            var that = $(this).parent().find(collapse);
            if (that.hasClass('collapsed') ) {
                $(this).addClass('rotate');
                that.stop(false,false).animate({'height':totalHeight},700).removeClass('collapsed');
            } else {
                that.stop(false,false).animate({'height':visiblePart},700).addClass('collapsed');
                $(this).removeClass('rotate');
            }
        })
    }

    $( document ).ready(function() {

        $(".product-tabs .tab-pane").addClass('active');
    }); //end ready


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

        productSlider($(".product-slider .slides"));

        collapser($('.character'),5,true);
        if ($('#tab2').hasClass('active')) {
            collapser($('#tab2 .description'),2,true);
        }
        if ($('#tab3').hasClass('active')) {
            collapser($('#tab3 .feedbacks-blocks'),3,true);
        }

    }); //end load

})(jQuery);

