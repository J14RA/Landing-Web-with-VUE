<!-- src/components/Header.vue -->
<template>
  <header class="container header header-desktop">
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
      <img
        src=".assets/img/svg/magnifying-glass-backup-svgrepo-com.svg"
        alt="Search Icon"
      />
      <input type="text" placeholder="Product Search" class="input-field" />
    </div>
    <ul class="user-actions">
      <li>
        <a href="#"
          ><img src=".src/img/svg/cart-shopping-svgrepo-com.svg" alt="Cart"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img src=".src/img/svg/heart-svgrepo-com.svg" alt="Wishlist"
        /></a>
      </li>
      <li>
        <a href="#"
          ><img src=".src/img/svg/person-svgrepo-com.svg" alt="User"
        /></a>
      </li>
    </ul>
  </header>
</template>

<script setup>
// No specific functionality needed for now
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
