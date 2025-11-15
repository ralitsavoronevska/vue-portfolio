<template>
  <!-- start of About Section -->
  <section ref="sectionRef" id="about" class="about-me flex flex-col text-center relative mx-3">

    <!-- headings -->
    <h2 class="display-2 leading-[1.2] mb-2">About <span class="gradient-text">Me</span></h2>
    <h3 class="sm-heading mt-2 mb-4">Hi, I'm <span class="gradient-text">Ralitsa Voronevska</span>!</h3>

    <!-- start of hero-skills-and-bio -->
    <div class="hero-skills-and-bio flex flex-col lg:flex-row">

      <!-- start of hero-and-skills -->
      <div class="hero-and-skills important-el rounded-2xl p-3 flex flex-col">

        <!-- Hero Image -->
        <HeroImage />

        <!-- start of glow-icons -->
        <div ref="iconsRef" class="glow-icons flex justify-center flex-wrap mt-3 mx-auto gap-1 md:gap-2" :class="techStack.length > 5 ? 'gap-2' : 'gap-3'">
          <!-- Glow Icons -->
          <GlowIcon v-for="(tech, i) in techStack"
            :key="tech.name"
            :tech="tech"
            :index="i"
            :isVisible="isVisible" />
            
        </div>
        <!-- end of glow-icons -->  

      </div>
      <!-- end of hero-and-skills -->

      <!-- start of bio -->
      <div class="bio important-el rounded-2xl p-3 flex flex-col mt-4 lg:mt-0 lg:ms-4">
        <p class="bio-text sm-heading text-center ps-0 xxl:px-3 mb-0 lg:my-auto">A <span class="gradient-text">creative, passionate and proactive "can-do"</span> Front-end Developer with <span class="gradient-text">4 ½ years</span> of experience in building <span class="gradient-text">eye catching, high-performance, scalable and responsive web solutions</span>, following all the best practices in terms of <span class="gradient-text">UI/UX</span>, <span class="gradient-text">accessibility</span>, <span class="gradient-text">SEO</span> and <span class="gradient-text">SOLID principles</span>. I am focused on crafting solutions tailored to both <span class="gradient-text">user needs and business objectives</span>. I stand out with <span class="gradient-text">strong attention to detail</span>, <span class="gradient-text">excellent communication</span> and <span class="gradient-text">negotiation skills</span>, as well as my <span class="gradient-text">ability to work well individually and/or as a part of a team</span>. I have a lot of experience in <span class="gradient-text">dynamic environments</span> and I am <span class="gradient-text">very enthusiastic regarding overcoming challenges and reaching targets</span>.</p>
      </div>
      <!-- end of bio -->

    </div>
    <!-- end of hero-skills-and-bio -->  
      
  </section>
  <!-- end of About Section -->
</template>
                  :tech="tech"
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HeroImage from './HeroImage.vue';
import GlowIcon from './GlowIcon.vue';
import { usePortfolioData } from '@/composables/usePortfolioData';
const { techStack } = usePortfolioData();

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

// Scroll trigger
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
</script>

<style scoped>
.important-el {
  background: rgba(30, 22, 33, .85);
  box-shadow: .1875rem .1875rem .75rem rgba(248, 99, 189, .25); /* 3px 3px 12px */
}

/* Custom CSS for 3D tilt + pulse */
.glow-box-parent {
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
}

.group {
  &:hover, &:focus {
    .glow-box-parent {
      transform: perspective(1000px) rotateX(10deg) rotateY(10deg) scale(1.1);
    }
  }
}

@keyframes pulse-custom {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-pulse-custom {
  animation: pulse-custom 2s infinite;
}

.tooltip {
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border: 5px solid transparent;
    border-top-color: black;
  }
}
</style>