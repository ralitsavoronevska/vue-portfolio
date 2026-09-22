<template>
  <div class="hero-img-container">
    <img
      :src="heroImg"
      alt="Ralitsa Voronevska"
      class="hero-img"
      loading="eager"
      fetchpriority="high"
      decoding="async"
      width="320"
      height="320"
      sizes="(max-width: 640px) 200px, 320px"
    />
  </div>
</template>

<script setup lang="ts">
import heroImg from "@/assets/images/hero.webp";
</script>
