<!-- src/components/CategorySwiper.vue -->
<template>
  <div class="swiper swiper2">
    <swiper :modules="[Navigation, Pagination]" navigation pagination>
      <swiper-slide
        class="category-card"
        v-for="category in categories"
        :key="category.name"
      >
        <img :src="category.image" :alt="category.name" />
        <div class="category-name">{{ category.name }}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination } from "swiper/modules";

const categories = ref([
  { name: "Living Room", image: "img/living-room.jpg" },
  { name: "Dining Room", image: "img/home-office.jpg" },
  { name: "Home Office", image: "img/Kursi.jpg" },
  { name: "Bedroom", image: "img/Kursi.jpg" },
  { name: "Outdoor", image: "img/Kursi.jpg" },
]);
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
