(function(scope){
  var changeHTML = function(){
    var safeContent = $(".pic-n-prepare").html();
    
    if($('body').width() <= 425) {
      var $newDiv = $("<div>").addClass("prepare col-sm-11");
      $newDiv.attr("id","smallScreens");
      
      var $newP = $("<p>");
      $newP.attr("id","preparation");
      
      var $newImg = $("<img>");
      $newImg.attr("id","meal-pic");
      
      $(".pic-n-prepare").html("");
      $(".pic-n-prepare").append(($newDiv).append($newP).append($newImg));
    } else {
      $(".pic-n-prepare").html(safeContent);
    }
    
  }

  var changeHTMLSlideEffectOnComments = function(){
    var $mealWindow = $(".meal-window");

    if ($('body').width() > 768) {
      $mealWindow.css("width","65%");
      
    }

  }

  scope.changePage = {
    changeHTML,
    changeHTMLSlideEffectOnComments
  };

  changeHTML();
  changeHTMLSlideEffectOnComments();
  
})(window)