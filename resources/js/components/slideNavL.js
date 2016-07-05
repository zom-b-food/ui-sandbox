jQuery(document).ready(function ($) {

    var fixedNav = $('.am-fixed-nav'),
        fixedNavTopPosition = fixedNav.offset().top,
        taglineOffesetTop = $('#am-fixed').offset().top + $('#am-fixed').height() + parseInt($('#am-fixed').css('paddingTop').replace('px', '')),
        contentSections = $('.am-section');

    $(window).on('scroll', function () {
        //on desktop - assign a position fixed to logo and action button and move them outside the viewport
        ( $(window).scrollTop() > taglineOffesetTop ) ? $('#am-logo, .am-btn').addClass('is-hidden') : $('#am-logo, .am-btn').removeClass('is-hidden');

        //on desktop - fix fixed navigation on scrolling
        if ($(window).scrollTop() > fixedNavTopPosition) {
            //fix fixed navigation
            fixedNav.addClass('is-fixed');
            //push the .am-main-content giving it a top-margin
            $('.am-main-content').addClass('has-top-margin');
            //on Firefox CSS transition/animation fails when parent element changes position attribute
            //so we to change fixed navigation children's attributes after having changed its position value
            setTimeout(function () {
                fixedNav.addClass('animate-children');
                $('#am-logo').addClass('slide-in');
                $('.am-btn').addClass('slide-in');
            }, 50);
        } else {
            fixedNav.removeClass('is-fixed');
            $('.am-main-content').removeClass('has-top-margin');
            setTimeout(function () {
                fixedNav.removeClass('animate-children');
                $('#am-logo').removeClass('slide-in');
                $('.am-btn').removeClass('slide-in');
            }, 50);
        }

    });

});


(function ($) {
    $(document).ready(function () {

        $('#navigation1').clone().prependTo('body').addClass('mobile-navigation1').removeAttr('id');
        $('div.mobile-navigation1').prepend('<span class="close">Close</span>');

        $('#toggle-menu1').bind('click touch', function () {
            if ($('div.mobile-navigation1').hasClass('open')) {
                $('div.mobile-navigation1').animate({width: "0px"}, 300).removeClass('open');
                $('#container1').animate({left: "0px"}, 300);
            } else {
                $('div.mobile-navigation1').animate({width: "215px"}, 300).addClass('open');
                $('#container1').animate({left: "215px"}, 300);
            }
        });

        $('div.mobile-navigation1 span.close').bind('click touch', function () {
            $('div.mobile-navigation1').animate({width: "0px"}, 300).removeClass('open');
            $('#container1').animate({left: "0px"}, 300);
        });


    });


})(jQuery);