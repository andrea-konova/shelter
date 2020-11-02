// burger-menu
const burgerMenu = () => {
	const burgerBtn = document.getElementById('burger'),
  navigation = document.querySelector('.navigation'),
  logo = document.querySelector('.logo'),
  body = document.querySelector('body');

  const handlerMenu = () => {
		burgerBtn.classList.toggle('burger--active');
    navigation.classList.toggle('navigation-hide');
	};

  body.addEventListener('click', event => {
    let target = event.target;

    if (target.matches('#burger')) {
      handlerMenu();
    } 

    if (target.matches('.navigation')) {
      burgerBtn.classList.remove('burger--active');
      navigation.classList.add('navigation-hide');
      console.log('Поехали');
    }
  });
  
  // navigation.addEventListener('click', event => {
	// 	event.preventDefault();
	// 	const target = event.target;

	// 	if (target.matches('a[href*="#"]')) {
	// 		burgerBtn.classList.toggle("burger--active");
  //     navigation.classList.toggle('navigationr-hide');
	// 	}
  // });
};

burgerMenu();

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
        slidesPerView: 2
      },
      1280: {
        slidesPerView: 3
      }
    }
	});
}

petsSlider();

