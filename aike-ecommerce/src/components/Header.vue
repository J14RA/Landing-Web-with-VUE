<!-- src/components/Header.vue -->
<template>
  <header class="header header-desktop">
    <a href="#" class="logo">AIKE</a>
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
  </header>
</template>

<script setup>
import magGlass from "@/assets/img/svg/magnifying-glass-backup-svgrepo-com.svg";
import cartShop from "@/assets/img/svg/cart-shopping-svgrepo-com.svg";
import heart from "@/assets/img/svg/heart-svgrepo-com.svg";
import imageSrc from "@/assets/img/svg/person-svgrepo-com.svg";
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
