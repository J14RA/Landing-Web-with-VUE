<!-- src/components/ProductSwiper.vue -->
<template>
  <div class="product-swiper">
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
        768: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 10 },
      }"
    >
      <swiper-slide
        class="product-card"
        v-for="product in products"
        :key="product.name"
      >
        <img :src="product.image" :alt="product.name" />
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">{{ product.price }}</div>
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

import carvil from "@/assets/img/living-room.jpg";
import bata from "@/assets/img/home-office.jpg";
import eiger from "@/assets/img/Kursi.jpg";
import kallax from "@/assets/img/living-romm-2.jpg";
import mammut from "@/assets/img/picture-frame-by-velvet-armchair.jpg";
import arkelstrop from "@/assets/img/vertical-shot-wooden-chair-white.jpg";
import arrowLeft from "@/assets/img/vertical-shot-wooden-chair-white.jpg";
import arrowRight from "@/assets/img/vertical-shot-wooden-chair-white.jpg";

const products = ref([
  { name: "CARFIL", price: "$15.00", image: carvil },
  { name: "BATA", price: "$35.00", image: bata },
  { name: "EIGER", price: "$45.00", image: eiger },
  { name: "KALLAX", price: "$25.00", image: kallax },
  { name: "MAMMUT", price: "$12.00", image: mammut },
  { name: "ARKELSTORP", price: "$65.00", image: arkelstrop },
]);
</script>

<style scoped>
.product-swiper {
  position: relative;
}

.product-card {
  position: relative;
  width: 100%;
  height: auto;
  padding: 2rem 1rem;
}

.product-title {
  padding: 1rem;
  text-align: center;
  align-items: center;
}

.product-card img {
  height: 96%;
  width: 100%;
  object-fit: cover;
}

.product-name {
  position: absolute;
  bottom: 20px;
  left: 20px;
  padding: 5px 10px;
  font-weight: lighter;
  padding-bottom: 2rem;
}

.product-price {
  position: absolute;
  right: 20px;
  bottom: 20px;
  padding: 5px 10px;
  font-weight: lighter;
  padding-bottom: 2rem;
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
