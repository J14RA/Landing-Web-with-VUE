<!-- src/components/ProductSwiper.vue -->
<template>
  <div class="swiper">
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

// Import images directly
import livingRoom from "@/assets/img/living-room.jpg";
import homeOffice from "@/assets/img/home-office.jpg";
import kursi from "@/assets/img/Kursi.jpg";

const products = ref([
  { name: "KALLAX", price: "$25.00", image: livingRoom },
  { name: "MAMMUT", price: "$12.00", image: homeOffice },
  { name: "ARKELSTORP", price: "$65.00", image: kursi },
]);
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
