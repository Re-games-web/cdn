$(function() {

    $('#myForm').on('submit', function(event) {
        event.preventDefault();
        var iId = $('#iId').val();
        $.ajax({
            type: 'POST',
            url: 'index.php',
            data: { iId: iId },
            success: function(response) {
                $('#result').html(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});