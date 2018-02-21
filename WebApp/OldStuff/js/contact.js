$(function () {
  if ($('body').width() === 375) {
    $("#title").css("font-size", "3.1vmax");
    $(".title-container").css("margin-top", "-5%");
  }
  
  $(document).mouseup(function (e) {

    var $container = $(".concactInfo");

    if (!$container.is(e.target) && $container.has(e.target).length === 0) {

      $(".concactInfo").css("display", "none");

    }
  });

  $("#contact").on("click", function () {
    $(".concactInfo").toggle();
    modifyTitle.moveTitle();
  });

});