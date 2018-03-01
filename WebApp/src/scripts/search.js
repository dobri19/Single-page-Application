(function() {
    $('#search').keypress(function(event) {
        if (event.keyCode == 13) {
            const value = $(this).val().trim();
            $('#dynamic').empty();
            event.preventDefault();
            api.callApi(value);
        }
    });
})();
