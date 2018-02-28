(function() {
    $('#search').on('keyup', function(event) {
        if (event.keyCode === 13) {
            const value = $(this).val().trim();
            console.log(`123`);
            $(`#dynamic`).empty();
            callApi(value);
        }
    });
})();