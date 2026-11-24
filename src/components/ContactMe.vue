<template>
  <!-- start of Contact Me Section -->
  <section ref="sectionRef" id="contact" class="contact-me">
    <!-- start of headings -->
    <h2
      :class="revealClasses"
      :style="isVisible ? revealStyle(100) : undefined"
    >
      {{ contactTitle }}
      <span class="gradient-text">{{ contactTitleHighlight }}</span>
    </h2>
    <p
      class="contact-me-text"
      :class="revealClasses"
      :style="isVisible ? revealStyle(200) : undefined"
      v-html="contactText"
    ></p>

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
      <span>{{ contactLocation }}</span>
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
import { useTemplateRef } from "vue";
import SocialIcons from "./SocialIcons.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
import { useReveal } from "@/composables/useReveal";
import mapMarker from "@/assets/icons/map-marker.svg";

const {
  contactSocialIcons,
  contactTitle,
  contactTitleHighlight,
  contactText,
  contactLocation,
} = usePortfolioData();

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

const { isVisible, revealClasses, revealStyle } =
  useReveal(sectionRef);
</script>