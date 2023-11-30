<script lang="ts" setup>
import { ref } from 'vue';
import data from '@/assets/data.json';
import { RouterLink, RouterView } from 'vue-router'

const destinations = ref(data.destinations);
</script>

<template>
  <div class="header">
    <RouterLink class="link" to="/">Home</RouterLink>
    <RouterLink class="link" v-for="destination in destinations" :to="'/destination/' + destination.id + '/' + destination.slug">{{ destination.name }}</RouterLink>
  </div>
</template>

<style scoped>
.header {
  background-color: #2c3e50; 
  padding: 15px;
}

.link {
  margin: 0 10px;
  color: #acafae;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
}

.link:hover {
  color: white; 
  
}
</style>
