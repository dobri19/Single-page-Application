$(function () {
  $("#ratingStar").click(function () {
      $("#stars").toggle();

  });

  var sum = 0;
  var $totalRating = 0;

  $("#stars").rateYo({
    starWidth: "30px",
    precision: 0,
    spacing: "5px",
    multiColor: {
      "startColor": "#FF0000", //RED
      "endColor": "#9acd32" //GREEN
    }

  });

  $("#stars").on("rateyo.set", function (e, data) {
    var $recipesData = JSON.parse(localStorage.getItem('allRecipes'));
    var $currentId = $('.meal-basics').attr('id');
    var $currentRating = parseFloat(stars.getRating($currentId).rating);
    var $ratings = stars.getRating($currentId).allRatings;

    $ratings.push(data.rating);
    alert("You voted with " + data.rating + "!");
    var $totalRating = 0;

    $ratings.forEach(function (el) {
      $totalRating += el;
    })

    $totalRating = ($totalRating / $ratings.length).toFixed(1);
    stars.setRating($currentId, $totalRating, $ratings);

  });

});