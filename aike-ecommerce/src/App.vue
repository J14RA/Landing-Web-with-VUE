<!-- src/App.vue -->
<template>
  <div id="app">
    <Header />
    <MobileMenu />
    <HomeSection />
    <ProductSwiper />
    <CategorySwiper />
    <BottomSection />
    <CollectionSection />
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import MobileMenu from "./components/MobileMenu.vue";
import HomeSection from "./components/HomeSection.vue";
import ProductSwiper from "./components/ProductSwiper.vue";
import CategorySwiper from "./components/CategorySwiper.vue";
import BottomSection from "./components/BottomSection.vue";
import CollectionSection from "./components/CollectionSection.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
@import "style.css"; /* Import global CSS */
</style>
