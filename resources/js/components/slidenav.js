 $(function () {

            var fixedNav = $('.am-fixed-nav'),
                    fixedNavTopPosition = fixedNav.offset().top,
                    taglineOffesetTop = $('#am-fixed').offset().top + $('#am-fixed').height() + parseInt($('#am-fixed').css('paddingTop').replace('px', '')),
                    contentSections = $('.am-section');

            $(window).on('scroll', function () {
                //on desktop - assign a position fixed to logo and action button and move them outside the viewport
                ( $(window).scrollTop() > taglineOffesetTop ) ? $('#am-logo, .am-btn1, .am-btn2').addClass('is-hidden') : $('#am-logo, .am-btn1, .am-btn2').removeClass('is-hidden');

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
                        $('.am-btn1').addClass('slide-in');
                        $('.am-btn2').addClass('slide-in');
                    }, 50);
                } else {
                    fixedNav.removeClass('is-fixed');
                    $('.am-main-content').removeClass('has-top-margin');
                    setTimeout(function () {
                        fixedNav.removeClass('animate-children');
                        $('#am-logo').removeClass('slide-in');
                        $('.am-btn1').removeClass('slide-in');
                        $('.am-btn2').removeClass('slide-in');
                    }, 50);
                }

            });
        });


        $(window).bind("load", function () {
            $('#work-in-progress').fadeOut(900);
        });


        $image = $('img.true');
        width = $image.width();
        height = $image.height();

        $image.css({
            left: 0 - (width / 2),
            top: 0 - (height / 2)
        });


        $(function () {
            var current_page_URL = location.href;
            $("a.link1").each(function () {
                if ($(this).attr("href") !== "#") {
                    var target_URL = $(this).prop("href");
                    if (target_URL == current_page_URL) {
                        $('am-nav1 a').parents('li, ul').removeClass('link-active');
                        $(this).parent('li').addClass('link-active');
                        return false;
                    }
                }
            });

            var current_page_URL = location.href;
            $("a.sidelink").each(function () {
                if ($(this).attr("href") !== "#") {
                    var target_URL = $(this).prop("href");
                    if (target_URL == current_page_URL) {
                        $('am-nav2 a').parents('li, ul').removeClass('sidelink-active');
                        $(this).parent('li').addClass('sidelink-active');
                        return false;
                    }
                }
            });


        });

