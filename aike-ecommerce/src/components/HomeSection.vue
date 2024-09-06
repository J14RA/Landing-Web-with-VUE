<!-- src/components/HomeSection.vue -->
<template>
  <section class="container home-section">
    <div class="home-content home-left">
      <h1 class="text-xl">
        Discover elegant & affordable furniture for every room
      </h1>
      <p class="text-nm">
        Transform your furniture with sophisticated and stylish pieces, and
        create a serene and inviting home.
      </p>
      <ul class="home-actions">
        <li><a href="#" class="btn btn-lg" title="Shop Now">Shop Now</a></li>
        <li>
          <a href="#" title="Free delivery"
            ><img :src="fastTruck" alt="" /> Free delivery</a
          >
        </li>
        <li>
          <a href="#" title="Always on-time"
            ><img :src="onTime" alt="" /> Always on-time</a
          >
        </li>
      </ul>
    </div>
    <div class="home-right">
      <div class="product-section">
        <div class="product-sale">
          <img :src="productSale" alt="Living Room" />
        </div>
        <div class="slogan">
          <img :src="slogan" alt="Slogan Image" />
          <p class="text-nm">Modern & stylish Furniture</p>
        </div>
      </div>
      <div class="person-section">
        <div class="agent">
          <img :src="agent" alt="Agent" />
          <div class="job-desk">
            <p>Name Person</p>
            <p class="text-nm">Job description</p>
          </div>
        </div>
        <div class="buyer">
          <img :src="buyerBack" alt="Buyer" />
          <div class="items-sold">
            <img src="https://via.placeholder.com/30" alt="User 1" />
            <img src="https://via.placeholder.com/30" alt="User 2" />
            <img src="https://via.placeholder.com/30" alt="User 3" />
            <div class="items-sold-count">
              120,000+
              <div class="sold-label">Items sold out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import fastTruck from "@/assets/img/svg/truck-fast-svgrepo-com.svg";
import onTime from "@/assets/img/svg/clock-seven-svgrepo-com.svg";
import productSale from "@/assets/img/living-room.jpg";
import slogan from "@/assets/img/living-romm-2.jpg";
import agent from "@/assets/img/young-woman-white-shirt-pointing-up.jpg";
import buyerBack from "@/assets/img/Kursi.jpg";
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
