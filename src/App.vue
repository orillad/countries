<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue';
</script>

<template>
  <header>
    <TheNavigation />
  </header>
  <div class="container">
    <RouterView class="main-view" />
  </div>
</template>
