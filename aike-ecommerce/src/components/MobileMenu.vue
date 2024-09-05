<!-- src/components/MobileMenu.vue -->
<template>
  <div class="header-mobile">
    <button type="button" class="toggle-btn" @click="toggleDropdown">
      <img
        src=".src/img/svg/nav-icon-svgrepo-com.svg"
        alt="Navigation Toggle"
      />
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
        <img
          src=".src/img/svg/magnifying-glass-backup-svgrepo-com.svg"
          alt="Search Icon"
        />
        <input type="text" placeholder="Product Search" class="input-field" />
      </div>
      <ul class="user-actions">
        <li>
          <a href="#"
            ><img src=".scr/img/svg/cart-shopping-svgrepo-com.svg" alt="Cart"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img src=".scr/img/svg/heart-svgrepo-com.svg" alt="Wishlist"
          /></a>
        </li>
        <li>
          <a href="#"
            ><img src=".scr/img/svg/person-svgrepo-com.svg" alt="User"
          /></a>
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
import { ref } from "vue";

const isMobileMenuActive = ref(false);

function toggleDropdown() {
  isMobileMenuActive.value = !isMobileMenuActive.value;
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
