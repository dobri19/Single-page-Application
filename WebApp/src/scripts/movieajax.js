$('#search').on('input', function() {
    const value = $(this).val().trim();

    if (value.length >= 3 && value.length <= 10) {
        callApi(value);
    }
});

function callApi(title) {
    $.get(`http://www.omdbapi.com/?t=${title}&apikey=1c4993a8`).then(renderHtml);

    function renderHtml(data) {
        console.log(data);
        let title = data.Title;
        let year = data.Year;

        let imgTag = $('#my-img-tag-0')
            .attr('src', data.Poster)
            .css({
                width: '300px',
                height: '300px'
            });

        if (title !== undefined || year !== undefines) {
            $('.result').append('title: ' + title + ', ' + 'year: ' + year + '  ');
        };

    };
};

