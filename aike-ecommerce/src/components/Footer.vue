<!-- src/components/Footer.vue -->
<template>
  <footer class="container footer">
    <div class="footer-row">
      <div class="footer-col">
        <h4>AIKE</h4>
      </div>
      <div class="footer-col">
        <button
          type="button"
          class="dropdown-btn"
          @click="toggleDropdown('company')"
        >
          <h4>Company</h4>
        </button>
        <ul class="links" :class="{ active: dropdowns.company }">
          <li><a href="#">About</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <button
          type="button"
          class="dropdown-btn"
          @click="toggleDropdown('category')"
        >
          <h4>Category</h4>
        </button>
        <ul class="links" :class="{ active: dropdowns.category }">
          <li><a href="#">Living Room</a></li>
          <li><a href="#">Dining Room</a></li>
          <li><a href="#">Home Office</a></li>
          <li><a href="#">Bedroom</a></li>
          <li><a href="#">Outdoor</a></li>
        </ul>
      </div>
      <div class="footer-col footer-wrapper">
        <h4>Join our Newsletter</h4>
        <form action="#">
          <div class="input-container">
            <input type="text" placeholder="Your email" required />
            <button type="submit">
              <img src=".src/img/svg/arrow-sm-right-svgrepo-com.svg" alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="copyright text-nm">
      <p>Copyright © 2024 AIKE. All rights reserved.</p>
      <p>Terms of Condition.</p>
      <p>Privacy Policy.</p>
    </div>
  </footer>
</template>

<script setup>
import { reactive } from "vue";

const dropdowns = reactive({
  company: false,
  category: false,
});

function toggleDropdown(type) {
  dropdowns[type] = !dropdowns[type];
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
