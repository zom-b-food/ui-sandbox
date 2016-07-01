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

