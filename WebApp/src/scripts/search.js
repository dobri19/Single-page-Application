(function() {

    $('#search').on('keyup', function(event) {
        if (event.keyCode === 13) {
            const value = $(this).val().trim();
            apiModule.render(value);
        }

        $('#collection').hide();
    });

    $('#search-button').click(function() {
        const value = $('#search').val().trim();
        apiModule.render(value);

        $('#collection').hide();
    });
})();
