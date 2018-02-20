(function (scope) {
  var $commentButton = $("#showRecipeCommentsBtn");
  var $commentWindow = $("#getRecipeComments");
  var $sideMenuWindow = $("#side-menu");

  var $mealDetailsWindow = $("#meal-window");
  $mealDetailsWindow.css("transition", "margin-left 0.5s");
  $mealDetailsWindow.css("padding", "16px");


  $commentButton.on("click", function () {
    if ($('body').width() > 768){
      hideShowMenus();
    } else {
      if ($commentWindow.css("display") === "block") {
        $commentWindow.css("display", "none");
  
      } else {
        $commentWindow.css("display", "block");
      }   
    }
  });

  var hideShowMenus = function () {
    if ($commentWindow.css("display") === "block") {
      $commentWindow.css("display", "none");

    } else {
      $commentWindow.css("display", "block");
    }

    if ($commentWindow.css("display") === "block") {
      $(".commentSlide").css("left", "68%");
      $mealDetailsWindow.css("margin-left", "1%");

      $commentButton.css("margin-left", "450%");
      if ($('body').width() > 1441){
        $commentButton.css("margin-left", "430%");
      }

      $sideMenuWindow.css("display", "none");

    } else {
      $(".commentSlide").css("left", "100%");
      $sideMenuWindow.css("display", "block");
      $mealDetailsWindow.css("margin-left", "");

      $commentButton.css("margin-left", "-70px");

    }
  };

  var hideShowMenusBack = function () {
    $commentButton.css("display", "none");
    $commentWindow.css("display", "none");
    $sideMenuWindow.css("display", "block");

    if ($('body').width() > 768){
      $commentButton.css("margin-left", "-70px");
    }
  };

  scope.menu = {
    hideShowMenus,
    hideShowMenusBack,
  };


})(window);