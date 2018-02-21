var createNewComment = function () {
    var currentDate = new Date();
    var y = currentDate.getFullYear();
    var m = currentDate.getMonth() + 1;
    var d = currentDate.getDate();
    var formattedDate = `${d}/${m}/${y}`;
    var commentObj = {
        date: formattedDate,
        name: $('#user').val(),
        comment: $('#comment-input').val()
    };
    if (!Array.isArray(commentsDatabase)) {
        commentsDatabase = JSON.parse(commentsDatabase);
    }
    commentsDatabase.push(commentObj);

    localStorage.setItem('allComments', JSON.stringify(commentsDatabase));

    addCommentToDom(formattedDate, commentObj.name, commentObj.comment);
}

var generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 5);
}

var addCommentToDom = function (date, user, comment) {
    var $commentBox = $('#all-comments');
    var $newCommentLi = $('<li>').addClass('newCommentBottomBorder');
    var $userName = $('<h4>');
    var $postDate = $('<p>').addClass('dateAndTime');
    var $comment = $('<p>');
    $postDate.html(date);
    $userName.html(user);
    $comment.html(comment);
    $newCommentLi.append($postDate)
        .append($userName)
        .append($comment);
    $newCommentLi.prependTo($commentBox);
}


var commentsDatabase = localStorage.getItem('allComments') ? localStorage.getItem('allComments') : [];

if (commentsDatabase.length > 0) {
    var data = JSON.parse(commentsDatabase);
    data.forEach((comment) => {
        var $date = comment.date;
        var $name = comment.name;
        var $comment = comment.comment;
        addCommentToDom($date, $name, $comment);
    })

}

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