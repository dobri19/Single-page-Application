(function (scope) {
    var createNewComment = function () {
        var currentDate = new Date();
        var y = currentDate.getFullYear();
        var m = currentDate.getMonth() + 1;
        var d = currentDate.getDate();
        var formattedDate = `${d}/${m}/${y}`;
        var $mealId = $('.meal-basics').attr('id');
        var commentObj = {
            date: formattedDate,
            name: $('#user').val(),
            comment: $('#comment-input').val(),
            meal: $mealId
        };
        if (!Array.isArray(commentsDatabase)) {
            commentsDatabase = JSON.parse(commentsDatabase);
        }
        commentsDatabase.push(commentObj);

        localStorage.setItem('allComments', JSON.stringify(commentsDatabase));

        addCommentToDom(formattedDate, commentObj.name, commentObj.comment);
    }

    var addCommentToDom = function (date, name, comment) {
        var comments = JSON.parse(localStorage.getItem('allComments'));
        var $mealId = $('.meal-basics').attr('id');
        var $commentBox = $('#all-comments');
        var $newCommentLi = $('<li>').addClass('newCommentBottomBorder');
        var $userName = $('<h4>');
        var $postDate = $('<p>').addClass('dateAndTime');
        var $comment = $('<p>');
        $postDate.html(date);
        $userName.html(name);
        $comment.html(comment);
        $newCommentLi.append($postDate)
            .append($userName)
            .append($comment);
        $newCommentLi.prependTo($commentBox);

        // changed
        $commentBox.addClass("textFormat");
    }

    var displayComments = function (comment) {
        var comments = JSON.parse(localStorage.getItem('allComments'));
        var $mealId = $('.meal-basics').attr('id');
        comments.forEach(function (comment) {
            if (comment.meal === $mealId) {
                var $commentBox = $('#all-comments');
                var $newCommentLi = $('<li>').addClass('newCommentBottomBorder');
                var $userName = $('<h4>');
                var $postDate = $('<p>').addClass('dateAndTime');
                var $comment = $('<p>');
                $postDate.html(comment.date);
                $userName.html(comment.name);
                $comment.html(comment.comment);
                $newCommentLi.append($postDate)
                    .append($userName)
                    .append($comment);
                $newCommentLi.prependTo($commentBox);

                // changed
                $commentBox.addClass("textFormat");
            }
        })
    }

    var clearComments = function () {
        $('#all-comments').html('');
    }
    var commentsDatabase = localStorage.getItem('allComments') ? localStorage.getItem('allComments') : [];

    var $button = $('#post-button');

    $button.on('click', function () {
        if ($('#user').val() === '' || $('#comment-input').val() === '') {
            alert("Please, enter name and comment");
            return false;
        }
        createNewComment();
        $('#user').val('');
        $('#comment-input').val('');
    });

    scope.comments = {
        displayComments,
        clearComments
    }
})(window);