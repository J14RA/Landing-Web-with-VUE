<!-- src/components/CategorySwiper.vue -->
<template>
  <div class="container category-swiper">
    <div class="category-title">
      <a href="#" class="btn-normal">Category</a>
      <p class="text-xl">Design your perfect home</p>
    </div>
    <swiper
      ref="mySwiper"
      :modules="[Navigation, Pagination]"
      :navigation="{
        nextEl: '.category-next-button',
        prevEl: '.category-prev-button',
      }"
      pagination
      :breakpoints="{
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 10 },
        1024: { slidesPerView: 4, spaceBetween: 10 },
      }"
    >
      <swiper-slide
        class="category-card"
        v-for="category in categories"
        :key="category.name"
      >
        <img :src="category.image" :alt="category.name" />
        <div class="category-name">{{ category.name }}</div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev category-prev-button">
      <img :src="arrowLeft" alt="Previous" />
    </div>
    <div class="swiper-button-next category-next-button">
      <img :src="arrowRight" alt="Next" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

import livingRoom from "@/assets/img/living-room.jpg";
import diningRoom from "@/assets/img/home-office.jpg";
import homeOffice from "@/assets/img/Kursi.jpg";
import bedRoom from "@/assets/img/living-romm-2.jpg";
import outDoor from "@/assets/img/picture-frame-by-velvet-armchair.jpg";
import arrowLeft from "@/assets/img/svg/arrow-left-svgrepo-com.svg";
import arrowRight from "@/assets/img/svg/arrow-right-svgrepo-com.svg";

const categories = ref([
  { name: "Living Room", image: livingRoom },
  { name: "Dining Room", image: diningRoom },
  { name: "Home Office", image: homeOffice },
  { name: "Bedroom", image: bedRoom },
  { name: "Outdoor", image: outDoor },
]);
</script>

<style scoped>
.category-swiper {
  height: auto;
  position: relative;
}

.category-swiper .swiper-button-prev,
.category-swiper .swiper-button-next {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-swiper .category-prev-button {
  left: 10px;
}

.category-swiper .category-next-button {
  right: 10px;
}

.category-swiper .category-prev-button img,
.category-swiper .category-next-button img {
  width: 30px;
  height: 30px;
  fill: white;
}
</style>
