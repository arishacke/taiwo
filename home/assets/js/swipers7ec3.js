let campaignsSwiper = new Swiper('.campaigns-swiper', {
  slidesPerView: 3,
  spaceBetween: 16,
  preventInteractionOnTransition: true,
  pagination: {},
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 8,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 12,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 16,
      preventInteractionOnTransition: true,
      pagination: {},
    },
  },
})

let articlesSwiper = new Swiper('.articles-swiper', {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
})

let eventsSwiper = new Swiper('.events-swiper', {
  slidesPerView: 4,
  spaceBetween: 16,
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
})

let communitySwiper = new Swiper('.community-swiper', {
  slidesPerView: 4,
  spaceBetween: 16,
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
})

let mediumSwiper = new Swiper('.medium-swiper', {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
})

let bannerSwiper = new Swiper('.banner-swiper', {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
})

let ecosystemHighlightsSwiper = new Swiper('.ecosystem-highlights-swiper', {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
})

let ecosystemNativeSwiper = new Swiper('.ecosystem-native-swiper', {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 4,
    },
  },
})
