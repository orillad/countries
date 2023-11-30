<template>
    <section>
      <h1>{{ experience?.name }}</h1>
      <img :src="`/images/${experience?.image}`" :alt="experience?.name" />
      <p>{{ experience?.description }}</p>
    </section>
  </template>
  
  <script setup lang="ts">
  
  import sourceData from '@/assets/data.json';
  
  const props = defineProps(['id', 'experienceSlug']);
  
  const destination = sourceData.destinations.find(
    (destination) => destination.id === props.id
  );
  
  const experience = destination?.experiences.find(
    (experience) => experience.slug === props.experienceSlug
  );
  </script>
  