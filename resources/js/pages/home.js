/* Load DIV2 After Scrollbar Is Moved 100px */

$(window).scroll(function () {

    if ($(window).scrollTop() > 360) {

        loadDiv2();

        /* calls loadDiv2 Function below */

    }

});

/* the loadDiv2 function */

function loadDiv2() {

    $('.fade2').fadeIn('slow', function () {

        $(this).fadeTo("slow", 1);

    });

}

/* Load DIV3 When Scrollbar is Near the Bottom of the Page */

$(window).scroll(function () {

    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 1000) {

        loadDiv3();

        /* calls loadDiv3 Function below */

    }

});

/* the loadDiv3 function */

function loadDiv3() {

    $('.fade3').fadeIn('slow', function () {

        $(this).fadeTo("slow", 1);

    });

}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
        document.getElementById('text1').style.background = '#ccffcc';
        document.getElementById('emailError').style.display = "none";
        return true;
    }
    else {
        document.getElementById('text1').style.background = '#e35152';
        document.getElementById('emailError').style.display = "block";
        return false;
    }
}


$('#submitBtn').prop('disabled', true);
$('#submitBtn').addClass('disabled');
$('.required').change(function () {
    inspectAllInputFields();
});


function inspectAllInputFields() {
    var count = 0;
    $('.required').each(function (i) {
        if ($(this).val() === '') {
            //show a warning?
            count++;
        }
        if (count == 0) {
            $('#submitBtn').prop('disabled', false);
            $('#submitBtn').removeClass('disabled');
        }
        else {
            $('#submitBtn').prop('disabled', true);
            $('#submitBtn').addClass('disabled');
        }

    });
}


$(document).ready(function () {

    $("#commentForm1").validate();

    /*$('#bayJob').delay(1000).fadeIn(2500);

     $('#bayJob').delay(60000).fadeOut(2500);*/


});

