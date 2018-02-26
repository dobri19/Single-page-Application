let apiModule = (function callApi() {

    function render(title) {
        $.get(`http://www.omdbapi.com/?t=${title}&apikey=1c4993a8`).then(renderHtml);

        function renderHtml(data) {

            let title = data.Title;
            let year = data.Year;
            let director = data.Director;

            $('#my-img-tag-0')
                .attr('src', data.Poster)
                .css({
                    width: '300',
                    height: '400'
                });

            window.sessionStorage.setItem('currentMovie', JSON.stringify(data));

            $('#add-movie').show();

            if (title !== undefined || year !== undefined) {
                $('.result').html('Title: "' + title + '", ' + 'Year: ' + year +
                    ', ' + 'Director: ' + director + '  ' + '<br>');
            };

            $('#infoto').show();

        };
    }

    return {
        render: render
    };
})();
