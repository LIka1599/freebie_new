$(function () {

  $('.resource__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    dots: true,
    appendDots: $('.resource__dots'),
  })

  $('.resource__prev').on('click', function (e) {
    e.preventDefault()
    $('.resource__slider').slick('slickPrev')
  })
  $('.resource__next').on('click', function (e) {
    e.preventDefault()
    $('.resource__slider').slick('slickNext')
  })

  $('.help__question-item').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('help__question-item--active')) {
      $(this).removeClass('help__question-item--active')
      $(this).children('.help__active').slideUp()
    } else {
      $('.help__question-item').removeClass('help__question-item--active')
      $('.help__active').slideUp()
      $(this).addClass('help__question-item--active')
      $(this).children('.help__active').slideDown()
    }
  })

})