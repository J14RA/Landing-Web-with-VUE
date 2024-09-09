<!-- src/components/ProductSwiper.vue -->
<template>
  <div class="container product-swiper">
    <div class="product-title">
      <a href="#" class="btn-normal">Popular</a>
      <p class="text-xl">Furniture For Sale</p>
    </div>
    <swiper
      ref="mySwiper"
      :modules="[Navigation, Pagination]"
      :navigation="{
        nextEl: '.product-next-button',
        prevEl: '.product-prev-button',
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
    <div class="swiper-button-prev product-prev-button">
      <img :src="arrowLeft" alt="Previous" />
    </div>
    <div class="swiper-button-next product-next-button">
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
import arrowLeft from "@/assets/img/svg/arrow-left-svgrepo-com.svg";
import arrowRight from "@/assets/img/svg/arrow-right-svgrepo-com.svg";

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

.product-swiper .swiper-button-prev,
.product-swiper .swiper-button-next {
  top: var(--swiper-navigation-top-offset, 60%);
  position: absolute;
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-swiper .product-prev-button {
  left: 10px;
}

.product-swiper .product-next-button {
  right: 10px;
}

.product-swiper .product-prev-button img,
.product-swiper .product-next-button img {
  width: 30px;
  height: 30px;
  fill: white;
}
</style>
