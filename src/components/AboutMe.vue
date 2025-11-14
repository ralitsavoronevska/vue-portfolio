<template>
  <section id="about" class="about-me flex flex-col text-center relative mx-3">

    <h2 class="display-2 mb-2">About <span class="gradient-text">Me</span></h2>
    <h3 class="sm-heading mt-2 mb-4">Hi, I'm <span class="gradient-text">Ralitsa Voronevska</span>!</h3>

    <!-- start of hero-skills-and-bio -->
    <div class="hero-skills-and-bio flex flex-col lg:flex-row">

      <!-- start of hero-and-skills -->
      <div class="hero-and-skills important-el rounded-2xl p-3 flex flex-col">

        <!-- Hero Image -->
        <HeroImage />

        <!-- start of glow-icons -->
        <div ref="iconsRef" class="glow-icons mt-3 mx-auto flex flex-wrap justify-center gap-1 md:gap-2">
          <div
            v-for="(tech, index) in techStack"
            :key="tech.name"
            class="group relative glow-icon cursor-pointer w-[42px] h-[42px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px] xxl:w-[45px] xxl:h-[45px]
                   flex items-center justify-center"
            :class="[
              isVisible
                ? `opacity-100 scale-100 translate-y-0 delay-${(index + 1) * 100}`
                : 'opacity-0 scale-75 translate-y-4',
              'transition-all duration-500 ease-out'
            ]"
            tabindex="0"
            role="img"
            :aria-label="`${tech.name} Logo`"
          >
            <!-- Glow Box -->
            <div
              class="glow-box-parent w-[42px] h-[42px] md:w-[45px] md:h-[45px] lg:w-[45px] lg:h-[45px] xxl:w-[45px] xxl:h-[45px]
                      rounded-lg flex items-center justify-center
                      bg-white/10 backdrop-blur-sm
                      shadow-[0_0_5px_var(--color-dark-overlay),0_0_10px_var(--color-dark-overlay),0_0_15px_var(--color-dark-overlay),inset_0_0_5px_rgba(255,255,255,0.5)]
                      animate-pulse hover:animate-none
                      transition-all duration-300
                      hover:shadow-[0_0_10px_var(--color-white)]
                      hover:scale-110 hover:rotate-3
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
              @click.prevent
            >
              <img
                :src="`/assets/icons/${tech.svg}.svg`"
                :alt="`${tech.name} Logo`"
                class="w-6 h-6 md:w-7 md:h-7 lg:w-9 lg:h-9"
                loading="lazy"
              />
            </div>

            <!-- Tooltip -->
            <span
              class="tooltip pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2
                      bg-black text-white text-xs px-2 py-1 rounded-xl
                      opacity-0 invisible translate-y-2
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      group-focus:opacity-100 group-focus:visible group-focus:translate-y-0
                      transition-all duration-300 z-10
                      whitespace-nowrap"
            >
              {{ tech.name }}
              <span
                class="absolute bottom-[-7px] left-1/2 -translate-x-1/2
                        w-0 h-0 border-4 border-transparent border-t-black"
              ></span>
            </span>
          </div>
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
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeroImage from './HeroImage.vue';
import { usePortfolioData } from '@/composables/usePortfolioData';

const { techStack } = usePortfolioData();

const iconsRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry?.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )

  if (iconsRef.value) observer.observe(iconsRef.value)
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