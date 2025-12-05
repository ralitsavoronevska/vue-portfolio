<template>
  <!-- start of About Section -->
  <section id="about" class="about-me">

    <!-- headings -->
    <h2>About <span class="gradient-text">Me</span></h2>
    <h3>Hi, I'm <span class="gradient-text">Ralitsa Voronevska</span>!</h3>

    <div class="btns-container">
      <a href="#projects" role="button" aria-label="View my Projects">
        <button class="btn-styles" type="button">
          View Projects
        </button>
      </a>
      <a href="https://ralitsavoronevska.com/dist/assets/Ralitsa-Voronevska-CV.pdf" download="Ralitsa-Voronevska-CV.pdf" role="button" aria-label="Download my Resume">
        <button class="btn-styles" type="button">
          Download Resume
        </button>
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
          <GlowIcon v-for="(tech, i) in techStack"
            :key="tech.name"
            :tech="tech"
            :index="i"
            :iconSizes="`w-9.5 h-9.5 md:w-12 md:h-12 lg:w-9 lg:h-10 xl:w-11 xl:h-11 rounded-lg`"
            :boxSizes="`w-9.5 h-9.5 md:w-12 md:h-12 lg:w-9 lg:h-10 xl:w-11 xl:h-11`"
            :isVisible="isVisible" />
        </div>
        <!-- end of glow-icons -->  

      </div>
      <!-- end of hero-and-skills -->

      <!-- start of bio -->
      <div class="bio">
        <p class="bio-text">A <span class="gradient-text">creative, passionate and proactive "can-do"</span> Front-end Developer with <span class="gradient-text">4 ½ years</span> of experience in building <span class="gradient-text">high-performance, scalable and responsive web solutions</span>, following all the best practices in terms of <span class="gradient-text">UI/UX</span>, <span class="gradient-text">accessibility</span>, <span class="gradient-text">SEO</span> and <span class="gradient-text">SOLID principles</span>. I am focused on crafting solutions tailored to both <span class="gradient-text">user needs and business objectives</span>. I stand out with <span class="gradient-text">strong attention to detail</span>, <span class="gradient-text">excellent communication</span> and <span class="gradient-text">negotiation skills</span>, as well as my <span class="gradient-text">ability to work well individually and/or as a part of a team</span>. I have experience in <span class="gradient-text">dynamic environments</span> and I am <span class="gradient-text">enthusiastic regarding overcoming challenges and reaching targets</span>.</p>
      </div>
      <!-- end of bio -->

    </div>
    <!-- end of hero-skills-and-bio -->  
      
  </section>
  <!-- end of About Section -->
</template>
  
<script setup lang="ts">
import HeroImage from './HeroImage.vue';
import GlowIcon from './GlowIcon.vue';
import { usePortfolioData } from '@/composables/usePortfolioData';
const { techStack } = usePortfolioData();
import { useInView } from '@/composables/useInView';

const { sectionRef, isVisible } = useInView()
</script>