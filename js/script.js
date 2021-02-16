AOS.init();

// header on scroll
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  if (scroll > 50) {
    if ($(window).width() > 992) {
      $('.header-on-scroll').addClass('show-lg');
    }
  } else {
    $('.header-on-scroll').removeClass('show-lg');
  }
});


// fa-bars on click {
$('.first-header .fa-bars').click(function () {
  $('.header-on-scroll').toggleClass('show-sm');
  $('.overlay').toggleClass('active');
});

$('.x-btn').click(function () {
  $('.header-on-scroll').removeClass('show-sm');
  $('.overlay').removeClass('active');
});

$('.overlay').click(function () {
  $('.header-on-scroll').removeClass('show-sm');
  $('.overlay').removeClass('active');
});
