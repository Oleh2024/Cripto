"use strict";

$(document).ready(function () {
  $('.open-menu').click(function () {
    $('.call-menu').toggleClass('active');
  });
  $('.open-lang').click(function () {
    $('.lang-menu').toggleClass('active');
  });
  $('.open-service').click(function () {
    $('.service-menu').toggleClass('active');
  });
  $('.filter').click(function () {
    $('.sidebar').toggleClass('active');
  });
  $('.burger-menu').click(function () {
    $('.hidden-menu').toggleClass('active');
  });
  $('.widget-coolapsed .widget-title').on('click', function () {
    $(this).closest('.widget-coolapsed').toggleClass('opened');
  });
  $('.slider').slick({
    dots: true,
    responsive: [{
      breakpoint: 993,
      settings: {
        infinite: false,
        arrows: false
      }
    }, {
      breackpoint: 576,
      settings: {}
    }]
  });
  $('.slider-product').slick({
    infinite: true,
    slidesToShow: 3,
    variableWidth: true,
    responsive: [{
      breakpoint: 993,
      settings: {
        variableWidth: false,
        slidesToShow: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        variableWidth: false,
        slidesToShow: 1
      }
    }]
  });
  $('.tabLink').on('click', function (e) {
    var $this = $(this),
        $trabsWrap = $this.closest('.tabsWrap');
    $('.tabLink, .tabItem', $trabsWrap).removeClass('active');
    $this.addClass('active');
    $(".tabItem[data-tab=\"".concat($this.data('target'), "\"]"), $trabsWrap).addClass('active');
    $(window).trigger('resize');
  }); //last

  $('.catalogViewToogle').on('click', function () {
    var $this = $(this),
        $catalogWrap = $this.closest('.catalogViewTarget');
    $('.catalogViewToogle').removeClass('active');
    $this.addClass('active');
    $catalogWrap.addClass('loading').prepend('<div class="loader"></div>');
    setTimeout(function () {
      $catalogWrap.removeClass('loading view-grid view-list').addClass("view-".concat($this.data('view'))).find('.loader').remove();
    }, 800);
  });
});