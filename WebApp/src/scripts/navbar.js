$('#homepagebutton').click(function(){
    console.log(`click`);
    $(`#dynamic`).empty();
    $('#dynamic').append(homepageHTML);
});

// document.addEventListener('DOMContentLoaded', function() {
//     $('#dynamic').append(homepageHTML);
// }, false);

$('#userbutton').click(function(){
    $(`#dynamic`).empty();
    $(`#dynamic`).append(userHTML);
});