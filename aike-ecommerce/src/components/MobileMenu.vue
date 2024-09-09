<!-- src/components/MobileMenu.vue -->
<template>
  <div class="header header-mobile">
    <a href="#" class="logo">AIKE</a>
    <button type="button" class="toggle-btn" @click="toggleDropdown">
      <img :src="navBut" alt="Navigation Toggle" />
    </button>
    <div class="mobile-menu" :class="{ active: isMobileMenuActive }">
      <nav class="navbar">
        <ul class="nav-links">
          <li><a href="#category">Category</a></li>
          <li><a href="#promo">Promo</a></li>
          <li><a href="#interior">Interior Design</a></li>
          <li><a href="#recommendation">Product Recommendation</a></li>
        </ul>
      </nav>
      <div class="search-bar">
        <img :src="magGlass" alt="Search Icon" />
        <input type="text" placeholder="Product Search" class="input-field" />
      </div>
      <ul class="user-actions">
        <li>
          <a href="#"><img :src="cartShop" alt="Cart" /></a>
        </li>
        <li>
          <a href="#"><img :src="heart" alt="Wishlist" /></a>
        </li>
        <li>
          <a href="#"><img :src="imageSrc" alt="User" /></a>
        </li>
      </ul>
    </div>
    <div
      id="body-overlay"
      class="overlay"
      @click="toggleDropdown"
      :style="{ display: isMobileMenuActive ? 'block' : 'none' }"
    ></div>
  </div>
</template>

<script setup>
import navBut from "@/assets/img/svg/nav-icon-svgrepo-com.svg";
import magGlass from "@/assets/img/svg/magnifying-glass-backup-svgrepo-com.svg";
import cartShop from "@/assets/img/svg/cart-shopping-svgrepo-com.svg";
import heart from "@/assets/img/svg/heart-svgrepo-com.svg";
import imageSrc from "@/assets/img/svg/person-svgrepo-com.svg";
import { ref } from "vue";

const isMobileMenuActive = ref(false);

function toggleDropdown() {
  isMobileMenuActive.value = !isMobileMenuActive.value;
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
