
<template>
  <template v-for="icon in icons" :key="icon.file_name">
    <a
      v-if="icon.url?.trim()"
      :href="icon.url"
      target="_blank"
      rel="noopener noreferrer"
      class="social-link rounded-full"
      :aria-label="getAriaLabel(icon)"
    >
      <img
        :src="getSrc(icon)"
        class="social-icon"
        data-testid="social-icon"
        alt=""
        loading="lazy"
      />
    </a>

    <span
      v-else
      class="social-link rounded-full"
      aria-hidden="true"
    >
      <img
        :src="getSrc(icon)"
        class="social-icon"
        alt=""
        loading="lazy"
      />
    </span>
  </template>
</template>


<script setup lang="ts">
const props = defineProps<{
  icons: Array<{
    name: string;
    url: string;
    file_name: string;
  }>;
  aria?: string;
}>();

const getAriaLabel = (icon: { name: string; file_name: string }) => {
  if (props.aria) {
    if (icon.file_name === "live") {
      return `Visit my ${props.aria} Project's ${icon.name} Preview`;
    } else {
      return `View my ${props.aria} Project in ${icon.name}`;
    }
  } else if (icon.file_name === "email") {
    return `Let's connect! Send me an email!`;
  }
  return `Visit my ${icon.name} Profile`;
};

// Pre-load all icons at build time, typed as a mapping to string URLs
const socialIcons = import.meta.glob("@/assets/icons/social-icons/*.svg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const getSrc = (icon: { file_name: string }) => {
  const path = `/src/assets/icons/social-icons/${icon.file_name}.svg`;
  return socialIcons[path] ?? "";
};
</script>

<script lang="ts">
export default {
  name: "SocialIcons",
};
</script>
