<!-- src/components/CollectionSection.vue -->
<template>
  <div class="container collection">
    <div class="headline-collection">
      <h2 class="text-xl">
        We meticulously curate our <mark>product selections</mark> to ensure you
        receive only the best.
      </h2>
    </div>
    <div class="images-collection">
      <div class="collection-left">
        <img :src="product1" alt="Product 1" />
        <img :src="product2" alt="Product 2" />
        <img :src="product3" alt="Product 3" />
      </div>
      <div class="collection-right">
        <img :src="product4" alt="Product 4" />
        <img :src="product5" alt="Product 5" />
        <img :src="product6" alt="Product 6" />
      </div>
    </div>
  </div>
</template>

<script setup>
import product1 from "@/assets/img/home-office.jpg";
import product2 from "@/assets/img/Kursi.jpg";
import product3 from "@/assets/img/living-romm-2.jpg";
import product4 from "@/assets/img/living-room.jpg";
import product5 from "@/assets/img/picture-frame-by-velvet-armchair.jpg";
import product6 from "@/assets/img/vertical-shot-wooden-chair-white.jpg";
</script>

<style scoped>
.collection {
  width: 100%;
}
.headline-collection {
  text-align: left;
  padding: 2rem;
}

.headline-collection h2 {
  margin-right: 50%;
}

.images-collection {
  display: flex;
  justify-content: center;
  gap: 0;
}

.collection-left,
.collection-right {
}

.images-collection img {
  width: 13rem;
  height: auto;
  object-fit: contain;
  padding: 0.5rem;
}

@media (max-width: 600px) {
  .headline-collection h2 {
    margin: unset;
  }

  .headline-collection {
    text-align: left;
    padding: unset;
  }

  .collection {
    padding: unset;
  }
}
</style>
