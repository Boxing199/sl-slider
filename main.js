$('.sl').slick({
    asNavFor: '.sl-min',
    autoplay: true,
    autoplaySpeed: 5000
  });

  $('.sl-min').slick({
    dots: true,
    slidesToShow: 6,
    centerMode: true,
    centerPadding: '25px',
    asNavFor: '.sl',
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 3,
          centerMode: false
        }
      },
    ]
  });