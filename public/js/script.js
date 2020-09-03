$(function () {

  $("#top__pr").fadeIn(2000);

  $("#to-top").click(function () {
    $('html, body').animate({
      "scrollTop": 0
    }, 500);
  });

  // ハンバーガーメニューのスライド
  $('#open-btn').click(function () {
    $('#ham-menu').slideDown(100);
  });

  $('#close-btn').click(function () {
    $('#ham-menu').slideUp(100);
  });








});