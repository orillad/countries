<template>
    <div class="destination-container">
      <h1>All destinations</h1>
      <div class="destination-list">
        <div v-for="(destination, index) in destinations" :key="index" class="destination-item">

          <h3 class="destination-name">{{ destination.name }}</h3>
          <RouterLink :to="'/destination/' + destination.id + '/' + destination.slug">

          <img
            :src="'/images/' + destination.image"
            :alt="destination.name"
            class="destination-image"
          />

        </RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import data from '@/assets/data.json';
  
  const destinations = ref(data.destinations);
  </script>
  
  <style scoped>  
  .destination-container {
    max-width: 100%;
    margin: 0 auto;
    flex-direction: row;
  }
  
  .destination-list {
    display: flex;
    flex-wrap: wrap;
  }
  .destination-item {
    margin: 10px;
  }
  
  .destination-name {
    margin-bottom: 8px;
  }
  
  .destination-image {
    max-width: 100%;
    max-height: 150px;
    border-radius: 4px;
  }


  </style>
  