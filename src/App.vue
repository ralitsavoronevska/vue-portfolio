<template>
  <main>
    <!-- Fixed background and overlay -->
    <div
      class="bg-container"
      :style="{ backgroundImage: `url(${fullBg})` }"
    ></div>
    <div class="overlay"></div>

    <div class="content-wrapper">
      <!-- ScrollToTop Button -->
      <ScrollToTop />

      <!-- Header -->
      <Header />

      <!-- Hero Section -->
      <Hero />

      <!-- About Me Section -->
      <AboutMe />

      <!-- Tech Skills Section -->
      <TechSkills />

      <!-- Projects Section -->
      <ProjectsList />

      <!-- Tech Certificates -->
       <TechCertificates />

      <!-- Contact Me Section -->
      <ContactMe />

      <!-- Footer -->
      <Footer />
    </div>
  </main>
</template>

<script setup lang="ts">
import fullBg from "@/assets/images/full-bg.webp";

import ScrollToTop from "./components/ScrollToTop.vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import AboutMe from "./components/AboutMe.vue";
import TechSkills from "./components/TechSkills.vue";
import ProjectsList from "./components/ProjectsList.vue";
import TechCertificates from "./components/TechCertificates.vue";
import ContactMe from "./components/ContactMe.vue";
import Footer from "./components/Footer.vue";
</script>
