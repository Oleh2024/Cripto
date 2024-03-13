$(document).ready(function () {
  $('.open-menu').click(function () {
    $('.call-menu').toggleClass('active');
  })
  $('.open-lang').click(function () {
    $('.lang-menu').toggleClass('active');

  })
  $('.open-service').click(function () {
    $('.service-menu').toggleClass('active');
  })

  $('.filter').click(function () {
    $('.sidebar').toggleClass('active');
  })
  $('.burger-menu').click(function () {
    $('.hidden-menu').toggleClass('active');
  })


  $('.widget-coolapsed .widget-title').on('click', function () {
    $(this).closest('.widget-coolapsed').toggleClass('opened');
  });

  $('.slider').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          infinite: false,
          arrows: false
        }
      },

      {
        breackpoint: 576,
        settings: {


        }
      }

    ]
  });

  $('.slider-product').slick({

    infinite: true,
    slidesToShow: 3,

    touchThreshold: 12,

    responsive: [
      {
        breakpoint: 993,
        settings: {
          variableWidth: false,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
        }
      },


    ]
  });

  $('.tabLink').on('click', function (e) {
    e.preventDefault()
    $('.slider-product').slick('setPosition');

    const $this = $(this),
      $trabsWrap = $this.closest('.tabsWrap');

    $('.tabLink, .tabItem', $trabsWrap).removeClass('active');
    $this.addClass('active');

    $(`.tabItem[data-tab="${$this.data('target')}"]`, $trabsWrap).addClass('active');

    $('.slider-product').slick('setPosition');
  });

  //last
  $('.catalogViewToogle').on('click', function () {
    const $this = $(this),
      $catalogWrap = $this.closest('.catalogViewTarget');

    $('.catalogViewToogle').removeClass('active');

    $this.addClass('active');
    $catalogWrap.addClass('loading').prepend('<div class="loader"></div>');

    setTimeout(function () {
      $catalogWrap
        .removeClass('loading view-grid view-list')
        .addClass(`view-${$this.data('view')}`)
        .find('.loader').remove();
    }, 800);

  });
if($(".range-slider").length){
   $range_slider = $(".range-slider").slider({
    range: true,
    // values: [0, 5000],
    min:0,
    max: 5000,
    change: function (event, ui) { },

  });
}
 

  $(".change-rage-js").on("change slidechange", function (e) {
    $wrap = $(this);
    $max_input = $wrap.find(".max-range-js");
    $min_input = $wrap.find(".min-range-js");
    let max_val = $max_input.val();
    let min_val = $min_input.val();

    $current_target = $(e.target);
    const current_val = $current_target.val();

    const arr_sider_values = $range_slider.slider("values");

    if (current_val > 5000) $current_target.val(5000);
    if (current_val < 0) $current_target.val(0);
    


    if ($current_target.hasClass("min-range-js")) {

      if (current_val > max_val){
        $current_target.val(max_val);
        min_val  =max_val;
      } 

      $range_slider.slider("values", 0, min_val);

    } else if ($current_target.hasClass("max-range-js")) {

      if (current_val < min_val) {
        $current_target.val(min_val);
        max_val =min_val;
      }

      $range_slider.slider("values", 1, max_val);

    } else if ($current_target.hasClass("price-range")) {

      $min_input.val(arr_sider_values[0]);
      $max_input.val(arr_sider_values[1]);
    }

    // $number_range= $(this);
    // const val = $number_range.val()
    // if(val> 5000){$number_range.val(5000)};
    // if(val<0){$number_range.val(0)}

    // if($number_range.hasClass("min-range-js")){
    //   $range_slider.slider( "values", 0, val );

    // }else{
    //   $range_slider.slider( "values", 1, val );
    // }

  })

})