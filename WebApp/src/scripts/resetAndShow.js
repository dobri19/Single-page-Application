(function() {

    $('#reset').click(function() {
        window.localStorage.clear();
        $('#collection').empty();
    });

    $('#movies').click(function() {

        $('#infoto').hide();
        let test = JSON.parse(localStorage.savedMovies);

        console.log(test);
        let all = '';
        for (let i = 0; i < test.length; i++) {
            all += test[i].Title + '; ' + test[i].Year + '; ' + test[i].Awards + '<br>';
        }

        $('#collection').html(all);
        $('#collection').show();
    });
})();
