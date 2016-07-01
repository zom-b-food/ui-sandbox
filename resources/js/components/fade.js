/* jQuery Example: Display Hidden Div Based on Scrollbar Position and Page Load */
/* Created by: techNerdia.com */

$(document).ready(function () {
    $.ajaxSetup({cache: false});

    /* Load header When Page Loads */
    $(window).load(function () {
        $('header').fadeIn('slow', function () {
            $(this).fadeTo("slow", 1);
        });
    });


    /* Load DIV After Scrollbar Is Moved 100px */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            loadDiv1();
            /* calls loadDiv2 Function below */
        }
    });

    function loadDiv1() {
        $('.div1').fadeIn('slow', function () {
            $(this).fadeTo("slow", 1);
        });
    }


    /* Load DIV When Scrollbar is Near the Bottom of the Page */
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 200) {
            loadDiv2();
            /* calls loadDiv3 Function below */
        }
    });

    function loadDiv2() {
        $('.div2').fadeIn('slow', function () {
            $(this).fadeTo("slow", 1);
        });
    }


    /* Load Div Once Scrollbar Reaches the Bottom of the Page */
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            loadDiv3();
            /* calls loadDiv4 Function below */
        }
    });

    function loadDiv3() {
        $('.div3').fadeIn('slow', function () {
            $(this).fadeTo("slow", 1);
        });
    }


});
/* Do Not Remove */