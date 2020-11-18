// burger-menu
const burgerMenu = () => {
	const burgerBtn = document.getElementById('burger'),
  navigation = document.querySelector('.navigation'),
  logo = document.querySelector('.logo'),
  menu = document.querySelector('.menu'),
  body = document.querySelector('body');

  let count = -40,
      number,
      animate = true,
      slideInInterval,
      slideOutInterval;

  const slideInMenu = () => {
    slideInInterval = requestAnimationFrame(slideInMenu);
    count++;
    if (count <= 0) {
      menu.style.right = count * 8 + 'px';
    } else {
      cancelAnimationFrame(slideInInterval);
      animate = false;
    }
    
  };

  const slideOutMenu = () => {
    slideOutInterval = requestAnimationFrame(slideOutMenu);
    count--;
    if (count >= -40) {
      menu.style.right = count * 8 + 'px';
    } else {
      cancelAnimationFrame(slideOutInterval);
      animate = true;
    }
    
  };

  const handlerMenu = () => {
		burgerBtn.classList.toggle('burger--active');
    navigation.classList.toggle('navigation-hide');
  };
  
  const animateMenu = () => {
    if (animate) {
      handlerMenu();
      slideInMenu();
    } else {
      setTimeout(handlerMenu, 500);
      slideOutMenu();
    }
  };

  body.addEventListener('click', event => {
    let target = event.target;

    if (target.matches('#burger')) {
      animateMenu();
    } 

    if (target.matches('.navigation')) {
      animateMenu();
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

