/* ---------- header ---------- */

// header on scroll
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();

  if (scroll > 50) {
    $('.go-top').addClass('active');

    if ($(window).width() > 992) {
      $('.header-on-scroll').addClass('show-lg');
    }
  } else {
    $('.header-on-scroll').removeClass('show-lg');
    $('.go-top').removeClass('active');
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
$('.mission ul.right li:first-child').click(function () {
  $('.mission h2.sub-mission').siblings().fadeOut(100);
  $('.mission h2.sub-mission').fadeIn();
});
$('.mission ul.right li:nth-child(2)').click(function () {
  $('.mission h2.sub-vision').siblings().fadeOut(100);
  $('.mission h2.sub-vision').fadeIn();
});
$('.mission ul.right li:last-child').click(function () {
  $('.mission h2.sub-values').siblings().fadeOut(100);
  $('.mission h2.sub-values').fadeIn();
});

/* ---------- /mission section ---------- */

/* ---------- solutions section ---------- */
$('section.solutions li').hover(function () {
  $(this).find('.overlay').toggleClass('active');
});
$('section.solutions li').hover(function () {
  $(this).find('span').toggleClass('fa-spin');
  $(this).find('span .fa-circle').fadeToggle(200);
});
/* ---------- /solutions section ---------- */

/* ---------- work-process section ---------- */
$('section.work-process li').hover(function () {
  $(this).find('.overlay').toggleClass('active');
});
/* ---------- /work-process section ---------- */

/* ---------- go-top ---------- */
$(document).ready(function () {
  var scrollTop = $('.go-top');
  $(scrollTop).click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
  $('#homeLink').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
});
/* ---------- end of go-top ---------- */
