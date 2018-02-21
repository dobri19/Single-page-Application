
  if ($('body').width() <= 425){
    $("#nav-overlay").click(function () {
      $("#title").css("font-size", "4vmax");
      $(".title-anchor").css("position", "absolute");
      $(".title-anchor").css("top", "0");
      $(".title-anchor").css("left", "0");
      $(".title-anchor").css("margin-top", "-15%");
      $(".title-anchor").css("margin-left", "12%");
      $(".title-anchor").css("justify-content", "center");     
      $(".title-container").css("width", "100%");
      $(".search-box").css("display", "none");        
    
    
    });
  }   
