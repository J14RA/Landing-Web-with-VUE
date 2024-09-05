<!-- src/components/ProductSwiper.vue -->
<template>
  <div class="swiper swiper1">
    <swiper :modules="[Navigation, Pagination]" navigation pagination>
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

const products = ref([
  { name: "KALLAX", price: "$25.00", image: "img/living-room.jpg" },
  { name: "MAMMUT", price: "$12.00", image: "img/home-office.jpg" },
  { name: "ARKELSTORP", price: "$65.00", image: "img/Kursi.jpg" },
  // More products as needed
]);
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
