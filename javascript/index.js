$(document).ready(function () {
    $('#dropDown').css('color', '#cf1516');
    $('#dropDown').change(function () {
        var current = $('#dropDown').val();
        if (current != 'null') {
            $('#dropDown').css('color', 'black');
        } else {
            $('#dropDown').css('color', '#cf1516');
        }
    });
});