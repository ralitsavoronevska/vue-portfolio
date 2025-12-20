<template>
  <div class="hero-img-container">
    <img
      :src="heroImg"
      alt="Ralitsa Voronevska"
      class="hero-img"
      loading="eager"
    />
  </div>
</template>

<script setup lang="ts">
import heroImg from "@/assets/images/hero.webp";
</script>
