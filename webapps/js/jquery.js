$(document).ready(function(){
  $('#btn-smart').click(function(){
    $('.smart-targeting__extratable-description').toggle();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.scroll-btn').fadeIn();
    } else {
      $('.scroll-btn').fadeOut();
    }
  });
  $('.scroll-btn').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});
