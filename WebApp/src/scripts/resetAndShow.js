(function() {

    $('.contacts').click(function() {
        $('#collection').hide();
        $('#infoto').hide();
        $('.parent').hide();
        $('.contactInfo').toggle();
    });

    $('.active').click(function() {
        $('#collection').hide();
        $('#infoto').hide();
        $('.parent').show();
    });

    $('#reset').click(function() {
        window.localStorage.clear();
        $('#collection').empty();
        $('.parent').hide();
    });

    $('#movies').click(function() {

        $('.parent').hide();
        $('#infoto').hide();
        let test = JSON.parse(localStorage.savedMovies);

        console.log(test);
        let all = '';
        for (let i = 0; i < test.length; i++) {
            all += `<img src=${test[i].Poster} alt="Smiley face" height="160" width="100">` +
                ` Title: ${test[i].Title},  Year: ${test[i].Year},  Awards:  ${test[i].Awards}, 
                Plot: ${test[i].Plot} <br>`;
        }

        $('#collection').html(all);
        $('#collection').show();
    });
})();
