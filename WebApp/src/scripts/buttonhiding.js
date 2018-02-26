$(document).ready(function() {
    let count = 0;
    $('#hide').fadeOut();
    $('#button').click(function() {
        if (count < 1) {
            $('#hide').toggle();
            count += 1;
        }

    });
});