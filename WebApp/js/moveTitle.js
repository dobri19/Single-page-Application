$(function($) {
  window.moveTitle = function () {
    $("#title").css("font-size", "4.5vmax");
    $(".title-container").css("margin-top", "-2%");
    
    if ($('body').width() <= 320) {
      $("#title").css("font-size", "3.1vmax");
      $(".title-container").css("margin-top", "-5%");
    }
    
    if ($('body').width() > 320 && $('body').width() < 375) {
      $("#title").css("font-size", "4vmax");
      $(".title-container").css("margin-top", "-5%");
    }
      
    if ($('body').width() === 375) {
      $("#title").css("font-size", "3.1vmax");
      $(".title-container").css("margin-top", "-5%");
    }

    if ($('body').width() <= 425) {
      $("#title").css("font-size", "4.2vmax");
      $(".title-container").css("margin-top", "-5%");
    }

    if ($('body').width() > 425 && $('body').width() < 770) {
      $("#title").css("font-size", "6vmax");
      $(".title-container").css("margin-top", "-3%");
    }
    if ($('body').width() > 770 && $('body').width() < 1024) {
      $("#title").css("font-size", "6vmax");
      $(".title-container").css("margin-top", "-12%");
    }

    if ($('body').width() > 1025) {
      $("#title").css("font-size", "5vmax");
      $(".title-container").css("margin-top", "-12%");
    }

    if ($('body').width() > 1441) {
      $("#title").css("font-size", "3vmax");
      $(".title-container").css("margin-top", "-12%");
    }

    $(".title-container").css("justify-content", "center");
    $(".search-box").css("display", "none");
  }
});