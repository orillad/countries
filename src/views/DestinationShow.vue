<template>
  <div>
    <section v-if="destination" class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name" :width="500" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top Experiences in {{ destination?.name }}</h2>
      <div class="cards">
        <RouterLink v-for="experience in destination?.experiences" :key="experience.slug"
          :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }">
          <ExperienceCard :experience="experience" />
        </RouterLink>

      </div>
      <RouterView :key="$route.fullPath"/>

    </section>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, computed, onMounted } from 'vue';
import data from "@/assets/data.json";
import ExperienceCard from '@/components/ExperienceCard.vue'

const props = defineProps(['id']);


const destination = computed(() => {
  return data.destinations.find(
    (destination: { id: number; }) => destination.id === props.id
  );
});
</script>
