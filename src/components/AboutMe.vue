<template>
  <!-- start of About Section -->
  <section id="about" class="about-me">
    <!-- headings -->
    <h2>About <span class="gradient-text">Me</span></h2>
    <h3>Hi, I'm Ralitsa Voronevska!</h3>

    <div class="btns-container">
      <a href="#projects" role="button" aria-label="View my Projects">
        <button class="btn-styles" type="button">View Projects</button>
      </a>
      <a
        href="https://ralitsavoronevska.com/assets/Ralitsa-Voronevska-CV.pdf"
        target="_blank"
        rel="noopener"
        download="Ralitsa-Voronevska-CV.pdf"
        role="button"
        aria-label="Download my Resume"
      >
        <button class="btn-styles" type="button">Download Resume</button>
      </a>
    </div>

    <!-- start of hero-skills-and-bio -->
    <div class="hero-skills-and-bio">
      <!-- start of hero-and-skills -->
      <div class="hero-and-skills">
        <!-- Hero Image -->
        <HeroImage />

        <!-- start of glow-icons -->
        <div ref="sectionRef" class="glow-icons">
          <GlowIcons
            v-for="(tech, i) in techStack"
            :key="tech.name"
            :tech="tech"
            :index="i"
            :iconSizes="`w-9.5 h-9.5 md:w-12 md:h-12 lg:w-9 lg:h-10 xl:w-11 xl:h-11 rounded-lg`"
            :boxSizes="`w-9.5 h-9.5 md:w-12 md:h-12 lg:w-9 lg:h-10 xl:w-11 xl:h-11`"
            :imgSizes="`w-9.5 h-9.5 md:w-12 md:h-12 lg:w-9 lg:h-10 xl:w-11 xl:h-11`"
            :isVisible="isVisible"
          />
        </div>
        <!-- end of glow-icons -->
      </div>
      <!-- end of hero-and-skills -->

      <!-- start of bio -->
      <div class="bio">
        <p class="bio-text">
          A creative, passionate and proactive "can-do" Front-end Developer with
          6 years of experience in building high-performance, scalable and
          responsive web solutions, following all the best practices in terms of
          UI/UX, accessibility, SEO and SOLID principles. I am focused on
          crafting solutions tailored to both user needs and business
          objectives. I stand out with strong attention to detail, excellent
          communication and negotiation skills, as well as my ability to work
          well individually and/or as a part of a team. I have experience in
          dynamic environments and I am enthusiastic regarding overcoming
          challenges and reaching targets.
        </p>
      </div>
      <!-- end of bio -->
    </div>
    <!-- end of hero-skills-and-bio -->
  </section>
  <!-- end of About Section -->
</template>

<script setup lang="ts">
import HeroImage from "./HeroImage.vue";
import GlowIcons from "./GlowIcons.vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
import { useInView } from "@/composables/useInView";
import { useTemplateRef } from "vue";

const { techStack } = usePortfolioData();
const sectionRef = useTemplateRef<HTMLDivElement>("sectionRef");
const { isVisible } = useInView(sectionRef);
</script>
