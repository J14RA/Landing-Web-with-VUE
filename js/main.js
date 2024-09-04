const app = Vue.createApp({
  data() {
    return {
      isMobileMenuActive: false,
      dropdowns: {
        company: false,
        category: false,
      },
    };
  },
  methods: {
    toggleDropdown(section) {
      this.dropdowns[section] = !this.dropdowns[section];
    },
    handleClickOutside(event) {
      const mobileMenu = document.getElementById("mobile-menu");
      const toggleBtn = document.querySelector(".toggle-btn");

      // Check if the click is outside the mobile menu and the toggle button
      if (
        !mobileMenu.contains(event.target) &&
        !toggleBtn.contains(event.target)
      ) {
        this.isMobileMenuActive = false;
      }
    },
  },
  mounted() {
    // Initialize Swiper sliders
    new Swiper(".swiper1", {
      loop: true,
      navigation: {
        nextEl: ".swiper1 .swiper-button-next",
        prevEl: ".swiper1 .swiper-button-prev",
      },
      pagination: {
        el: ".swiper1 .swiper-pagination",
        clickable: true,
      },
      spaceBetween: 20,
      breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      },
    });

    new Swiper(".swiper2", {
      loop: true,
      navigation: {
        nextEl: ".swiper2 .swiper-button-next",
        prevEl: ".swiper2 .swiper-button-prev",
      },
      pagination: {
        el: ".swiper2 .swiper-pagination",
        clickable: true,
      },
      spaceBetween: 10,
      breakpoints: {
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
      },
    });

    document.addEventListener("click", this.handleClickOutside);
  },
});

app.mount("#app");
