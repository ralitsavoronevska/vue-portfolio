<template>
  <!-- start of About Section -->
  <section ref="sectionRef" id="about" class="about-me flex flex-col items-center justify-center text-center relative mx-3 pt-20 pb-20 scroll-mt-40">

    <!-- headings -->
    <h2 class="text-4xl md:text-5xl mb-4">About <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">Me</span></h2>
    <h3 class="text-2xl md:text-3xl lg:text-4xl mt-4 mb-6">Hi, I'm <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">Ralitsa Voronevska</span>!</h3>

    <!-- start of hero-skills-and-bio -->
    <div class="hero-skills-and-bio flex flex-col lg:flex-row">

      <!-- start of hero-and-skills -->
      <div class="hero-and-skills bg-slate-950/75 shadow-3xl rounded-2xl p-3 flex flex-col">

        <!-- Hero Image -->
        <HeroImage />

        <!-- start of glow-icons -->
        <div ref="iconsRef" class="glow-icons flex justify-flex items-center justify-center flex-wrap mt-3 mx-auto gap-1 md:gap-2" :class="techStack.length > 5 ? 'gap-2' : 'gap-3'">
          <GlowIcon v-for="(tech, i) in techStack"
            :key="tech.name"
            :tech="tech"
            :index="i"
            :iconSizes="`w-11 h-11 md:w-12 md:h-12 lg:w-11 lg:h-11 rounded-lg`"
            :boxSizes="`w-11 h-11 md:w-12 md:h-12 lg:w-11 lg:h-11`"
            :imgSizes="`w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9`"
            :isVisible="isVisible" />
        </div>
        <!-- end of glow-icons -->  

      </div>
      <!-- end of hero-and-skills -->

      <!-- start of bio -->
      <div class="bio bg-slate-950/75 shadow-3xl rounded-2xl p-3 flex flex-col mt-4 lg:mt-0 lg:ms-4">
        <p class="bio-text text-2xl md:text-3xl lg:text-2xl xl:text-[28px] 2xl:text-[32px] leading-normal items-center justify-center ps-0 md:p-3 xxl:px-3 mb-0 lg:my-auto">A <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">creative, passionate and proactive "can-do"</span> Front-end Developer with <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">4 ½ years</span> of experience in building <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">eye catching, high-performance, scalable and responsive web solutions</span>, following all the best practices in terms of <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">UI/UX</span>, <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">accessibility</span>, <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">SEO</span> and <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">SOLID principles</span>. I am focused on crafting solutions tailored to both <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">user needs and business objectives</span>. I stand out with <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">strong attention to detail</span>, <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">excellent communication</span> and <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">negotiation skills</span>, as well as my <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">ability to work well individually and/or as a part of a team</span>. I have a lot of experience in <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">dynamic environments</span> and I am <span class="bg-linear-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent">very enthusiastic regarding overcoming challenges and reaching targets</span>.</p>
      </div>
      <!-- end of bio -->

    </div>
    <!-- end of hero-skills-and-bio -->  
      
  </section>
  <!-- end of About Section -->
</template>
  
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
  const observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) isVisible.value = true
  })
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<style scoped>
#about {
  .hero-and-skills { 
    @media (min-width: 992px) {
      min-width: 16rem; /* 256px */
    }
    @media (min-width: 1200px) {
      min-width: 21.875rem; /* 350px */
    }
    @media (min-width: 1400px) {
      min-width: 26.5625rem; /* 425px */
    }
    @media (min-width: 1600px) {
      min-width: 21.875rem; /* 350px */
    }
    @media (min-width: 1920px) {
      min-width: 30.3125rem; /* 485px */
    }
  }
}
</style>