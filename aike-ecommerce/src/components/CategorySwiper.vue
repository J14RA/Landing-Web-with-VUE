<!-- src/components/CategorySwiper.vue -->
<template>
  <div class="category-swiper">
    <swiper
      ref="mySwiper"
      :modules="[Navigation, Pagination]"
      :navigation="{
        nextEl: '.next-button',
        prevEl: '.prev-button',
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
    <div class="swiper-button-prev prev-button">
      <img :src="arrowLeft" alt="Previous" />
    </div>
    <div class="swiper-button-next next-button">
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
import arrowLeft from "@/assets/img/vertical-shot-wooden-chair-white.jpg";
import arrowRight from "@/assets/img/vertical-shot-wooden-chair-white.jpg";

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

.category-card {
  padding: 20px;
  text-align: left;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.category-card img {
  width: 100%;
  height: 80%;
  padding-bottom: 1.5rem;
  object-fit: cover;
}

.category-name {
  font-weight: lighter;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}

.prev-button,
.next-button {
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

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.prev-button img,
.next-button img {
  width: 30px;
  height: 30px;
  fill: white;
}
</style>
