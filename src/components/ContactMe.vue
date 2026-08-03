<template>
  <!-- start of Contact Me Section -->
  <section ref="sectionRef" id="contact" class="contact-me">
    <!-- start of headings -->
    <h2
      :class="revealClasses"
      :style="isVisible ? revealStyle(100) : undefined"
    >
      Contact <span class="gradient-text">Me</span>
    </h2>
    <p
      class="contact-me-text"
      :class="revealClasses"
      :style="isVisible ? revealStyle(200) : undefined"
    >
      I'd love if you reach out to me. Even if it's to say:
      <span class="gradient-text">"Hey!"</span>
      <br />
      Don't hesitate! Drop me a line and I’ll reply to you
      <span class="gradient-text">ASAP</span>!
    </p>

    <p
      class="location"
      :class="revealClasses"
      :style="isVisible ? revealStyle(300) : undefined"
    >
      <img
        :src="mapMarker"
        class="w-8 h-8"
        alt="Map Marker icon"
        loading="lazy"
      />
      <span>Varna, Bulgaria</span>
    </p>
    <!-- end of headings -->

    <!-- start of social-icons -->
    <div
      class="social-icons"
      :class="revealClasses"
      :style="isVisible ? revealStyle(400) : undefined"
    >
      <SocialIcons :icons="contactSocialIcons" />
    </div>
    <!-- end of social-icons -->
  </section>
  <!-- end of Contact Me Section -->
</template>

<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import SocialIcons from "./SocialIcons.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
import { useInView } from "@/composables/useInView";
import mapMarker from "@/assets/icons/map-marker.svg";

const { contactSocialIcons } = usePortfolioData();
const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
const { isVisible } = useInView(sectionRef);

const revealClasses = computed(() => ({
  "transition-all duration-700 ease-out": true,
  "opacity-100 translate-y-0": isVisible.value,
  "opacity-0 translate-y-8": !isVisible.value,
}));

const revealStyle = (delay: number) => ({
  transitionDelay: `${delay}ms`,
});
</script>
