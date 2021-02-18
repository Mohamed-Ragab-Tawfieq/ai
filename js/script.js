AOS.init();

/* ---------- header ---------- */

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

/* ---------- /header ---------- */

/* ---------- mission section ---------- */
$('.mission ul.right li:first-child').click(function() {
  $('.mission h2.sub-mission').siblings().fadeOut(100);
  $('.mission h2.sub-mission').fadeIn();
})
$('.mission ul.right li:nth-child(2)').click(function() {
  $('.mission h2.sub-vision').siblings().fadeOut(100);
  $('.mission h2.sub-vision').fadeIn();
})
$('.mission ul.right li:last-child').click(function() {
  $('.mission h2.sub-values').siblings().fadeOut(100);
  $('.mission h2.sub-values').fadeIn();
})

/* ---------- /mission section ---------- */


