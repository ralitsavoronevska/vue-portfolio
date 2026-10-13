<script setup lang="ts">
import { useTemplateRef } from "vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
import { useReveal } from "@/composables/useReveal";

const {
  techSkillsTitle,
  techSkillsTitleHighlight,
  techSkillsSubtitle,
  techSkillGroups,
  previousTechSkills,
  techInterestGroups,
} = usePortfolioData();

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
const { isVisible, revealClasses, revealStyle } = useReveal(sectionRef);
</script>

<template>
  <section
    id="tech-skills"
    ref="sectionRef"
    class="tech-skills-section"
    aria-labelledby="tech-skills-heading"
  >
    <header
      :class="revealClasses"
      :style="isVisible ? revealStyle(100) : undefined"
    >
      <h2 id="tech-skills-heading">
        {{ techSkillsTitle }}
        <span class="gradient-text">{{ techSkillsTitleHighlight }}</span>
      </h2>
      <p class="tech-skills-subtitle">{{ techSkillsSubtitle }}</p>
    </header>

    <!-- Core Expertise -->
    <div
      class="tech-skills-category"
      :class="revealClasses"
      :style="isVisible ? revealStyle(200) : undefined"
    >
      <h3>Core Expertise</h3>
      <p class="tech-skills-category-description">
        Professional experience &amp; hands-on technologies
      </p>

      <div class="tech-skills-grid">
        <article
          v-for="group in techSkillGroups"
          :key="group.title"
          class="tech-skills-card"
        >
          <h4>{{ group.title }}</h4>
          <ul class="tech-skills-list">
            <li v-for="skill in group.skills" :key="skill">
              {{ skill }}
            </li>
          </ul>
        </article>
      </div>
    </div>

    <!-- Previous Experience -->
    <div
      class="tech-skills-category"
      :class="revealClasses"
      :style="isVisible ? revealStyle(300) : undefined"
    >
      <h3>Previous Experience &amp; Refreshing</h3>
      <p class="tech-skills-category-description">
        Technologies from previous roles and skills I'm revisiting
      </p>

      <div class="tech-skills-grid">
        <article
          v-for="group in previousTechSkills"
          :key="group.title"
          class="tech-skills-card"
        >
          <h4>{{ group.title }}</h4>
          <ul class="tech-skills-list">
            <li v-for="skill in group.skills" :key="skill">
              {{ skill }}
            </li>
          </ul>
        </article>
      </div>
    </div>

    <!-- Interests -->
    <div
      class="tech-skills-category"
      :class="revealClasses"
      :style="isVisible ? revealStyle(400) : undefined"
    >
      <h3>Exploring &amp; Interested In</h3>
      <p class="tech-skills-category-description">
        Technologies I'm interested in learning and exploring further
      </p>

      <div class="tech-skills-grid">
        <article
          v-for="group in techInterestGroups"
          :key="group.title"
          class="tech-skills-card"
        >
          <h4>{{ group.title }}</h4>
          <ul class="tech-skills-list">
            <li v-for="skill in group.skills" :key="skill">
              {{ skill }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>