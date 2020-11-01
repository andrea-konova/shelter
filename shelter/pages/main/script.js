//pets slider
const petsSlider = () => {
  new Swiper('.pets__slider', {
    loop: true,
    slidesPerView: 3,
		navigation: {
			nextEl: '.button__arrow-next',
			prevEl: '.button__arrow-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 3
      }
    }
	});
}

petsSlider();