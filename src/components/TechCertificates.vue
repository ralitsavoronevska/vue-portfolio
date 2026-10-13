<script setup lang="ts">
import { computed, useTemplateRef } from "vue";
import { usePortfolioData } from "@/composables/usePortfolioData";
import { useReveal } from "@/composables/useReveal";

const {
  certificationsTitle,
  certificationsTitleHighlight,
  certificationsSubtitle,
  certifications,
} = usePortfolioData();

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

const { isVisible, revealClasses, revealStyle } =
  useReveal(sectionRef);

const completed = computed(() =>
  certifications.filter((item) => item.status === "completed"),
);

const inProgress = computed(() =>
  certifications.filter((item) => item.status === "in-progress"),
);

const planned = computed(() =>
  certifications.filter((item) => item.status === "planned"),
);
</script>

<template>
  <section
    id="certifications"
    ref="sectionRef"
    class="certifications-section"
    aria-labelledby="certifications-heading"
  >
    <header
      :class="revealClasses"
      :style="isVisible ? revealStyle(100) : undefined"
    >
      <h2 id="certifications-heading">
        {{ certificationsTitle }}
        <span class="gradient-text">
          {{ certificationsTitleHighlight }}
        </span>
      </h2>
      <p class="certifications-subtitle">
        {{ certificationsSubtitle }}
      </p>
    </header>

    <!-- Completed Certifications -->
    <div
      class="certifications-category"
      :class="revealClasses"
      :style="isVisible ? revealStyle(200) : undefined"
    >
      <h3>Certifications &amp; Completed Training</h3>
      <p class="certifications-description">
        Completed courses, certifications and professional development
      </p>

      <div class="certifications-grid">
        <article
          v-for="certificate in completed"
          :key="certificate.title"
          class="certificate-card"
        >
          <a
            v-if="certificate.image"
            :href="certificate.image"
            target="_blank"
            rel="noopener noreferrer"
            class="certificate-image-link"
            :aria-label="`View certificate: ${certificate.title} (opens in a new tab)`"
          >
            <img
              :src="certificate.image"
              alt=""
              width="1198"
              height="890"
              loading="lazy"
              decoding="async"
              class="certificate-image"
            />
          </a>

          <div class="certificate-content">
            <h4>{{ certificate.title }}</h4>
            <p class="certificate-issuer">
              {{ certificate.issuer }}
              <span v-if="certificate.year">
                · {{ certificate.year }}
              </span>
            </p>
          </div>
        </article>
      </div>
    </div>
    
    <!-- Currently Pursuing -->
    <div
      class="certifications-category"
      :class="revealClasses"
      :style="isVisible ? revealStyle(300) : undefined"
    >
      <h3>Currently Pursuing</h3>
      <p class="certifications-description">
        Ongoing certifications, training, and professional experience
      </p>

      <div class="certifications-grid certifications-grid--progress">
        <article
          v-for="certificate in inProgress"
          :key="certificate.title"
          class="certificate-card certificate-card--progress"
        >
          <img
            v-if="certificate.image"
            :src="certificate.image"
            alt=""
            loading="lazy"
            decoding="async"
            class="certificate-progress-image"
          />

          <div class="certificate-content">
            <h4>{{ certificate.title }}</h4>

            <p class="certificate-issuer">
              {{ certificate.issuer }}
            </p>

            <p
              v-if="certificate.description"
              class="certificate-description"
            >
              {{ certificate.description }}
            </p>

            <span class="certificate-status">
              In Progress
            </span>
          </div>
        </article>
      </div>
    </div>

    <!-- Learning Roadmap -->
    <div
      class="certifications-category"
      :class="revealClasses"
      :style="isVisible ? revealStyle(400) : undefined"
    >
      <h3>Learning Roadmap</h3>
      <p class="certifications-description">
        Planned certifications and future learning goals
      </p>

      <ul class="certifications-roadmap">
        <li
          v-for="certificate in planned"
          :key="certificate.title"
          class="roadmap-item"
        >
          <span class="roadmap-title">
            {{ certificate.title }}
          </span>
          <span class="roadmap-issuer">
            {{ certificate.issuer }}
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>