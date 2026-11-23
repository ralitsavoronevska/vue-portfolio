<script setup lang="ts">
import { useTemplateRef } from "vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
import { useReveal } from "@/composables/useReveal";

const {
  techSkillsTitle,
  techSkillsTitleHighlight,
  techSkillsSubtitle,
  techSkillsCoreTitle,
  techSkillsCoreDescription,
  techSkillsPreviousTitle,
  techSkillsPreviousDescription,
  techSkillsInterestsTitle,
  techSkillsInterestsDescription,
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
      <h3>{{ techSkillsCoreTitle }}</h3>
      <p class="tech-skills-category-description">
        {{ techSkillsCoreDescription }}
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
      <h3>{{ techSkillsPreviousTitle }}</h3>
      <p class="tech-skills-category-description">
        {{ techSkillsPreviousDescription }}
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
      <h3>{{ techSkillsInterestsTitle }}</h3>
      <p class="tech-skills-category-description">
        {{ techSkillsInterestsDescription }}
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