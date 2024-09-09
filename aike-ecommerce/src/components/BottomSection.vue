<template>
  <div class="container bottom-section">
    <div class="img-bottom">
      <img :src="imgBottom" alt="Living Room Image" />
    </div>
    <div class="bottom-context">
      <h2>Our Ambition</h2>
      <p class="text-lg">Pioneering innovation and excellence in furniture</p>
      <p class="text-nm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi
        voluptatum, reprehenderit sit deleniti corporis provident quia nemo
        veritatis quasi repudiandae corrupti excepturi earum enim rerum eos amet
        voluptatibus eum!
      </p>
      <a href="about" class="btn btn-lg">Learn more</a>
    </div>
  </div>
</template>

<script>
import imgBottom from "@/assets/img/living-romm-2.jpg";

export default {
  data() {
    return {
      imgBottom,
    };
  },
};
</script>

<style scoped>
/* Add any specific styles for the bottom section here */
/* Bottom */
.bottom-section {
  display: flex;
  align-items: center;
}

.img-bottom {
  flex: 1;
  height: 30rem;
  width: 100%;
  margin-right: 2rem;
}

.bottom-context {
  flex: 1;
}

.bottom-context a {
  margin-top: 2rem;
}

.img-bottom img {
  object-fit: cover;
}

@media (max-width: 600px) {
  .bottom-section {
    flex-direction: column;
    padding: unset;
  }

  .img-bottom {
    height: 30rem;
    width: 100%;
  }

  .bottom-context {
    padding: 1rem 0;
  }
}
</style>
